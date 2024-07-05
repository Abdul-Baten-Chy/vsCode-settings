import cors from 'cors';
import express, { Application } from 'express';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());
