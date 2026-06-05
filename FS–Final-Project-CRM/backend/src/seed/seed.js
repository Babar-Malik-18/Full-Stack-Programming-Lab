require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');
const Customer = require('../models/Customer');
const Invoice = require('../models/Invoice');

const daysFromNow = days => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

const customers = [
  ['Areeba Khan', 'areeba@nova.pk', '+92 300 1112233', 'Nova Retail', 'Lead', 'High', 85000, 'Website', daysFromNow(1), ['proposal', 'retail'], 'Interested in a monthly CRM support plan. Send premium proposal and demo link.'],
  ['Hamza Ali', 'hamza@orbit.pk', '+92 301 2223344', 'Orbit Foods', 'Active', 'Medium', 210000, 'Referral', daysFromNow(4), ['food', 'monthly'], 'Needs monthly invoices and sales follow-up.'],
  ['Sara Ahmed', 'sara@pixel.pk', '+92 302 3334455', 'Pixel Studio', 'Inactive', 'Low', 45000, 'Instagram', daysFromNow(14), ['creative', 'budget'], 'Paused because of budget approval delay.'],
  ['Usman Raza', 'usman@quickmart.pk', '+92 303 4445566', 'QuickMart', 'Active', 'High', 320000, 'Expo', daysFromNow(2), ['enterprise', 'priority'], 'High-value customer. Wants priority support and reporting.'],
  ['Maha Noor', 'maha@green.pk', '+92 304 5556677', 'GreenTech', 'Lead', 'High', 125000, 'LinkedIn', daysFromNow(3), ['green-tech', 'invoice'], 'Requested invoice for initial consultation.'],
  ['Bilal Shah', 'bilal@medix.pk', '+92 305 6667788', 'Medix Care', 'Active', 'High', 500000, 'Website', daysFromNow(1), ['healthcare', 'enterprise'], 'Enterprise onboarding in progress. Schedule success review.'],
  ['Zain Malik', 'zain@stack.pk', '+92 306 7778899', 'StackSoft', 'Inactive', 'Medium', 77000, 'Cold Call', daysFromNow(21), ['software', 'cold'], 'No response after demo. Follow up next month.'],
  ['Hira Faisal', 'hira@bright.pk', '+92 307 8889900', 'Bright Academy', 'Lead', 'Medium', 99000, 'Facebook', daysFromNow(5), ['education', 'inquiries'], 'Needs student inquiry management module.'],
  ['Danish Iqbal', 'danish@build.pk', '+92 308 9990011', 'BuildRight', 'Active', 'Medium', 275000, 'Referral', daysFromNow(6), ['construction', 'tracking'], 'Asked for customer status tracking and daily reports.'],
  ['Nimra Aslam', 'nimra@travel.pk', '+92 309 1011121', 'TravelLoop', 'Lead', 'High', 150000, 'Website', daysFromNow(2), ['travel', 'billing'], 'Interested in automated invoice generation.'],
  ['Fahad Qureshi', 'fahad@auto.pk', '+92 310 1213141', 'AutoMax', 'Active', 'High', 420000, 'Expo', daysFromNow(7), ['automotive', 'long-term'], 'Potential long-term account. Prepare renewal plan.'],
  ['Iqra Salman', 'iqra@craft.pk', '+92 311 1415161', 'CraftHive', 'Inactive', 'Low', 62000, 'Instagram', daysFromNow(28), ['craft', 'restructure'], 'Stopped due to internal restructuring.'],
  ['Ahmed Faraz', 'ahmed@cloud.pk', '+92 312 1617181', 'CloudNine', 'Active', 'High', 360000, 'LinkedIn', daysFromNow(3), ['cloud', 'customization'], 'Wants premium dashboard customization.'],
  ['Laiba Tariq', 'laiba@style.pk', '+92 313 1819202', 'StyleHub', 'Lead', 'Medium', 118000, 'Website', daysFromNow(4), ['fashion', 'onboarding'], 'Needs proposal and onboarding call.'],
  ['Omar Siddiqui', 'omar@secure.pk', '+92 314 2021222', 'SecureNet', 'Active', 'High', 600000, 'Referral', daysFromNow(1), ['security', 'vip'], 'Security-focused account with strong potential. Assign VIP support.']
];

const run = async () => {
  await connectDB();

  await Invoice.deleteMany({});
  await Customer.deleteMany({});
  await User.deleteMany({});

  const user = await User.create({
    name: 'CRM Elite Demo',
    email: 'teacher@crmpro.com',
    password: 'Teacher@123'
  });

  await Customer.insertMany(
    customers.map(([name, email, phone, company, status, priority, value, source, nextFollowUp, tags, notes]) => ({
      name,
      email,
      phone,
      company,
      status,
      priority,
      value,
      source,
      nextFollowUp,
      tags,
      notes,
      owner: user._id
    }))
  );

  console.log('Seed completed: demo user + 15 professional CRM customer records created.');
  console.log('Login: teacher@crmpro.com / Teacher@123');
  await mongoose.connection.close();
};

run().catch(error => {
  console.error(error);
  process.exit(1);
});
