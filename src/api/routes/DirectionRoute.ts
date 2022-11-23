import { Router } from 'express';
import { DirectionController as Controller} from '../controllers/DirectionController';

export const DirectionRoute= Router();

DirectionRoute.get('/', Controller.getAll);
DirectionRoute.get('/:id', Controller.getByID);
DirectionRoute.post('/', Controller.create);
DirectionRoute.put('/:id', Controller.update);
DirectionRoute.delete('/:id', Controller.delete);