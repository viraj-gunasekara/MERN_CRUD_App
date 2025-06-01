//index/main/app.js //entry point for the api

//import express & creat express app
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

//Middleware (runs, before send the response back to the client)
app.use(express.json()); //allow us to accept JSON data in the req.body

/*GET ALL endpoint*/
//get all-products in db route with get method
app.get("/api/products", async (req, res) => {
    try {
        //fetch all the products
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log("error infetching products:", error.message); //put of debugging purposes
        res.status(500).json({success: false, message: "Server error"});
    }
})

/*CREATE endpoint*/
//create product route with post method
app.post("/api/products", async (req,res) => { //make the fun async so can use await keyword
    //get the user pass, product
    const product = req.body; //user will send this data

    //check the requirements are empty
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }

    //if above check passed (user pass everything)
    //create new product (from product model)
    const newProduct = new Product(product);

    try {
        //save the product to db
        await newProduct.save();
        //201 Created status code for successfully created
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        //colsole the error
        console.error("Error in create product:", error.message);
        //500 status code for Internal Server Error
        res.status(500).json({success: false, message: "Server Error"});
    }
});

/*DELETE endpoint*/
//delete product route with delete method - should pass id
app.delete("/api/products/:id", async (req,res) => {
    //seperatly get the id from the url
    const {id} = req.params;
    //console.log("id:",id);

    try {
        //if user pass valide object id - delete it
        await Product.findByIdAndDelete(id);
        //200 status code for Success Deletion
        res.status(200).json({success: true, message: "Product Deleted"});
    } catch (error) {
        //if user pass invalide object id
        console.log("error in deleting product:", error.message);
        //404 status code for product-not-found error
        res.status(404).json({success: false, message: "Product not found!"});
    }
})

//view: access to db uri
// console.log(process.env.MONGO_URI);

//listen a port
app.listen(5000, () => {
    //call the db connection
    connectDB();

    console.log("Server started at http://localhost:5000 ");
});