import { Router } from 'express';
import {UsersRoute} from "./routes/UserRoute";
import {TaskRoute} from "./routes/TaskRoute";
import { ResultsRoute } from './routes/ResultRoute';
import { ProfessionRoute } from './routes/ProfessionRoute';
import { RoleRoute } from './routes/RoleRoute';
import { DirectionRoute } from './routes/DirectionRoute';
import { CursRoute } from './routes/CursRoute';
export const defaultRoute = Router();

defaultRoute.get('/', (req, res) => {
    res.send({error: "invalid url"});
});

defaultRoute.use('/users', UsersRoute);
defaultRoute.use('/tasks', TaskRoute);
defaultRoute.use('/results', ResultsRoute);
defaultRoute.use('/profession', ProfessionRoute)
defaultRoute.use('/role', RoleRoute)
defaultRoute.use('/direction', DirectionRoute)
defaultRoute.use('/curs', CursRoute)