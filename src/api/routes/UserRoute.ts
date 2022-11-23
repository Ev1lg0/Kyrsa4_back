import { Router } from 'express';
import { UserController as Controller} from '../controllers/UserController';

export const UsersRoute = Router();

UsersRoute.get('/', Controller.getAll);
UsersRoute.get('/:id', Controller.getByID);
UsersRoute.post('/', Controller.create);
UsersRoute.put('/:id', Controller.update);
UsersRoute.put('/password/:id', Controller.changePassword);
UsersRoute.delete('/:id', Controller.delete);