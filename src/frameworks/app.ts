import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { start } from 'simple-auth-connection';
import { companyRouter } from '../adapters/routes';
import path from 'path';


dotenv.config();
const app : Express = express();
const port = 8000
app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));
start(process.env.MONGODB_URI!)
app.use(cookieParser()); 
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(companyRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});       