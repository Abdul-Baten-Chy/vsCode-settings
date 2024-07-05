import cors from 'cors';
import express from 'express';

const app = express();

//parser
app.use(express.json());
app.use(cors());
