import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";
import Text from "../../theme/Text";

interface EnergyScreenProps {}

export const EnergyScreen = ({ navigation }: EnergyScreenProps) => {
  return (
    <CustomSafeAreaView backgroundColor={"primaryDark"} flex={1}>
      <MenuToggleButton drawerNavigation={navigation} />
      <Box flex={1} justifyContent={"center"}>
        <Box
          flex={1}
          borderWidth={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text>Summary</Text>
        </Box>

        <Box
          flex={1}
          borderWidth={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text>Daily</Text>
        </Box>
        <Box flex={1}>
          <Box flexDirection={"row"} flex={1}>
            <Box
              flex={1}
              borderRightWidth={0.2}
              borderColor={"lineColor"}
              marginTop={"l"}
              // marginLeft={"l"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text marginLeft={"l"} marginBottom={"s"} variant={"title"}>
                Capacity
              </Text>
              <Text marginLeft={"l"} variant={"whiteText"} fontSize={18}>
                24 kW
              </Text>
            </Box>
            <Box
              flex={1}
              justifyContent={"center"}
              alignItems={"center"}
              marginTop={"l"}
              // paddingRight={"l"}
            >
              <Text marginRight={"l"} marginBottom={"s"} variant={"title"}>
                Total Yield
              </Text>
              <Text marginRight={"l"} variant={"whiteText"} fontSize={18}>
                24 kW
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
              <Text marginBottom={"s"} variant={"title"}>
                Total Energy
              </Text>
              <Text variant={"whiteText"} fontSize={18}>
                25.7 kWh
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
              <Text marginBottom={"s"} variant={"title"}>
                CO2 Reduction
              </Text>
              <Text marginBottom={"l"} variant={"whiteText"} fontSize={18}>
                18.9 ton
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </CustomSafeAreaView>
  );
};
