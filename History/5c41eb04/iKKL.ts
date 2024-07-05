import cors from 'cors';
import express, { Application } from 'express';
import router from './app/router';
import notFoundApi from './midleware/notFoundApi';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applicaton route
app.use('/api', router);

//not found API
app.use(notFoundApi);

export default app;
