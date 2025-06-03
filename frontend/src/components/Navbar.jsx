import React from "react";
import { Button, Container, Flex, HStack, Link, Text, useColorMode } from "@chakra-ui/react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import { LuMoonStar } from "react-icons/lu";

const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{
            base: "22",
            sm: "28",
          }}
          fontWeight="bold"
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          <Link to={"/"}>Shopping Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaRegSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <LuMoonStar fontSize={20}/> : <GoSun fontSize={20}/>}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
