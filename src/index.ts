import express, { Express } from 'express';
import dotenv from 'dotenv';
import body_parser from 'body-parser';
import cors from 'cors';
import { defaultRoute } from './api/routes';
import { UserController } from "./api/controllers/UserController";
// import {UserController} from "./api/controllers/UserController";

dotenv.config();

// create server
const app: Express = express();
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
app.use(cors())
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send({ error: "invalid url" });
});

const routes = express.Router();
routes.use(defaultRoute);

// main endpoint for api
app.use('/api', routes)

// auth endpoint
app.post('/auth', UserController.auth);

// init server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
