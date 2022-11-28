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
  Results: () => Results
});
var import_sequelize = __toModule(require("sequelize"));
class Results extends import_sequelize.Model {
  static initModel(sequelize) {
    return Results.init({
      id: {
        autoIncrement: true,
        type: import_sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      UserId: {
        type: import_sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      CursId: {
        type: import_sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Curs",
          key: "id"
        }
      },
      Grade: {
        type: import_sequelize.DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: "Results",
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
          name: "FK_Result_UserId_idx",
          using: "BTREE",
          fields: [
            { name: "UserId" }
          ]
        },
        {
          name: "FK_Resuklt_Curs_idx",
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
  Results
});
//# sourceMappingURL=Results.js.map
