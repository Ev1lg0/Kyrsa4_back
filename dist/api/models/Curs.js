"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curs = void 0;
const sequelize_1 = require("sequelize");
class Curs extends sequelize_1.Model {
    static initModel(sequelize) {
        return Curs.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            Direction: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Direction',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'Curs',
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
                    name: "FK_Curs_Direction_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Direction" },
                    ]
                },
            ]
        });
    }
}
exports.Curs = Curs;
