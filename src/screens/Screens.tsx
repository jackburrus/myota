import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import WalletScreen from "./WalletScreen/WalletScreen";
import VehicleScreen from "./VehicleScreen/VehicleScreen";

interface ScreensProps {}

const Drawer = createDrawerNavigator();

const Screens = (props: ScreensProps) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Wallet" component={WalletScreen} />
        <Drawer.Screen name="Vehicle" component={VehicleScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
