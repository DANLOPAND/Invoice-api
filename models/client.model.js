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
    unique: "idClient_UNIQUE",
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "name",
    unique: "Name_UNIQUE",
  },
  contact: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "contact",
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "phone",
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "email",
  },
};

const options = {
  tableName: "clients",
  comment: "",
  indexes: [],
};

const ClientsModel = db.define("clients_model", attributes, options);

export default ClientsModel;
