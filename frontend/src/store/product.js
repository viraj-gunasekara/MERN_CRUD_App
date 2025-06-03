import {create} from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),

    // Create Product function, to create item in db
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.image || !newProduct.price){
            return {success:false, message:"Plase fill in all fields."} 
        }

        try {
            const res = await fetch("/api/products", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        });
        const data = await res.json();

        if (!res.ok) {
            return { success: false, message: data.message || "Something went wrong" };
        }

        set((state) => ({products:[...state.products, data.data]}));

        return {success:true, message:"Product created successfully."} 
        
        } catch (error) {
            console.error("Error creating product:", error);
            return { success: false, message: "Server Error or Invalid JSON response" };
        }
        
    },

    //Get Products from Db to show in home screen
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data });
    },

    //Delete Product
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        // see whether the delete is success or not
        const data = await res.json();
        if(!data.success) return {success: false, message: data.message};

        // when product delete: immediatly update ui, without need of refresh
        set(state => ({products: state.products.filter(product => product._id !== pid)}));

        return {success: true, message: data.message};
    },
}))