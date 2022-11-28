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
  CursController: () => CursController
});
var import_modelsController = __toModule(require("../modelsController"));
var import_IRest = __toModule(require("../../interfaces/IRest"));
class CursController extends import_IRest.IRest {
  static async getAll(req, res) {
    const data = await import_modelsController.models.Curs.findAll({
      attributes: [
        "id",
        "Direction"
      ]
    });
    res.send(data);
  }
  static async getByID(req, res) {
    const data = await import_modelsController.models.Curs.findByPk(req.params.id, {
      attributes: [
        "id",
        "Direction"
      ]
    });
    res.send(data);
  }
  static async create(req, res) {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    import_modelsController.models.Curs.create({
      Direction: req.body.Direction
    }).then((data) => {
      if (!data)
        res.status(500).send({
          error: "Some error occurred while creating."
        });
      else {
        res.status(200).send(data);
      }
      ;
    });
  }
  static async update(req, res) {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const oldCurs = await import_modelsController.models.Curs.findByPk(req.params.id);
    import_modelsController.models.Curs.update({
      Direction: req.body.Direction || (oldCurs == null ? void 0 : oldCurs.Direction)
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
    import_modelsController.models.Curs.destroy({ where: { id: req.params.id } }).then((data) => {
      if (!data) {
        res.status(500).send({
          error: "Some error occurred while deleting."
        });
      } else
        res.send(true);
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CursController
});
//# sourceMappingURL=CursController.js.map
