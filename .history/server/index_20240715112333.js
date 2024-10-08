import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './config/db.js';
import skillRoute from './routes/skill.route.js';
import ProjectRoute from './routes/project.route.js';
import ContactRoute from './routes/contact.route.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
connectDb();
const app = express();
app.use(express.json());
app.use(cors());

// const corsOptions = {
//   origin: 'http://localhost:5174',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));

app.use('/api/skill', skillRoute);
app.use('/api/project', ProjectRoute);
app.use('/api/contact', ContactRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log('db is connecting');
});
