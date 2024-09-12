// require ('dotenv').config();
import dotenv from "dotenv";
import connectDB from "./DB/index.js";
import { app } from "./app.js";

dotenv.config();

console.log(process.env.MONGODB_URI);

//handel the response (it a [promices])
connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB CONNECTION FAILED !!", error);
})























/*
import express from "express";
const app = express();

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("error");
            throw error;
        });

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.log("ERROR :-", error);
        
    }
})();

*/

