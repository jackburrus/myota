import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import MenuToggleButton from "../components/MenuToggleButton/MenuToggleButton";
import { CustomDrawerContent } from "../navigation/CustomDrawerContent";

import { RouteTypes } from "./routeTypes";

import { WalletScreen, VehicleScreen } from "./index";

const Drawer = createDrawerNavigator<RouteTypes>();

const Screens = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: "#25395F",
          width: 70,
          zIndex: 0,
        }}
      >
        <Drawer.Screen name="Wallet" component={WalletScreen} />
        <Drawer.Screen name="Vehicle" component={VehicleScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
