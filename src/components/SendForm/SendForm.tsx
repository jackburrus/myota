import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { FAB } from "react-native-paper";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";

import { device } from "../../constants";
import Box from "../../theme/Box";
import { CustomPressable } from "../../theme/CustomPressable";
import { Theme } from "../../theme/PrimaryTheme";
import Text from "../../theme/Text";

const Iota = require("@iota/core");

interface SendFormProps {}

export const SendForm = (props: SendFormProps) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const transaction = {
      address: data.address,
      amount: price.value,
    };
    console.log(transaction);
  };
  const [activeIotaType, setActiveIotaType] = useState("Mi");
  const theme = useTheme<Theme>();
  const {
    primaryLight,
    lineColor,
    accent,
    successGreen,
    neutralYellow,
    white,
  } = theme.colors;

  const l = [...Array(50)];
  const price = useSharedValue(0);
  const transY = useSharedValue(0);
  const transX = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (activeIotaType === "i") {
        const num = event.contentOffset.x / 45;

        price.value = Math.abs(+num.toFixed(2));
      } else {
        price.value = Math.abs(Math.floor(event.contentOffset.x / 45));
      }

      transX.value = event.contentOffset.x;

      transY.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

  const formattedValue = useDerivedValue(() =>
    `${price.value}`.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    })
  );

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
              marginBottom: 20,
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
          top: 65,
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
      <Box flex={1} alignItems="center">
        <Box
          flexDirection={"row"}
          alignItems={"center"}
          marginTop={"xl"}
          width={device.width}
          justifyContent={"center"}
        >
          <ReText
            text={formattedValue}
            style={{
              color: "white",
              fontFamily: "Hind_400Regular",
              fontSize: 80,
            }}
          />
          <Box flexDirection={"row"} position="absolute" bottom={40} right={30}>
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

        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          horizontal
          style={{
            height: device.height / 4,
          }}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: device.width / 2,
          }}
        >
          {l.map((e, i) => {
            const stylez = useAnimatedStyle(() => {
              const size = () => {
                if (i === Math.abs(Math.floor(price.value))) {
                  return 80;
                } else if (i === Math.abs(Math.floor(price.value)) + 1) {
                  return 60;
                } else if (i === Math.abs(Math.floor(price.value)) - 1) {
                  return 60;
                } else if (i === 0) {
                  return 40;
                } else {
                  return 40;
                }
              };
              return {
                transform: [
                  {
                    translateY: transY.value,
                  },
                ],
                width: 5,
                height: withSpring(size(), { stiffness: 40 }),
              };
            });

            return (
              <Animated.View
                key={i}
                style={[
                  {
                    margin: 20,

                    backgroundColor: "white",
                  },
                  stylez,
                ]}
              />
            );
          })}
        </Animated.ScrollView>
      </Box>
    </Box>
  );
};
