import express from 'express';
import { userRoutes } from '../../app/controllers/routes/UserRoutes';
import { connectToMongo } from '../../infra/database/mongoConnection';

const app = express();
app.use(express.json()); 

const url = process.env.MONGO_URL;

app.use('/users', userRoutes); 

connectToMongo();

export default app;