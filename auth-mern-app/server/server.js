import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db_Info.js';
import cors from 'cors';
import router from './routes/User.route.js';

const app = express();
dotenv.config();

const PORT = 4000 || process.env.PORT;

connectDB();
app.use(cors());

app.use(express.json());

//api's
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is on http://localhost:${PORT}`);
});
