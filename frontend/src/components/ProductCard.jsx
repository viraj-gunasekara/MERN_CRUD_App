import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useProductStore } from '../store/product';

const ProductCard = ({product}) => {

    // text color change with dark/light mode
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    //show product initial values in update product modal
    const [updatedProduct, setUpdatedProduct] = useState(product);

    // update product function take from product.js
    const {updateProduct} = useProductStore()
    const handleUpdateProduct = async (pid, updatedProduct) => {
        const {success, message} = await updateProduct(pid, updatedProduct);
        onClose();
        //toast
        if(!success){
            toast({
              title: "Error",
              description: "Product not updated.",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            }); 
        }else {
            toast({
              title: "Success",
              description: "Product updated Successfully!",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            }); 
        }
    }

    //modal to update product
    const { isOpen, onOpen, onClose } = useDisclosure()

    // delete product function take from product.js
    const {deleteProduct} = useProductStore()
    const toast = useToast()

    const handleDeleteProduct = async (pid) => {
        const {success,message} = await deleteProduct(pid)

        // toast message show based on state of the delete success or not
        if(!success){
            toast({
              title: "Error",
              description: message,
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            }); 
        }else {
            toast({
              title: "Success",
              description: message,
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            }); 
        }
    }

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      {/* inside image element */}
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />

      {/* product name & price */}
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
          ${product.price}
        </Text>

        {/* button section */}
        <HStack spacing={2}>
          <IconButton
            icon={<EditIcon />}
            onClick={onOpen}
            colorScheme="blue"
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>

      {/* Modal to open when click on update button */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        {/* everything show in modal goes here */}
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
              />

              <Input
                placeholder="Product Price"
                name="price"
                value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
              />

              <Input
                placeholder="Product Image"
                name="image"
                value={updatedProduct.image}
                onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
              />

            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
                Update
            </Button>
            <Button variant={'ghost'} onClick={onClose}>
                Cancel
            </Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ProductCard