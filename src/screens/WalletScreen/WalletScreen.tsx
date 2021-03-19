import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";

interface WalletScreenProps {}

export const WalletScreen = ({ navigation }) => {
  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      borderWidth={5}
    >
      <MenuToggleButton drawerNavigation={navigation} />
    </Box>
  );
};
