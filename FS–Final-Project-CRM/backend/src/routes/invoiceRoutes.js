const express = require('express');
const protect = require('../middleware/auth');
const { createInvoice, getInvoices } = require('../controllers/invoiceController');

const router = express.Router();

router.use(protect);
router.route('/').get(getInvoices).post(createInvoice);

module.exports = router;
