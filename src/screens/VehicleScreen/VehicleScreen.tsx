import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Pressable } from "react-native";

import { VehicleMap } from "../../components";
import Battery from "../../components/Battery/Battery";
import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import { device } from "../../constants";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";
import Text from "../../theme/Text";
import { Theme } from "../../theme/PrimaryTheme";

interface VehicleScreenProps {}

export const VehicleScreen = ({ navigation }: DrawerScreenProps) => {
  const theme = useTheme<Theme>();
  const { primaryLight, lineColor } = theme.colors;
  const [milesState, setMilesState] = useState("All");
  return (
    <CustomSafeAreaView backgroundColor={"primaryDark"} flex={1}>
      <Box
        justifyContent="center"
        alignItems="center"
        flex={1}
        backgroundColor="primaryDark"
      >
        <Box marginTop={"xl"} paddingTop={"s"} marginBottom={"m"}>
          <VehicleMap />
        </Box>

        <Box
          // borderWidth={1}
          flex={0.3}
          width={device.width - 50}
          flexDirection={"row"}
          alignItems="center"
        >
          <Box
            flex={1}
            // borderWidth={1}
            borderRadius={12}
            backgroundColor="primaryLight"
            height={75}
            // justifyContent={"center"}
            paddingTop={"s"}
            paddingLeft={"s"}
            flexDirection={"row"}
            marginRight={"s"}
            // alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Box>
              <Text variant={"title"}>Vehicle Wallet</Text>
              <Box>
                {/* <Text>124.65 Gi</Text>
              <Text>49,860 USD</Text> */}
                <Text variant={"whiteText"}>124.65 Gi</Text>
                <Text variant={"title"} fontSize={10}>
                  49,860 USD
                </Text>
              </Box>
            </Box>
            <Box paddingTop={"sm"}>
              <AntDesign name="qrcode" size={34} color={lineColor} />
            </Box>
          </Box>
          <Box
            flex={1}
            // borderWidth={1}
            borderRadius={12}
            backgroundColor="primaryLight"
            height={75}
            marginLeft={"s"}
            // justifyContent={"center"}
            // paddingTop={"s"}
            paddingLeft={"s"}
            flexDirection={"row"}
            // alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Box paddingTop={"s"}>
              <Text variant={"title"}>Vehicle Stats</Text>
              {milesState === "All" ? (
                <Pressable onPress={() => setMilesState("Today")}>
                  <Text variant={"whiteText"}>3462 Miles</Text>
                  <Text variant={"title"} fontSize={10}>
                    All Miles
                  </Text>
                </Pressable>
              ) : (
                <Pressable onPress={() => setMilesState("All")}>
                  <Text variant={"whiteText"}>250 Miles</Text>
                  <Text variant={"title"} fontSize={10}>
                    24 Hour
                  </Text>
                </Pressable>
              )}
            </Box>

            <Box justifyContent={"center"}>
              <Battery />
            </Box>
          </Box>
        </Box>
        <Box borderWidth={1.5} flex={0.5} width={device.width - 50}>
          <Text>Current Ride</Text>
        </Box>
        <Box borderWidth={2} flex={1} width={device.width - 50}>
          <Text>Car Events</Text>
        </Box>

        <MenuToggleButton drawerNavigation={navigation} />
      </Box>
    </CustomSafeAreaView>
  );
};
