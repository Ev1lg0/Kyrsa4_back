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
  Curs: () => import_Curs.Curs,
  Direction: () => import_Direction.Direction,
  Profession: () => import_Profession.Profession,
  Results: () => import_Results.Results,
  Role: () => import_Role.Role,
  Task: () => import_Task.Task,
  Users: () => import_Users.Users,
  initModels: () => initModels
});
var import_Curs = __toModule(require("./Curs"));
var import_Direction = __toModule(require("./Direction"));
var import_Profession = __toModule(require("./Profession"));
var import_Results = __toModule(require("./Results"));
var import_Role = __toModule(require("./Role"));
var import_Task = __toModule(require("./Task"));
var import_Users = __toModule(require("./Users"));
function initModels(sequelize) {
  const Curs = import_Curs.Curs.initModel(sequelize);
  const Direction = import_Direction.Direction.initModel(sequelize);
  const Profession = import_Profession.Profession.initModel(sequelize);
  const Results = import_Results.Results.initModel(sequelize);
  const Role = import_Role.Role.initModel(sequelize);
  const Task = import_Task.Task.initModel(sequelize);
  const Users = import_Users.Users.initModel(sequelize);
  Results.belongsTo(Curs, { as: "Cur", foreignKey: "CursId" });
  Curs.hasMany(Results, { as: "Results", foreignKey: "CursId" });
  Task.belongsTo(Curs, { as: "Cur", foreignKey: "CursId" });
  Curs.hasMany(Task, { as: "Tasks", foreignKey: "CursId" });
  Curs.belongsTo(Direction, { as: "Direction_Direction", foreignKey: "Direction" });
  Direction.hasMany(Curs, { as: "Curs", foreignKey: "Direction" });
  Users.belongsTo(Profession, { as: "ProfessionName_Profession", foreignKey: "ProfessionName" });
  Profession.hasMany(Users, { as: "Users", foreignKey: "ProfessionName" });
  Users.belongsTo(Role, { as: "id_Role", foreignKey: "id" });
  Role.hasOne(Users, { as: "User", foreignKey: "id" });
  Results.belongsTo(Users, { as: "User", foreignKey: "UserId" });
  Users.hasMany(Results, { as: "Results", foreignKey: "UserId" });
  return {
    Curs,
    Direction,
    Profession,
    Results,
    Role,
    Task,
    Users
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Curs,
  Direction,
  Profession,
  Results,
  Role,
  Task,
  Users,
  initModels
});
//# sourceMappingURL=init-models.js.map
