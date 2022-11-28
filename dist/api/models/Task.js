"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const sequelize_1 = require("sequelize");
class Task extends sequelize_1.Model {
    static initModel(sequelize) {
        return Task.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            CursId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Curs',
                    key: 'id'
                }
            },
            Answer1: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Answer2: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Answer3: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Answer4: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            Question: {
                type: sequelize_1.DataTypes.STRING(512),
                allowNull: false
            },
            CorrectAnswer: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Task',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "FK_Task_CursId_idx",
                    using: "BTREE",
                    fields: [
                        { name: "CursId" },
                    ]
                },
            ]
        });
    }
}
exports.Task = Task;
