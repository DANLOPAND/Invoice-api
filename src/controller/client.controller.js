import clients from "../../models/client.model.js";
import validateClient from "../validators/client.validate.js";

const getClients = async (req, res) => {
  clients.findAll().then((clients) => {
    res.status(200).json(clients);
  }).catch((err) => {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving clients.",
    });
  });
};

const findClient = async (req, res) => {
  clients.findOne({ where: { id: req.params.id } }).then((client) => {
    res.status(200).json(client);
  }).catch((err) => {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving client.",
    });
  });
};

const createClient = async (req, res) => {
  const { error } = validateClient(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  clients.create(req.body).then((client) => {
    res.status(201).json(client);
  }).catch((err) => {
    res.status(500).json({
      message: err.errors[0].message || "Some error occurred while creating the client.",
    });
  });
};

export { getClients, findClient, createClient};
