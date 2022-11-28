"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profession = void 0;
const sequelize_1 = require("sequelize");
class Profession extends sequelize_1.Model {
    static initModel(sequelize) {
        return Profession.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            ProfessionName: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Profession',
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
exports.Profession = Profession;
