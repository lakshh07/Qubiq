import React from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { useLoadingContext } from "../../context/loading";

function Loading() {
  const { loading } = useLoadingContext();

  return (
    <Box
      display={loading ? "block" : "none"}
      position="fixed"
      w="100%"
      h="100%"
      top="40%"
      zIndex="999"
      my="auto"
    >
      <Box top="50%">
        <Stack spacing="1em" alignItems="center">
          <Box align="center">
            <Heading
              mt={"10px"}
              className={"h-shadow"}
              fontSize="3em"
              fontFamily="Miriam Libre"
              color={"white"}
            >
              Qubiq
            </Heading>
            <Text
              className={"h-shadow"}
              color={"whitesmoke"}
              fontFamily="Miriam Libre"
              pb={"1em"}
            >
              Smart way to invest in crypto
            </Text>
          </Box>
          <Box className="loading-bar"></Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Loading;
