// always there is a probability of problems while trying to connect with a database. So the better option is to wrap the connection inside the try_catch block
// Database is always in an another continent.😂 


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";



/*
import express from "express";
const app = express();


; (async () => {
    try {
        const databaseConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on('error', (error) => {
            console.log(`Error: ${error}`);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Application is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("ERROR: ", error);
        throw error;
    }
})()

*/

// require('dotenv').config({path: "./env"});


import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config()

connectDB()
