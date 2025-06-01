//index/main/app.js //entry point for the api

//import express & creat express app
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

//create a route with get method
app.get("/products", (req,res) => {
    
});

//view: access to db uri
// console.log(process.env.MONGO_URI);

//listen a port
app.listen(5000, () => {
    //call the db connection
    connectDB();

    console.log("Server started at http://localhost:5000 ");
});