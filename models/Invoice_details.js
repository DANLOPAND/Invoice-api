import { DataTypes } from "sequelize";
import db from "../src/db.js";

const attributes = {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
    autoIncrement: false,
    comment: null,
    field: "id",
    unique: "id_UNIQUE",
  },
  idInvoice: {
    type: DataTypes.STRING(36),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "idInvoice",
    references: {
      key: "id",
      model: "invoices_model",
    },
  },
  idProduct: {
    type: DataTypes.STRING(36),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "idProduct",
    references: {
      key: "id",
      model: "products_model",
    },
  },
  quantity: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "quantity",
  },
  total: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "total",
  },
};
const options = {
  tableName: "Invoice_details",
  comment: "",
  indexes: [
    {
      name: "fk_Invoice_details_Invoice1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idInvoice"],
    },
    {
      name: "fk_Invoice_details_Product1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idProduct"],
    },
  ],
};

const InvoiceDetailsModel = db.define(
  "Invoice_details_model",
  attributes,
  options
);

export default InvoiceDetailsModel;
