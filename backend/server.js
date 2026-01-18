import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

dotenv.config();

const app = express();

//database connection
await connectToDB();

//middlewares
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;

//routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/admin',adminRouter);
app.use('/api/blog',blogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;