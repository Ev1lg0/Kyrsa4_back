import { Router } from 'express';
import { TaskController as Controller} from '../controllers/TaskController';

export const TaskRoute= Router();

TaskRoute.get('/', Controller.getAll);
TaskRoute.get('/:id', Controller.getByID);
TaskRoute.post('/', Controller.create);
TaskRoute.put('/:id', Controller.update);
TaskRoute.delete('/:id', Controller.delete);