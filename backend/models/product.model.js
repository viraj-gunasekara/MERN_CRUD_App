import mongoose from "mongoose";

//schema
const productSchema = new mongoose.Schema({
    //each product have a name,price,image
    //name object
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
},{
    //timestamp to show: createdAt, updatedAt
    timestamps: true,
});

//depending on schema, create product model
const Product = mongoose.model('Product', productSchema);
//mongoose will take the name 'Product' [singuler capital word] & will make it as 'products' [plural simple word]

//export the model, to use in other files
export default Product;