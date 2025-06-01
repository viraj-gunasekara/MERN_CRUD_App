//index/main/app.js //entry point for the api

//import express & creat express app
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

//Middleware (runs, before send the response back to the client)
app.use(express.json()); //allow us to accept JSON data in the req.body

//after modular the code segments, related to product API
app.use("/api/products", productRoutes);

//view: access to db uri
// console.log(process.env.MONGO_URI);

//listen a port
app.listen(5000, () => {
    //call the db connection
    connectDB();

    console.log("Server started at http://localhost:5000 ");
});