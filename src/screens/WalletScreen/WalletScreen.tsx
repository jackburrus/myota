import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";

export const WalletScreen = ({ navigation }: DrawerScreenProps) => {
  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      borderWidth={5}
    >
      <Text>Wallet</Text>
      <MenuToggleButton drawerNavigation={navigation} />
    </Box>
  );
};
