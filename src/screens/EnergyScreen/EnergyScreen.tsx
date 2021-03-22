import React from "react";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";
import Text from "../../theme/Text";

interface EnergyScreenProps {}

export const EnergyScreen = ({ navigation }: EnergyScreenProps) => {
  return (
    <Box flex={1} justifyContent={"center"} backgroundColor={"primaryDark"}>
      <MenuToggleButton drawerNavigation={navigation} />
      <Text>Energy Screen</Text>
    </Box>
  );
};
