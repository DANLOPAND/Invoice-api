import products from "../../models/product.model.js";
import validateProduct from "../validators/product.validate.js";


// Retrieve all products from the database. (GET)
const getProducts = async (req, res) => {
  products.findAll().then((products) => {
    res.status(200).json(products);
  }).catch((err) => {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving products.",
    });
  });
};

const findProduct = async (req, res) => {
  products.findOne({ where: { id: req.params.id } }).then((product) => {
    res.status(200).json(product);
  }).catch((err) => {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving product.",
    });
  });
}

const createProduct = async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).json({ message: error });
  }
  products.create(req.body).then((product) => {
    res.status(201).json(product);
  }).catch((err) => {
    res.status(500).json({
      message: err.errors[0].message || "Some error occurred while creating the product.",
    });
  });
}

export { getProducts, findProduct, createProduct };
