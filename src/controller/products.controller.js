import products from "../../models/product.model.js";

const list = async (req, res) => {
  products.findAll().then((products) => {
    res.status(200).json(products);
  }).catch((err) => {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving products.",
    });
  });
};

const find = async (req, res) => {
  console.log(req.params.id);
  products.findOne({ where: { id: req.params.id } }).then((product) => {
    res.status(200).json(product);
  }).catch((err) => {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving product.",
    });
  });
};

const create = async (req, res) => {

};

export { list, find, create };
