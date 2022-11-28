var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  Task: () => Task
});
var import_sequelize = __toModule(require("sequelize"));
class Task extends import_sequelize.Model {
  static initModel(sequelize) {
    return Task.init({
      id: {
        autoIncrement: true,
        type: import_sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      CursId: {
        type: import_sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Curs",
          key: "id"
        }
      },
      Answer1: {
        type: import_sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      Answer2: {
        type: import_sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      Answer3: {
        type: import_sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      Answer4: {
        type: import_sequelize.DataTypes.STRING(45),
        allowNull: false
      },
      Question: {
        type: import_sequelize.DataTypes.STRING(512),
        allowNull: false
      },
      CorrectAnswer: {
        type: import_sequelize.DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: "Task",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" }
          ]
        },
        {
          name: "FK_Task_CursId_idx",
          using: "BTREE",
          fields: [
            { name: "CursId" }
          ]
        }
      ]
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Task
});
//# sourceMappingURL=Task.js.map
