const Product = require("../models/Product");

const getProducts = async (_req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
};
