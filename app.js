import express, { response } from "express";
import cors from 'cors'
import { config } from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/connect.js";

import userRoute from "./routes/userRoute.js";
import storyRoute from "./routes/storyRoute.js";
import responseRoute from "./routes/responseRoute.js";


config();
const app = express();

const DB_URL = process.env.DB_URL ;
const PORT = process.env.PORT ;


// database connection
connectDB(DB_URL) ;


// middlewares 
app.use(cors())

// routes
app.use('/api/user', userRoute);
app.use('/api/story', storyRoute);
app.use('/api/response', responseRoute);



app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`) ;
})