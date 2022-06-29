import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import React from "react";
import { useConnect } from "wagmi";

function Hero() {
  const { isConnected } = useConnect();
  const router = useRouter();
  const toast = useToast();

  return (
    <>
      <Box maxW={"1280px"} mx={"auto"} h={"100vh"}>
        <Flex py="2rem" justifyContent="space-between" alignItems={"center"}>
          <Heading className="h-shadow-black" fontFamily="Pacifico">
            Qubiq
          </Heading>
          <ConnectButton />
        </Flex>
        <Flex h={"85%"} justifyContent="space-between" alignItems="center">
          <Stack flex={1}>
            <Box>
              <Heading
                color={"black"}
                fontFamily="Philosopher"
                fontWeight={700}
                fontSize={"5rem"}
              >
                Unique smart
                <br />
                investments
                <br />
                delivered to{" "}
                <span style={{ color: "#6e6ece", textDecoration: "underline" }}>
                  you
                </span>
              </Heading>
              <Text
                textTransform="capitalize"
                fontFamily="Philosopher"
                color="blackAlpha.800"
                lineHeight="10px"
                fontSize="1.6rem"
                mt={"1em"}
              >
                Invest in expert selected cryptoBaskets.
              </Text>

              <Button
                mt="3.5rem"
                bg="black"
                boxShadow="rgba(100, 100, 111, 0.3) 0px 7px 29px 0px"
                color="white"
                _hover={{
                  bg: "blackAlpha.900",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                _focus={{ border: "none" }}
                _active={{ bg: "blackAlpha.900" }}
                fontFamily="Montserrat"
                onClick={() => {
                  isConnected
                    ? router.push("/app")
                    : toast({
                        title: "Wallet not connected!",
                        status: "error",
                        duration: 6000,
                        isClosable: false,
                        position: "top",
                      });
                }}
              >
                Launch App &nbsp;✨
              </Button>
            </Box>
          </Stack>
          <Box flex={1} rounded="lg">
            <Image
              alt={"landing-bg"}
              w="80%"
              h="50%"
              ml="auto"
              src={"/assets/mainbg2.png"}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Hero;
