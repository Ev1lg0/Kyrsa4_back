"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Results = void 0;
const sequelize_1 = require("sequelize");
class Results extends sequelize_1.Model {
    static initModel(sequelize) {
        return Results.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            UserId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            CursId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Curs',
                    key: 'id'
                }
            },
            Grade: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Results',
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
                    name: "FK_Result_UserId_idx",
                    using: "BTREE",
                    fields: [
                        { name: "UserId" },
                    ]
                },
                {
                    name: "FK_Resuklt_Curs_idx",
                    using: "BTREE",
                    fields: [
                        { name: "CursId" },
                    ]
                },
            ]
        });
    }
}
exports.Results = Results;
