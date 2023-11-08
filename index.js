import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './app/config/index.js';
import incidentRoute from './app/routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 8081;

connectDB(process.env.MONGODB_URL || '');

app.use('/', incidentRoute);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
