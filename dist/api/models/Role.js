"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_1 = require("sequelize");
class Role extends sequelize_1.Model {
    static initModel(sequelize) {
        return Role.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            RoleName: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Role',
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
exports.Role = Role;
