import Invoice from "../../models/invoice.model.js";
import InvoiceDetails from "../../models/invoiceDetails.model.js";
import { QueryTypes } from "sequelize";
import validateInvoice from "../validators/invoice.validate.js";
import validateInvoiceDetails from "../validators/inoviceDetails.validate.js";

const getInvoices = async (req, res) => {
  try {
    const query = `
    SELECT i.id, clients.name, i.date, i.subTotal, i.discount, i.total
    FROM invoices i
    INNER JOIN clients ON clients.id = i.idClient`;

    const invoices = await Invoice.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    console.log(invoices);
    res.status(200).json(invoices);

  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving invoices.",
    });
  }
};

const findInvoiceDetails = async (req, res) => {
  try {
    const query = `SELECT i.id AS id, invoices.id AS id_invoice, products.id AS id_product, products.name, i.quantity, products.price
    FROM Invoice_details i 
    INNER JOIN invoices ON invoices.id = i.idInvoice INNER JOIN products ON products.id = i.idProduct
    WHERE i.idInvoice = ${req.params.id}`;

    const invoiceDetails = await Invoice.sequelize.query
    (query, {
      type: QueryTypes.SELECT,
    });
    console.log(invoiceDetails);
    res.status(200).json(invoiceDetails);
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "Some error occurred while retrieving invoice details.",
    });
  }

};

const findInvoice = async (req, res) => {
  Invoice.findOne({ where: { id: req.params.id } })
    .then((invoice) => {
      res.status(200).json(invoice);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving invoice.",
      });
    });
};

const createInvoice = async (req, res) => {
  const setInvoiceDetails = (idInvoice, invoiceDetails) => {
    InvoiceDetails.bulkCreate(
      invoiceDetails.map((detail) => {
        return {
          idInvoice: idInvoice,
          idProduct: detail.idProduct,
          quantity: detail.quantity,
        };
      })
    );
  };

  const invoice = {
    idClient: req.body.idClient,
    date: req.body.date,
    subTotal: req.body.subTotal,
    discount: req.body.discount,
    total: req.body.total,
  };

  const { error } = validateInvoice(invoice);
  if (error) {
    return res.status(400).json({ message: error || errorInvoiceDetails });
  }
  if (req.body.invoiceDetails.length === 0) {
    return res.status(400).json({ message: "Invoice details is required" });
  }
  req.body.invoiceDetails.forEach((detail) => {
    const { error: errorInvoiceDetails } = validateInvoiceDetails(detail);
  });

  Invoice.create(invoice)
    .then((newInvoice) => {
      setInvoiceDetails(newInvoice.id, req.body.invoiceDetails);
      res.status(201).json(newInvoice);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating invoice.",
      });
    });
};

export { getInvoices, findInvoice, createInvoice, findInvoiceDetails };
