import { Router } from 'express';
import { RoleController as Controller} from '../controllers/RoleController';

export const RoleRoute= Router();

RoleRoute.get('/', Controller.getAll);
RoleRoute.get('/:id', Controller.getByID);
RoleRoute.post('/', Controller.create);
RoleRoute.put('/:id', Controller.update);
RoleRoute.delete('/:id', Controller.delete);