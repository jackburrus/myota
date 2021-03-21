import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";
import { IotaChart } from "../../components/IotaChart";
import Rainbow from "../../components/Chart";

export const WalletScreen = ({ navigation }: DrawerScreenProps) => {
  return (
    <CustomSafeAreaView backgroundColor={"primaryDark"} flex={1}>
      <Box
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor="primaryDark"
      >
        <IotaChart />
        <MenuToggleButton drawerNavigation={navigation} />
      </Box>
    </CustomSafeAreaView>
  );
};
