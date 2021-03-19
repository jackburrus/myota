import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { FAB } from "react-native-paper";
import Constants from "expo-constants";

import Box from "../../theme/Box";

interface MenuToggleButtonProps {
  drawerNavigation: DrawerScreenProps;
}

const MenuToggleButton = (props: MenuToggleButtonProps) => {
  const { drawerNavigation } = props;

  return (
    <FAB
      style={{
        position: "absolute",
        top: Constants.statusBarHeight,
        left: 10,
        zIndex: 100,
      }}
      small
      icon="plus"
      onPress={() => drawerNavigation.toggleDrawer()}
    />
  );
};

export default MenuToggleButton;
