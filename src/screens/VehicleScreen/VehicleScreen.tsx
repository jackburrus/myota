import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { VehicleMap } from "../../components";
import Battery from "../../components/Battery/Battery";
import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import { device } from "../../constants";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";
import Text from "../../theme/Text";
import { Theme } from "../../theme/PrimaryTheme";
import { CurrentRideCard } from "../../components/CurrentRideCard";
import { VehicleEventsCard } from "../../components/VehicleEventsCard";
import { CustomScrollView } from "../../theme/CustomScrollView";

interface VehicleScreenProps {}

export const VehicleScreen = ({ navigation }: DrawerScreenProps) => {
  const theme = useTheme<Theme>();
  const { primaryLight, lineColor, white } = theme.colors;
  const [milesState, setMilesState] = useState("All");
  return (
    <CustomSafeAreaView backgroundColor={"primaryDark"} flex={1}>
      <MenuToggleButton drawerNavigation={navigation} />
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
        <CurrentRideCard
          name="Jack"
          startingLocation={"102 MLK Boulevard"}
          destination={"1509 Sharif Way"}
        />
        <Box flex={1} width={device.width - 50}>
          <Text variant={"whiteText"}>Vehicle Events</Text>
          <CustomScrollView showsVerticalScrollIndicator={false}>
            <VehicleEventsCard
              eventType={"Pothole Reported"}
              date={"Mar 20, 2020, 13:27 am PST"}
              price={0.215}
              incoming
              icon={
                <MaterialCommunityIcons
                  name="music-rest-whole"
                  size={36}
                  color={lineColor}
                />
              }
            />
            <VehicleEventsCard
              eventType={"Ride Completed"}
              date={"Mar 20, 2020, 13:12 am PST"}
              price={3.215}
              incoming
              icon={<Feather name="check" size={24} color={lineColor} />}
            />
            <VehicleEventsCard
              eventType={"Parking Reserved"}
              date={"Mar 20, 2020, 12:57 am PST"}
              price={0.015}
              icon={<Ionicons name="ios-car" size={24} color={lineColor} />}
            />
          </CustomScrollView>
        </Box>
      </Box>
    </CustomSafeAreaView>
  );
};
