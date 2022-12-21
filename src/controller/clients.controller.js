import clients from "../../models/client.model.js";

const list = async (req, res) => {
  clients.findAll().then((clients) => {
    res.status(200).json(clients);
  }).catch((err) => {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving clients.",
    });
  });
};

const find = async (req, res) => {
  clients.findOne({ where: { id: req.params.id } }).then((client) => {
    res.status(200).json(client);
  }).catch((err) => {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving client.",
    });
  });
};

const create = async (req, res) => {

};

export { list, find, create};
