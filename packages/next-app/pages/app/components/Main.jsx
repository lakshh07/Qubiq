import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { BsBasket2, BsBasket2Fill } from "react-icons/bs";
import Navbar from "../../components/Navbar";
import Dashboard from "../../components/Dashboard";
import Baskets from "../../components/Basket";
import { useRouter } from "next/router";
import { useLoadingContext } from "../../../context/loading";

function Main() {
  const router = useRouter();
  const { setLoading } = useLoadingContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <>
      <Tabs variant="solid-rounded" orientation="vertical" defaultIndex={1}>
        <Grid
          templateColumns="1.2fr 6.5fr"
          h="100vh"
          w="100%"
          justifyContent="center"
          className="d-bg"
        >
          <Box>
            <Navbar />
            <TabList pl="0em" mx="3em" my="1em">
              <Flex
                mb="15em"
                mt="1em"
                alignItems="center"
                justifyContent="center"
              ></Flex>
              <Tab display="none"></Tab>
              <Tab
                color="white"
                _selected={{ bg: "whitesmoke", color: "black" }}
                _focus={{ border: "none" }}
                mb="1em"
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <AiFillHome />
                  <Text fontFamily="Montserrat">Dashboard</Text>
                </Flex>
              </Tab>
              <Tab
                mt="1em"
                color="white"
                _selected={{ bg: "whitesmoke", color: "black" }}
                _focus={{ border: "none" }}
                mb="1em"
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <BsBasket2Fill />
                  <Text fontFamily="Montserrat">Baskets</Text>
                </Flex>
              </Tab>
              <Tab
                mt="5em"
                color="white"
                _selected={{ bg: "initial", color: "white" }}
                boxShadow="rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
                _focus={{ border: "none" }}
                mb="1em"
                w={"max-content"}
                className="btn-gradient"
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                onClick={() => router.push("/app/create")}
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <BsBasket2 />
                  <Text fontFamily="Montserrat">Create Basket</Text>
                </Flex>
              </Tab>
            </TabList>
          </Box>

          <Box w="100%">
            <TabPanels h="100vh" py="0.5em" overflow="scroll">
              <TabPanel mx="1.5em"></TabPanel>

              <TabPanel>
                <Box mt="7em" mx="2em">
                  <Dashboard />
                </Box>
              </TabPanel>

              <TabPanel>
                <Box mt="9em" mx="2em">
                  <Baskets />
                </Box>
              </TabPanel>
            </TabPanels>
          </Box>
        </Grid>
      </Tabs>
    </>
  );
}

export default Main;
