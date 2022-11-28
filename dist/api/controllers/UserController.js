"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const modelsController_1 = require("../modelsController");
const IUser_1 = require("../../interfaces/IUser");
class UserController extends IUser_1.IUser {
  static getAll(req, res) {
    return __awaiter(this, void 0, void 0, function*() {
      const data = yield modelsController_1.models.Users.findAll({
        attributes: [
          'id',
          'FirstName',
          'SecondName',
          'MiddleName',
          'Adress',
          'DateOfBirth',
          'ProfessionName',
          'Role',
          'PassportId'
        ],
        include: [{ all: true }]
      });
      res.send(data);
    });
  }
  static getByID(req, res) {
    return __awaiter(this, void 0, void 0, function*() {
      const data = yield modelsController_1.models.Users.findByPk(req.params.id, {
        attributes: [
          'id',
          'FirstName',
          'SecondName',
          'MiddleName',
          'Adress',
          'DateOfBirth',
          'ProfessionName',
          'Role',
          'PassportId'
        ],
        include: [{ all: true }]
      });
      res.send(data);
    });
  }
  static create(req, res) {
    return __awaiter(this, void 0, void 0, function*() {
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      modelsController_1.models.Users.create({
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        SecondName: req.body.SecondName,
        DateOfBirth: req.body.DateOfBirth,
        Adress: req.body.Adress,
        ProfessionName: req.body.ProfessionName,
        PassportId: req.body.PassportId,
        Login: req.body.Login,
        Password: req.body.Password,
        Role: req.body.Role
      })
        .then((data) => {
          if (!data)
            res.status(500).send({
              error: "Some error occurred while creating."
            });
          else {
            res.status(200).send(data);
          }
        });
    });
  }
  static update(req, res) {
    return __awaiter(this, void 0, void 0, function*() {
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      const oldUser = yield modelsController_1.models.Users.findByPk(req.params.id);
      modelsController_1.models.Users.update({
        FirstName: req.body.FirstName || (oldUser === null || oldUser === void 0 ? void 0 : oldUser.FirstName),
        MiddleName: req.body.MiddleName || (oldUser === null || oldUser === void 0 ? void 0 : oldUser.MiddleName),
        SecondName: req.body.SecondName || (oldUser === null || oldUser === void 0 ? void 0 : oldUser.SecondName),
        Adress: req.body.Adress || (oldUser === null || oldUser === void 0 ? void 0 : oldUser.Adress),
        DateOfBirth: req.body.DateOfBirth || (oldUser === null || oldUser === void 0 ? void 0 : oldUser.DateOfBirth),
        ProfessionName: req.body.ProfessionName || (oldUser === null || oldUser === void 0 ? void 0 : oldUser.ProfessionName),
        PassportId: req.body.PassportId || (oldUser === null || oldUser === void 0 ? void 0 : oldUser.PassportId),
      }, { where: { id: req.params.id } })
        .then((data) => {
          if (!data)
            res.status(500).send({
              error: "Some error occurred while updating."
            });
          else
            res.send(true);
        });
    });
  }
  static delete(req, res) {
    return __awaiter(this, void 0, void 0, function*() {
      modelsController_1.models.Users.destroy({ where: { id: req.params.id } })
        .then(data => {
          if (!data) {
            res.status(500).send({
              error: "Some error occurred while deleting."
            });
          }
          else
            res.send(true);
        });
    });
  }
  static auth(req, res) {
    return __awaiter(this, void 0, void 0, function*() {
      console.log(req.body);
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      const data = yield modelsController_1.models.Users.findOne({
        attributes: [
          'id',
          'Password',
          'Role'
        ],
        where: { Login: req.body.Login }
      });
      if (!data) {
        res.status(400).send({
          message: "UserController don't found."
        });
        return;
      }
      res.status(req.body.Password === data.Password ? 200 : 401).send(req.body.Password === data.Password ? { id: data.id, role: data.Role } : false);
    });
  }
  static changePassword(req, res) {
    return __awaiter(this, void 0, void 0, function*() {
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      modelsController_1.models.Users.update({
        Password: req.body.password
      }, { where: { id: req.params.id } })
        .then((data) => {
          if (!data)
            res.status(500).send({
              error: "Some error occurred while updating."
            });
          else
            res.send(true);
        });
    });
  }
}
exports.UserController = UserController;
