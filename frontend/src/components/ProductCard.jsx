import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const ProductCard = ({product}) => {

    // text color change with dark/light mode
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

  return (
    <Box
        shadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
        transition={'all 0.3s'}
        _hover={{transform: "translateY(-5px)", shadow: "xl"}}
        bg={bg}
    >
        {/* inside image element */}
        <Image
            src={product.image}
            alt={product.name}
            h={48}
            w={'full'}
            objectFit={'cover'}
        />

        {/* product name & price */}
        <Box p={4}>
            <Heading as={'h3'} size={'md'} mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                ${product.price}
            </Text>

            {/* button section */}
            <HStack spacing={2}>
                <IconButton icon={<EditIcon/>} 
                // onClick={onOpen} 
                colorScheme='blue'/>
                <IconButton icon={<DeleteIcon/>}
                // onClick={() => handleDelete(product.id)} 
                colorScheme='red'/>
            </HStack>
        </Box>

    </Box>
  )
}

export default ProductCard