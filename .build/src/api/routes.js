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
  defaultRoute: () => defaultRoute
});
var import_express = __toModule(require("express"));
var import_UserRoute = __toModule(require("./routes/UserRoute"));
var import_TaskRoute = __toModule(require("./routes/TaskRoute"));
var import_ResultRoute = __toModule(require("./routes/ResultRoute"));
var import_ProfessionRoute = __toModule(require("./routes/ProfessionRoute"));
var import_RoleRoute = __toModule(require("./routes/RoleRoute"));
var import_DirectionRoute = __toModule(require("./routes/DirectionRoute"));
var import_CursRoute = __toModule(require("./routes/CursRoute"));
const defaultRoute = (0, import_express.Router)();
defaultRoute.get("/", (req, res) => {
  res.send({ error: "invalid url" });
});
defaultRoute.use("/users", import_UserRoute.UsersRoute);
defaultRoute.use("/tasks", import_TaskRoute.TaskRoute);
defaultRoute.use("/results", import_ResultRoute.ResultsRoute);
defaultRoute.use("/profession", import_ProfessionRoute.ProfessionRoute);
defaultRoute.use("/role", import_RoleRoute.RoleRoute);
defaultRoute.use("/direction", import_DirectionRoute.DirectionRoute);
defaultRoute.use("/curs", import_CursRoute.CursRoute);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultRoute
});
//# sourceMappingURL=routes.js.map
