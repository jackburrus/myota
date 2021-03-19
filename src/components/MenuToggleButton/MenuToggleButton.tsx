import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

import Box from "../../theme/Box";

interface MenuToggleButtonProps {
  drawerNavigation: DrawerScreenProps;
}

const MenuToggleButton = (props: MenuToggleButtonProps) => {
  const { drawerNavigation } = props;
  return (
    <FAB
      style={{ position: "absolute", top: 20, left: 10 }}
      small
      icon="plus"
      onPress={() => drawerNavigation.toggleDrawer()}
    />
  );
};

export default MenuToggleButton;
