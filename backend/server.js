//index/main/app.js
//entry point for the api

//import express & creat express app
import express from "express";

const app = express();

//create a route with get method
app.get("/", (req,res) => {
    res.send("Server is ready");
});

//listen a port
app.listen(5000, () => {
    console.log("Server started at http://localhost:5000 ");
});