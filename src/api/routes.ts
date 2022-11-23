import { Router } from 'express';
import {UsersRoute} from "./routes/UserRoute";


export const defaultRoute = Router();

defaultRoute.get('/', (req, res) => {
    res.send({error: "invalid url"});
});

defaultRoute.use('/users', UsersRoute);
