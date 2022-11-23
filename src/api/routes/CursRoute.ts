import { Router } from 'express';
import { CursController as Controller} from '../controllers/CursController';

export const CursRoute= Router();

CursRoute.get('/', Controller.getAll);
CursRoute.get('/:id', Controller.getByID);
CursRoute.post('/', Controller.create);
CursRoute.put('/:id', Controller.update);
CursRoute.delete('/:id', Controller.delete);