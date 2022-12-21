import { DataTypes } from "sequelize";
import db from "../src/db.js";

const attributes = {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    autoIncrement: false,
    comment: null,
    field: "id",
    unique: "idProduct_UNIQUE",
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "name",
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "description",
  },
  price: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "price",
  },
};

const options = {
  tableName: "products",
  comment: "",
  indexes: [],
};

const ProductsModel = db.define("products_model", attributes, options);

export default ProductsModel;
