import React from "react";

import SolarPanels from "../../assets/SolarPanels";
import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import { device } from "../../constants";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";
import Text from "../../theme/Text";

import EnergyCircle from "./EnergyCircle";

interface EnergyScreenProps {}

export const EnergyScreen = ({ navigation }: EnergyScreenProps) => {
  return (
    <CustomSafeAreaView backgroundColor={"primaryDark"} flex={1}>
      <MenuToggleButton drawerNavigation={navigation} />
      <Box flex={1} justifyContent={"center"}>
        <Box flex={1} justifyContent={"center"} alignItems={"center"}>
          <EnergyCircle />
        </Box>

        <Box flex={0.7} justifyContent={"flex-end"} alignItems={"center"}>
          <Box
            width={device.width - 50}
            height={150}
            borderRadius={12}
            backgroundColor="primaryLight"
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
          >
            <Box flex={1} justifyContent={"center"} alignItems={"center"}>
              <Text variant={"whiteText"} fontSize={22}>
                Daily Revenue
              </Text>
              <Box flexDirection={"row"} alignItems={"flex-end"}>
                <Text
                  textAlign={"justify"}
                  variant={"title"}
                  fontSize={28}
                  style={{ height: 32 }}
                >
                  18.03867
                </Text>
                <Text variant={"title"}>Miota</Text>
              </Box>
            </Box>
            <Box
              flex={1}
              justifyContent={"center"}
              alignItems={"center"}
              paddingBottom={"m"}
            >
              <SolarPanels />
            </Box>
          </Box>
        </Box>
        <Box flex={1.2}>
          <Box flexDirection={"row"} flex={1}>
            <Box
              flex={1}
              borderRightWidth={0.2}
              borderColor={"lineColor"}
              marginTop={"l"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                marginLeft={"l"}
                marginBottom={"s"}
                variant={"title"}
                fontSize={20}
                style={{ height: 26 }}
              >
                Capacity
              </Text>
              <Text marginLeft={"l"} variant={"whiteText"} fontSize={24}>
                21 kW
              </Text>
            </Box>
            <Box
              flex={1}
              justifyContent={"center"}
              alignItems={"center"}
              marginTop={"l"}
            >
              <Text
                marginRight={"l"}
                marginBottom={"s"}
                variant={"title"}
                fontSize={20}
                style={{ height: 26 }}
              >
                Total Yield
              </Text>
              <Text marginRight={"l"} variant={"whiteText"} fontSize={24}>
                21 kW
              </Text>
            </Box>
          </Box>
          <Box flexDirection={"row"} flex={1}>
            <Box
              flex={1}
              borderTopWidth={0.2}
              borderColor={"lineColor"}
              marginLeft={"l"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRightWidth={0.2}
              marginBottom={"l"}
            >
              <Text
                marginBottom={"s"}
                variant={"title"}
                fontSize={20}
                style={{ height: 26 }}
              >
                Total Energy
              </Text>
              <Text variant={"whiteText"} fontSize={24}>
                22.1 kWh
              </Text>
            </Box>
            <Box
              flex={1}
              borderTopWidth={0.2}
              borderColor={"lineColor"}
              marginRight={"l"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                marginBottom={"s"}
                variant={"title"}
                fontSize={20}
                style={{ height: 26 }}
              >
                CO2 Reduction
              </Text>
              <Text marginBottom={"l"} variant={"whiteText"} fontSize={24}>
                14.2 ton
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </CustomSafeAreaView>
  );
};
