import dotenv from "dotenv";
import {Sequelize} from "sequelize";
import {initModels} from "./models/init-models";

dotenv.config();
const sequelize = new Sequelize(`${process.env.CONNECTION_STRING}`);
export const models = initModels(sequelize);