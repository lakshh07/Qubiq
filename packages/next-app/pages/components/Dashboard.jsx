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

function Dashboard() {
  const subscibedBasket = [];
  const basket = [];

  return (
    <>
      <Box>
        {" "}
        <Heading
          color="white"
          fontSize="22px"
          mb="20px"
          fontFamily="Montserrat"
        >
          Your Baskets
        </Heading>
        {basket?.length ? (
          <Box>
            <Wrap pb={"2.3em"} spacing="40px">
              {basket.map((list, index) => {
                return (
                  <Link key={index} href={`/app/baskets/${list}`}>
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
                          boxShadow:
                            "rgba(245, 245, 245, 0.3) 0px 7px 29px 0px",
                        }}
                      >
                        <Heading
                          textTransform="capitalize"
                          fontWeight="600"
                          fontSize="1.5em"
                          textAlign="center"
                          py="0.7em"
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
          </Box>
        ) : (
          <Flex
            pt="5%"
            justifyContent="center"
            flexDir="column"
            alignItems="center"
          >
            <Image
              alt={"no-result"}
              src={"/assets/no-results.png"}
              className="h-shadow-white"
              height={100}
              width={100}
            />
            <Text color="white" fontSize="1em" pt="2em" fontFamily="Montserrat">
              No Basket Created
            </Text>
          </Flex>
        )}
        <Heading
          mt="2.5em"
          color="white"
          fontSize="22px"
          mb="20px"
          fontFamily="Montserrat"
        >
          Subscribed Baskets
        </Heading>
        {subscibedBasket.length ? (
          <Box>
            <Wrap pb={"2.3em"} spacing="40px">
              {subscibedBasket.map((list, index) => {
                return (
                  <Link key={index} href={`/app/baskets/${list}`}>
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
                          boxShadow:
                            "rgba(245, 245, 245, 0.3) 0px 7px 29px 0px",
                        }}
                      >
                        <Heading
                          textTransform="capitalize"
                          fontWeight="600"
                          fontSize="1.5em"
                          textAlign="center"
                          py="0.7em"
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
          </Box>
        ) : (
          <Flex
            pt="5%"
            justifyContent="center"
            flexDir="column"
            alignItems="center"
          >
            <Image
              alt={"no-result"}
              src={"/assets/no-results.png"}
              className="h-shadow-white"
              height={100}
              width={100}
            />
            <Text
              color="white"
              fontSize="1em"
              pt="20px"
              fontFamily="Montserrat"
            >
              No Basket Subscribed
            </Text>
          </Flex>
        )}
      </Box>
    </>
  );
}

export default Dashboard;
