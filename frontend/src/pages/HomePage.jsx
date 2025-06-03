import React, { useEffect } from 'react'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { Link } from "react-router-dom"
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {

  // Load products from DB to HomePage, using fun made in Product.js
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products:", products)

  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient= {"linear(to-l, #7928CA, #FF0080)"}
          bgClip={"text"}
          textAlign={"center"}
        >
            Current Products
        </Text>

        {/* Grid to show products - 3 in large screen, 2 in medium, 1 in small*/}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={'full'}
        >
          {/* products fetch from product.js, will map in here */}
          {products.map((product) => (
            // Product show in product card, from components folder
            <ProductCard key={product._id} product={product}/>
          ))}
        </SimpleGrid>

        {/* when no products to show */}
        <Text
          fontSize={'xl'}
          textAlign={'center'}
          fontWeight={'bold'}
          color={'gray.500'}
        >
          No Products Found. {" "}

          {/* Link should come from reacrRouterDom */}
          <Link to={"/create"}>
            <Text as={'span'}
              color={'blue.500'}
              _hover={{textDecoration: 'underline'}}
            >
              Create a Product ?
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage