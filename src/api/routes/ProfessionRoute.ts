import { Router } from 'express';
import { ProfessionController as Controller} from '../controllers/ProfessionController';

export const ProfessionRoute= Router();

ProfessionRoute.get('/', Controller.getAll);
ProfessionRoute.get('/:id', Controller.getByID);
ProfessionRoute.post('/', Controller.create);
ProfessionRoute.put('/:id', Controller.update);
ProfessionRoute.delete('/:id', Controller.delete);