import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//endpoints
/*GET ALL endpoint*/
//get all-products in db route with get method
router.get("/", getProducts); //call to action in controller file

/*CREATE endpoint*/
//create product route with post method
router.post("/", createProduct); //call to action in controller file

/*UPDATE endpoint*/
//update product route with post method
router.put("/:id", updateProduct); //call to action in controller file

/*DELETE endpoint*/
//delete product route with delete method - should pass id
router.delete("/:id", deleteProduct); //call to action in controller file

export default router;