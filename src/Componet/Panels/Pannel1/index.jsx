import { Flex, Grid, Switch, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PanelOne = () => {
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
      fetch("https://dummyjson.com/products/3").then((resp) => {
        console.log(resp);
      });
    } else {
      fetch("https://dummyjson.com/products/3").then((resp) => {
        console.log(resp);
      });
    }
  }, [on2]);
  useEffect(() => {
    if(on3){
      console.log("api 3 called");
    } else{
      console.log("off api 3 called");
    }
  },[on3]);
  useEffect(() => {
    if(on4){
      console.log("api 4 called");
    }else{
      console.log("off api 4 called");
    }
    fetch('http://103.181.109.139:81/api/Panel/getRecordById?panelId=65')
      .then((res) => {
        res.json()
            .then(dataDeserialized => {
              setOn1(dataDeserialized.key_1);
              setOn2(dataDeserialized.key_2);
              setOn3(dataDeserialized.key_3);
              setOn4(dataDeserialized.key_4);
            })
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const CallAPIOnSwitchChangedOfFirstPanel = (target, switchName) => {
    const switchOne = switchName == "switch1" ? target : on1;
    const switchTwo = switchName == "switch2" ? target : on2;
    const switchThree = switchName == "switch3" ? target : on3;
    const switchFour = switchName == "switch4" ? target : on4;
    const data = {
      'panelId':65,
      'key_1':switchOne,
      'key_2':switchTwo,
      'key_3':switchThree,
      'key_4':switchFour
    }
    fetch('http://103.181.109.139:81/api/Panel/AddPanel?topic=Panel001', {
      'method': 'post',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    }).then(()=>{
      alert('Updated..!')
    })

    
  }
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
                Panel 1
              </Text>
            </Flex>
            <Flex w={"100%"} gap={"1rem"}>
              {" "}
              <Text fontWeight={"bold"}>Key1</Text>
              <Switch
                isChecked={on1}
                onChange={(e) => {
                  setOn1(e.target.checked);
                  CallAPIOnSwitchChangedOfFirstPanel(e.target.checked, "switch1");
                }}
                colorScheme="green"
              />
            </Flex>

            <Flex w={"100%"} gap={"1rem"}>
              {" "}
              <Text fontWeight={"bold"}>Key2</Text>
              <Switch
              isChecked={on2}
              onChange={(e) => {
                setOn2(e.target.checked)
                CallAPIOnSwitchChangedOfFirstPanel(e.target.checked, "switch2");
              }}
              
                colorScheme="green"
              />
            </Flex>

            <Flex w={"100%"} gap={"1rem"}>
              {" "}
              <Text fontWeight={"bold"}>Key3</Text>
              <Switch
              isChecked={on3}
                onChange={(e) => {
                  setOn3(e.target.checked)
                  CallAPIOnSwitchChangedOfFirstPanel(e.target.checked, "switch3");
                }}
                colorScheme="green"
              />
            </Flex>

            <Flex w={"100%"} gap={"1rem"}>
              {" "}
              <Text fontWeight={"bold"}>Key4</Text>
              <Switch
              isChecked={on4}
              onChange={(e) => {
                  setOn4(e.target.checked)
                  CallAPIOnSwitchChangedOfFirstPanel(e.target.checked, "switch4");
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

export default PanelOne;
