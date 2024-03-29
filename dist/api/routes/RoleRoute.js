"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRoute = void 0;
const express_1 = require("express");
const RoleController_1 = require("../controllers/RoleController");
exports.RoleRoute = (0, express_1.Router)();
exports.RoleRoute.get('/', RoleController_1.RoleController.getAll);
exports.RoleRoute.get('/:id', RoleController_1.RoleController.getByID);
exports.RoleRoute.post('/', RoleController_1.RoleController.create);
exports.RoleRoute.put('/:id', RoleController_1.RoleController.update);
exports.RoleRoute.delete('/:id', RoleController_1.RoleController.delete);
