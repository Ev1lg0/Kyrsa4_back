"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
const init_models_1 = require("./models/init-models");
dotenv_1.default.config();
exports.sequelize = new sequelize_1.Sequelize(`${process.env.CONNECTION_STRING}`);
exports.models = (0, init_models_1.initModels)(exports.sequelize);
