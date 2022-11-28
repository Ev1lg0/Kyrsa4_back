"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
class Users extends sequelize_1.Model {
    static initModel(sequelize) {
        return Users.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Role',
                    key: 'id'
                }
            },
            FirstName: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            SecondName: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            MiddleName: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            DateOfBirth: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            PassportId: {
                type: sequelize_1.DataTypes.STRING(11),
                allowNull: false
            },
            Adress: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: false
            },
            ProfessionName: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Profession',
                    key: 'id'
                }
            },
            Login: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            },
            Password: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            },
            Role: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Users',
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
                    name: "FK_User_ProfessionName_idx",
                    using: "BTREE",
                    fields: [
                        { name: "ProfessionName" },
                    ]
                },
                {
                    name: "FK_User_Role_idx",
                    using: "BTREE",
                    fields: [
                        { name: "Role" },
                    ]
                },
            ]
        });
    }
}
exports.Users = Users;
