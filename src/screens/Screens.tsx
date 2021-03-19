import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import MenuToggleButton from "../components/MenuToggleButton/MenuToggleButton";

import { RouteTypes } from "./routeTypes";

import { WalletScreen, VehicleScreen } from "./index";

const Drawer = createDrawerNavigator<RouteTypes>();

const Screens = () => {
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
