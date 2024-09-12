import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
        console.log(process.env.MONGODB_URI,DB_NAME);
        const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected !! DB host ${connectionInstence.Connection.host}`);
    }catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
}

export default connectDB;