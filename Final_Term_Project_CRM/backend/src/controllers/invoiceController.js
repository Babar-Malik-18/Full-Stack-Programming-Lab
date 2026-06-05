const Invoice = require('../models/Invoice');
const Customer = require('../models/Customer');

const money = value => Math.round(Number(value || 0) * 100) / 100;

exports.createInvoice = async (req, res) => {
  try {
    const { customerId, items, summary } = req.body;
    const customer = await Customer.findOne({ _id: customerId, owner: req.user._id });

    if (!customer) return res.status(404).json({ success: false, message: 'Selected customer was not found.' });
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: 'At least one invoice service item is required.' });
    }

    const normalizedItems = items.map(item => ({
      description: item.description,
      quantity: Number(item.quantity),
      price: Number(item.price)
    }));

    const subtotal = money(normalizedItems.reduce((sum, item) => sum + item.quantity * item.price, 0));
    const tax = money(subtotal * 0.05);
    const total = money(subtotal + tax);

    const invoiceNo = `CRM-${Date.now().toString().slice(-7)}`;
    const invoice = await Invoice.create({
      invoiceNo,
      customer: customer._id,
      items: normalizedItems,
      subtotal,
      tax,
      total,
      summary,
      owner: req.user._id
    });

    await invoice.populate('customer');
    res.status(201).json({ success: true, message: 'Invoice generated successfully.', invoice });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ owner: req.user._id }).populate('customer').sort({ createdAt: -1 });
    res.json({ success: true, count: invoices.length, invoices });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
