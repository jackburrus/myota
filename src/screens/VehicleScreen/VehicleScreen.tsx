import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { VehicleMap } from "../../components";
import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import { device } from "../../constants";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";
import Text from "../../theme/Text";

interface VehicleScreenProps {}

export const VehicleScreen = ({ navigation }: DrawerScreenProps) => {
  return (
    <CustomSafeAreaView backgroundColor={"primaryDark"} flex={1}>
      <Box
        justifyContent="center"
        alignItems="center"
        flex={1}
        backgroundColor="primaryDark"
      >
        <Box marginTop={"xl"} paddingTop={"s"}>
          <VehicleMap />
        </Box>

        <Box borderWidth={1} flex={0.3} width={device.width - 50}>
          <Text>Vehicle Stats</Text>
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
