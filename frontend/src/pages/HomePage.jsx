import React from 'react'
import { Container, Text, VStack } from '@chakra-ui/react';

import { Link } from "react-router-dom"

const HomePage = () => {
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