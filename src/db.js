import { Sequelize } from "sequelize";
import config from "../config/config.js";

const db = new Sequelize(config.development)

export default db;
