import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Panels = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        w={"100%"}
        minH={"100vh"}
        p={"1rem"}
        justifyContent={"center"}
        gap={"3rem"}
        alignItems={"center"}
      >
        <Flex
          w={"300px"}
          p={"1rem"}
          cursor={"pointer"}
          h={"100px"}
          rounded={"xl"}
          bg={"gray.100"}
          onClick={() => {
            navigate("/panel1");
          }}
          transition={".4s"}
          _hover={{ transform: "scale(1.1)" }}
          justifyContent={"center"}
          alignItems={"center"}
          shadow={"md"}
        >
          <Text> Panel 1</Text>
        </Flex>

        <Flex
          w={"300px"}
          p={"1rem"}
          cursor={"pointer"}
          onClick={() => {
            navigate("/panel2");
          }}
          transition={".4s"}
          _hover={{ transform: "scale(1.1)" }}
          h={"100px"}
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"xl"}
          bg={"gray.100"}
          shadow={"md"}
        >
          <Text> Panel 2</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Panels;
