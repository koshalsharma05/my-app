import { Flex, Grid, Switch, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PanelTwo = () => {
  const [on1, setOn1] = useState(false);
  const [on2, setOn2] = useState(false);
  const [on3, setOn3] = useState(false);
  const [on4, setOn4] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (on1) {
      fetch("https://dummyjson.com/products/1").then((resp) => {
        console.log(resp);
      });
    } else {
      fetch("https://dummyjson.com/products/2").then((resp) => {
        console.log(resp);
      });
    }


  }, [on1]);
  useEffect(() => {
    if (on2) {
      fetch("https://dummyjson.com/products/1").then((resp) => {
        console.log(resp);
      });
    } else {
      fetch("https://dummyjson.com/products/1").then((resp) => {
        console.log(resp);
      });
    }
  }, [on2]);
  useEffect(() => {
    if(on3){
      fetch("https://dummyjson.com/products/1").then((resp) => {
        console.log(resp);
      });
    } else{
      fetch("https://dummyjson.com/products/1").then((resp) => {
        console.log(resp);
      });
    }
  },[on3]);
  useEffect(() => {
    if(on4){
      console.log("api 4 called");
    } else{
      console.log("off api 4 called");
    }
  },[on4]);
  return (
    <>
      <Flex
        w={"100%"}
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          templateColumns={"1fr 3fr"}
          w={"100%"}
          gap={"1rem"}
          rounded={"md"}
          h={"100vh"}
        >
          <Flex
            w={"100%"}
            p={"1rem"}
            h={"100%"}
            rounded={"md"}
            direction={"column"}
            bg={"#fff"}
            gap={"1rem"}
            shadow={"xl"}
          >
            <Flex alignItems={"center"} gap={2}>
              <IoMdArrowRoundBack
                cursor={"pointer"}
                onClick={() => {
                  navigate("/panel");
                }}
              />
              <Text my={"1rem"} fontWeight={"bold"} fontSize={"xl"}>
                Panel 2
              </Text>
            </Flex>
            <Flex w={"100%"} gap={"1rem"}>
              {" "}
              <Text fontWeight={"bold"}>Key1</Text>
              <Switch
                onChange={(e) => {
                  setOn1(e.target.checked);
                }}
                colorScheme="green"
              />
            </Flex>

            <Flex w={"100%"} gap={"1rem"}>
              {" "}
              <Text fontWeight={"bold"}>Key1</Text>
              <Switch
                onChange={(e) => {
                  setOn2(e.target.checked);
                }}
                colorScheme="green"
              />
            </Flex>

            <Flex w={"100%"} gap={"1rem"}>
              {" "}
              <Text fontWeight={"bold"}>Key1</Text>
              <Switch
                onChange={(e) => {
                  setOn3(e.target.checked);
                }}
                colorScheme="green"
              />
            </Flex>

            <Flex w={"100%"} gap={"1rem"}>
              {" "}
              <Text fontWeight={"bold"}>Key1</Text>
              <Switch
                onChange={(e) => {
                  setOn4(e.target.checked);
                }}
                colorScheme="green"
              />
            </Flex>
          </Flex>
          <Flex
            w={"100%"}
            p={"1rem"}
            h={"100%"}
           
          ></Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default PanelTwo;
