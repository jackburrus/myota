import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";

export const WalletScreen = ({ navigation }: DrawerScreenProps) => {
  return (
    <CustomSafeAreaView backgroundColor={"primaryDark"} flex={1}>
      <Box
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor="primaryDark"
      >
        <Text>Wallet</Text>
        <MenuToggleButton drawerNavigation={navigation} />
      </Box>
    </CustomSafeAreaView>
  );
};
