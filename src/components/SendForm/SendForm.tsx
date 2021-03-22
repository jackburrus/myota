import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextInput } from "react-native";
import { FAB } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { ReText } from "react-native-redash";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";

import Box from "../../theme/Box";
import Text from "../../theme/Text";
import FlyIcon from "../FlyIcon/FlyIcon";
import { Theme } from "../../theme/PrimaryTheme";
import { CustomPressable } from "../../theme/CustomPressable";

import { Ticker } from "./Ticker";

const Iota = require("@iota/core");

interface SendFormProps {}

export const SendForm = (props: SendFormProps) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const transaction = {
      address: data.address,
      amount: iota.value,
    };
    console.log(transaction);
  };
  const [activeIotaType, setActiveIotaType] = useState("i");
  const theme = useTheme<Theme>();
  const {
    primaryLight,
    lineColor,
    accent,
    successGreen,
    neutralYellow,
    white,
  } = theme.colors;

  const iota = useSharedValue(5);
  const formattedValue = useDerivedValue(() =>
    `${iota.value}`.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    })
  );

  //   useEffect(() => {
  //     const iota = Iota.composeAPI({
  //       provider: "https://nodes.comnet.thetangle.org:443",
  //     });
  //     iota
  //       .getNodeInfo()
  //       // Convert the returned object to JSON to make the output more readable
  //       .then((info) => console.log(JSON.stringify(info, null, 1)))
  //       .catch((err) => {
  //         // Catch any errors
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <Box flex={1}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{
              color: "white",
              fontFamily: "Hind_400Regular",
              borderWidth: 1,
              borderColor: "white",
              height: 50,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              paddingLeft: 10,
            }}
            onChangeText={(value) => onChange(value)}
            defaultValue={"Address"}
            onFocus={() => onChange("")}
            value={value}
          />
        )}
        name="address"
        rules={{ required: true }}
        defaultValue={"Address"}
      />

      <FAB
        animated={false}
        style={{
          backgroundColor: "#25395F",
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 60,
          right: 30,
          zIndex: 100,
        }}
        small
        icon={() => (
          <Ionicons
            name="ios-send"
            size={24}
            color="white"
            style={{ transform: [{ rotate: "-90deg" }] }}
          />
        )}
        onPress={handleSubmit(onSubmit)}
      />
      <Box
        flex={1}
        // borderWidth={1}
        // justifyContent={"center"}
        paddingTop={"xl"}
        alignItems="center"
      >
        <Box flexDirection={"row"} alignItems={"center"}>
          <ReText
            text={formattedValue}
            style={{
              color: "white",
              fontFamily: "Hind_400Regular",
              fontSize: 100,

              //   left: 40,
              //   alignItems: "flex-end",
            }}
          />
          <Box
            flexDirection={"row"}
            position="absolute"
            bottom={40}
            left={60}
            zIndex={1}
          >
            <CustomPressable onPress={() => setActiveIotaType("i")}>
              <Text
                padding={"s"}
                color={activeIotaType == "i" ? "white" : "lineColor"}
              >
                i
              </Text>
            </CustomPressable>
            <CustomPressable onPress={() => setActiveIotaType("Mi")}>
              <Text
                padding={"s"}
                color={activeIotaType == "Mi" ? "white" : "lineColor"}
              >
                Mi
              </Text>
            </CustomPressable>
            <CustomPressable onPress={() => setActiveIotaType("Gi")}>
              <Text
                padding={"s"}
                color={activeIotaType == "Gi" ? "white" : "lineColor"}
              >
                Gi
              </Text>
            </CustomPressable>
          </Box>
        </Box>
        <Ticker />
      </Box>
    </Box>
  );
};
