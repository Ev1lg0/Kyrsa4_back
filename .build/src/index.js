var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var import_express = __toModule(require("express"));
var import_dotenv = __toModule(require("dotenv"));
var import_body_parser = __toModule(require("body-parser"));
var import_routes = __toModule(require("./api/routes"));
var import_UserController = __toModule(require("./api/controllers/UserController"));
import_dotenv.default.config();
const app = (0, import_express.default)();
app.use(import_body_parser.default.urlencoded({ extended: true }));
app.use(import_body_parser.default.json());
const port = process.env.PORT || 4e3;
app.get("/", (req, res) => {
  res.send({ error: "invalid url" });
});
const routes = import_express.default.Router();
routes.use(import_routes.defaultRoute);
app.use("/api", routes);
app.post("/auth", import_UserController.UserController.auth);
app.listen(port, () => {
  console.log(`\u26A1\uFE0F[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
