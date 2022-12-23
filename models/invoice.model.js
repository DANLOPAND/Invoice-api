import { DataTypes } from "sequelize";
import  db  from '../src/db.js';

const attributes = {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: false,
    comment: null,
    field: "id",
    unique: "id_UNIQUE",
  },
  idClient: {
    type: DataTypes.STRING(36),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "idClient",
    references: {
      key: "id",
      model: "clients_model",
    },
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "date",
  },
  subTotal: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "subTotal",
  },
  discount: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "discount",
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
  tableName: "invoices",
  comment: "",
  indexes: [
    {
      name: "fk_Invoice_Client_idx",
      unique: false,
      type: "BTREE",
      fields: ["idClient"],
    },
  ],
};

const InvoicesModel = db.define("invoices_model", attributes, options);
export default InvoicesModel;
