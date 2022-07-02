import { Box, Button, Heading, Text, Flex, Input } from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";
import EditTable from "../../../components/EditableTable";

function CreateBasket() {
  const router = useRouter();
  return (
    <>
      <Box position="relative" h="100%" w="100%" className="d-bg">
        <Navbar />

        <Box color="white" pt="9%" mx="10%">
          <Flex
            cursor="pointer"
            onClick={() => router.back()}
            textDecoration="underline"
            fontFamily="Montserrat"
            alignItems="center"
          >
            <BsArrowLeftShort fontSize="20px" />
            <Text ml="5px" fontSize="15px">
              Back
            </Text>
          </Flex>

          <Box mt="3em" mx="4%">
            <Heading
              textTransform="capitalize"
              fontFamily="Montserrat"
              color="white"
            >
              Create basket
            </Heading>

            <Box mt="4em" fontFamily="Montserrat">
              <Box>
                <Flex
                  w="70%"
                  mb="2.5em"
                  fontFamily="Montserrat"
                  mt="1em"
                  alignItems="center"
                >
                  <Text fontSize="15.5px">Name of Basket: </Text>
                  <Input
                    _focus={{ borderColor: "#2F8AF4" }}
                    variant="filled"
                    size="sm"
                    ml="1em"
                    w="40%"
                    type="text"
                    color="black"
                    placeholder="Basket Name"
                  />
                </Flex>

                <EditTable />
              </Box>
              <Button
                alignItems="center"
                boxShadow="rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"
                rounded="20px"
                p="4px 20px"
                className="btn-gradient"
                _hover={{
                  top: "-2px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                fontFamily="Montserrat"
                mt="1em"
                mb="10em"
                // isLoading
                // onClick={create}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CreateBasket;
