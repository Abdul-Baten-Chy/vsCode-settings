import cors from 'cors';
import express, { Application } from 'express';
import router from './app/router';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applicaton route
app.use('/api', router);
