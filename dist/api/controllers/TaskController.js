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
exports.TaskController = void 0;
const modelsController_1 = require("../modelsController");
const IRest_1 = require("../../interfaces/IRest");
class TaskController extends IRest_1.IRest {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield modelsController_1.models.Task.findAll({
                attributes: [
                    'id',
                    'Answer1',
                    'Answer2',
                    'Answer3',
                    'Answer4',
                    'Question',
                    'CursId'
                ]
            });
            res.send(data);
        });
    }
    static getByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield modelsController_1.models.Task.findByPk(req.params.id, {
                attributes: [
                    'id',
                    'Answer1',
                    'Answer2',
                    'Answer3',
                    'Answer4',
                    'Question',
                    'CursId'
                ]
            });
            res.send(data);
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
            }
            modelsController_1.models.Task.create({
                Answer1: req.body.Answer1,
                Answer2: req.body.Answer2,
                Answer3: req.body.Answer3,
                Answer4: req.body.Answer4,
                Question: req.body.Question,
                CursId: req.body.CursId,
                CorrectAnswer: req.body.CorrectAnswer
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
            const oldTask = yield modelsController_1.models.Task.findByPk(req.params.id);
            modelsController_1.models.Task.update({
                Answer1: req.body.Answer1 || (oldTask === null || oldTask === void 0 ? void 0 : oldTask.Answer1),
                Answer2: req.body.Answer2 || (oldTask === null || oldTask === void 0 ? void 0 : oldTask.Answer2),
                Answer3: req.body.Answer3 || (oldTask === null || oldTask === void 0 ? void 0 : oldTask.Answer3),
                Answer4: req.body.Answer4 || (oldTask === null || oldTask === void 0 ? void 0 : oldTask.Answer4),
                Question: req.body.Question || (oldTask === null || oldTask === void 0 ? void 0 : oldTask.Question),
                CursId: req.body.CursId || (oldTask === null || oldTask === void 0 ? void 0 : oldTask.CursId),
                CorrectAnswer: req.body.CorrectAnswer || (oldTask === null || oldTask === void 0 ? void 0 : oldTask.CorrectAnswer)
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
            modelsController_1.models.Task.destroy({ where: { id: req.params.id } })
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
exports.TaskController = TaskController;
