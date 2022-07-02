import {
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <Grid
        mt="2em"
        templateColumns="0.7fr 1fr 1.2fr"
        position="absolute"
        justifyContent="space-around"
        alignItems={"Center"}
        w="100%"
        zIndex={"999"}
      >
        <Link href="/">
          <Heading
            pl="1.5em"
            className="h-shadow-white"
            fontFamily="Pacifico"
            color="white"
          >
            Qubiq
          </Heading>
        </Link>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <BiSearchAlt color="grey" />
          </InputLeftElement>
          <Input
            bg="white"
            type="text"
            mx="auto"
            variant="filled"
            w="100%"
            placeholder="Search"
          />
        </InputGroup>

        <Flex alignItems="center" justifyContent="space-around">
          <ConnectButton />
        </Flex>
      </Grid>
    </>
  );
}

export default Navbar;
