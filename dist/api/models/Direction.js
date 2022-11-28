"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
const sequelize_1 = require("sequelize");
class Direction extends sequelize_1.Model {
    static initModel(sequelize) {
        return Direction.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            DirectionName: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Direction',
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
            ]
        });
    }
}
exports.Direction = Direction;
