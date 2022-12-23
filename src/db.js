import { Sequelize } from "sequelize";
import config from "../config/config.js";

// this is the connection to the database using sequelize and the config file has the credentials to connect to the database
const db = new Sequelize(config.development)

export default db;
