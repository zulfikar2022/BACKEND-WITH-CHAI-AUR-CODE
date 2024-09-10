import mongoose from "mongoose";

import { DB_NAME } from '../constants.js';


const connectDB = async function () {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`\nMONGODB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MONGODB connection error : ${error}`);
        process.exit(1);
    }
}

export default connectDB;