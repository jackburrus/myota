import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";

interface VehicleScreenProps {}

export const VehicleScreen = ({ navigation }: DrawerScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>VehicleScreen</Text>
      <MenuToggleButton drawerNavigation={navigation} />
    </View>
  );
};
