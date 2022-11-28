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
  UserController: () => UserController
});
var import_modelsController = __toModule(require("../modelsController"));
var import_IUser = __toModule(require("../../interfaces/IUser"));
class UserController extends import_IUser.IUser {
  static async getAll(req, res) {
    const data = await import_modelsController.models.Users.findAll({
      attributes: [
        "id",
        "FirstName",
        "SecondName",
        "MiddleName",
        "Adress",
        "DateOfBirth",
        "ProfessionName",
        "Role"
      ],
      include: [{ all: true }]
    });
    res.send(data);
  }
  static async getByID(req, res) {
    const data = await import_modelsController.models.Users.findByPk(req.params.id, {
      attributes: [
        "id",
        "FirstName",
        "SecondName",
        "MiddleName",
        "Adress",
        "DateOfBirth",
        "ProfessionName",
        "Role"
      ],
      include: [{ all: true }]
    });
    res.send(data);
  }
  static async create(req, res) {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    import_modelsController.models.Users.create({
      FirstName: req.body.FirstName,
      SecondName: req.body.SecondName,
      MiddleName: req.body.MiddleName,
      DateOfBirth: req.body.DateOfBirth,
      Adress: req.body.Adress,
      ProfessionName: req.body.ProfessionName,
      PassportId: req.body.PassportId,
      Login: req.body.Login,
      Password: req.body.Password,
      Role: req.body.Role
    }).then((data) => {
      if (!data)
        res.status(500).send({
          error: "Some error occurred while creating."
        });
      else {
        res.status(200).send(data);
      }
    });
  }
  static async update(req, res) {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const oldUser = await import_modelsController.models.Users.findByPk(req.params.id);
    import_modelsController.models.Users.update({
      FirstName: req.body.FirstName || (oldUser == null ? void 0 : oldUser.FirstName),
      MiddleName: req.body.MiddleName || (oldUser == null ? void 0 : oldUser.MiddleName),
      SecondName: req.body.SecondName || (oldUser == null ? void 0 : oldUser.SecondName),
      Adress: req.body.Adress || (oldUser == null ? void 0 : oldUser.Adress),
      DateOfBirth: req.body.DateOfBirth || (oldUser == null ? void 0 : oldUser.DateOfBirth),
      ProfessionName: req.body.ProfessionName || (oldUser == null ? void 0 : oldUser.ProfessionName)
    }, { where: { id: req.params.id } }).then((data) => {
      if (!data)
        res.status(500).send({
          error: "Some error occurred while updating."
        });
      else
        res.send(true);
    });
  }
  static async delete(req, res) {
    import_modelsController.models.Users.destroy({ where: { id: req.params.id } }).then((data) => {
      if (!data) {
        res.status(500).send({
          error: "Some error occurred while deleting."
        });
      } else
        res.send(true);
    });
  }
  static async auth(req, res) {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const data = await import_modelsController.models.Users.findOne({
      attributes: [
        "id",
        "Password"
      ],
      where: { Login: req.body.Login }
    });
    if (!data) {
      res.status(400).send({
        message: "UserController don't found."
      });
      return;
    }
    res.status(req.body.password === data.Password ? 200 : 401).send(req.body.password === data.Password);
  }
  static async changePassword(req, res) {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    import_modelsController.models.Users.update({
      Password: req.body.password
    }, { where: { id: req.params.id } }).then((data) => {
      if (!data)
        res.status(500).send({
          error: "Some error occurred while updating."
        });
      else
        res.send(true);
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserController
});
//# sourceMappingURL=UserController.js.map
