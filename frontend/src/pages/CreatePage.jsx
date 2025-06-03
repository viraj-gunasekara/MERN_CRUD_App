import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  //chakra ui toast notif
  const toast = useToast()

  const {createProduct}=useProductStore()

  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct);
    
    //show toast
    if(!success){
      toast({
          title: 'Error',
          description: message,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        }) 
    } else {
      toast({
          title: 'Success',
          description: message,
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        }) 
    }

    //after show, reset the status
    setNewProduct({ name: "",
                    price: "",
                    image: "", })
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input 
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
            />

            <Input 
              placeholder="Product Price"
              name="price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
            />

            <Input 
              placeholder="Product Image"
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>

        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
