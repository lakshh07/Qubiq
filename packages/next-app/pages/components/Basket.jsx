import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

function Baskets() {
  const basket = [];
  return (
    <>
      <Box color="white">
        {basket?.length ? (
          <Wrap pb={"2.3em"} spacing="40px">
            {basket.map((list, index) => {
              return (
                <Link key={index} href={`/app/subscribe/${list}`}>
                  <WrapItem position="relative" _hover={{ top: "-2px" }}>
                    <Box
                      p="0 0 0 0"
                      cursor="pointer"
                      bg="#e3e6e5"
                      rounded="10px"
                      h="200px"
                      w="200px"
                      border="1px solid #2f8af4"
                      _hover={{
                        boxShadow: "rgba(245, 245, 245, 0.3) 0px 7px 29px 0px",
                      }}
                    >
                      <Heading
                        textTransform="capitalize"
                        fontWeight="600"
                        fontSize="1.5em"
                        textAlign="center"
                        py="0.7em"
                        color={"black"}
                      >
                        {list}
                      </Heading>
                      <Image
                        alt={"basket"}
                        rounded="10px"
                        src={"/assets/basket.png"}
                      />
                    </Box>
                  </WrapItem>
                </Link>
              );
            })}
          </Wrap>
        ) : (
          <Flex
            pt="5%"
            justifyContent="center"
            flexDir="column"
            alignItems="center"
          >
            <Image
              alt={"basket"}
              src={"/assets/no-results.png"}
              className="h-shadow-white"
              height={100}
              width={100}
            />
            <Text color="white" fontSize="1em" pt="2em" fontFamily="Montserrat">
              No Basket Found
            </Text>
          </Flex>
        )}
      </Box>
    </>
  );
}

export default Baskets;
