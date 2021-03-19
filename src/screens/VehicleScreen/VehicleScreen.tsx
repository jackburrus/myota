import React from "react";

import { VehicleMap } from "../../components";
import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";
import Text from "../../theme/Text";

interface VehicleScreenProps {}

export const VehicleScreen = ({ navigation }: DrawerScreenProps) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      flex={1}
      backgroundColor="primaryDark"
    >
      <VehicleMap />

      <MenuToggleButton drawerNavigation={navigation} />
    </Box>
  );
};
