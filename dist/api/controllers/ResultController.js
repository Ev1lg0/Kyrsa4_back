"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsController = void 0;
const modelsController_1 = require("../modelsController");
const IRest_1 = require("../../interfaces/IRest");
class ResultsController extends IRest_1.IRest {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const [data,] = yield modelsController_1.sequelize.query(`SELECT Results.id, Results.Grade, Users.FirstName, Users.SecondName, Users.MiddleName, Direction.DirectionName FROM \`ISPr23-35_VinkAD_kyrsa4\`.Results, \`ISPr23-35_VinkAD_kyrsa4\`.Users, \`ISPr23-35_VinkAD_kyrsa4\`.Curs, \`ISPr23-35_VinkAD_kyrsa4\`.Direction WHERE Users.id=Results.UserId and Curs.id = Results.CursId and Direction.id = Curs.Direction;`);
            if (data) {
                res.status(200).send(data);
            }
            else {
                res.status(500);
            }
            
        });
    }
    static getByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const [data,] = yield modelsController_1.sequelize.query(`SELECT Results.id, Results.Grade, Users.FirstName, Users.SecondName, Users.MiddleName, Direction.DirectionName FROM \`ISPr23-35_VinkAD_kyrsa4\`.Results, \`ISPr23-35_VinkAD_kyrsa4\`.Users, \`ISPr23-35_VinkAD_kyrsa4\`.Curs, \`ISPr23-35_VinkAD_kyrsa4\`.Direction WHERE Users.id=Results.UserId and Curs.id = Results.CursId and Direction.id = Curs.Direction AND Results.id=${req.params.id}`);
            if (data) {
                res.status(200).send(data[0]);
            }
            else {
                res.status(500);
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
            }
            modelsController_1.models.Results.create({
                UserId: req.body.UserId,
                CursId: req.body.CursId,
                Grade: req.body.CursId
            })
                .then((data) => {
                if (!data)
                    res.status(500).send({
                        error: "Some error occurred while creating."
                    });
                else {
                    res.status(200).send(data);
                }
                ;
            });
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
            }
            const oldResults = yield modelsController_1.models.Results.findByPk(req.params.id);
            modelsController_1.models.Results.update({
                UserId: req.body.UserId || (oldResults === null || oldResults === void 0 ? void 0 : oldResults.UserId),
                CursId: req.body.CursId || (oldResults === null || oldResults === void 0 ? void 0 : oldResults.CursId),
                Grade: req.body.Grade || (oldResults === null || oldResults === void 0 ? void 0 : oldResults.Grade)
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
        return __awaiter(this, void 0, void 0, function* () {
            modelsController_1.models.Results.destroy({ where: { id: req.params.id } })
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
  
}
exports.ResultsController = ResultsController;
