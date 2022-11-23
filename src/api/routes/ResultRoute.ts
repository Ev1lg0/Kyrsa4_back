import { Router } from 'express';
import { ResultsController as Controller} from '../controllers/ResultController';

export const ResultsRoute= Router();

ResultsRoute.get('/', Controller.getAll);
ResultsRoute.get('/:id', Controller.getByID);
ResultsRoute.post('/', Controller.create);
ResultsRoute.put('/:id', Controller.update);
ResultsRoute.delete('/:id', Controller.delete);