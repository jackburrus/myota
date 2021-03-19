import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Ionicons, SimpleLineIcons, FontAwesome5 } from "@expo/vector-icons";

interface CustomDrawerContentProps {}

export const CustomDrawerContent = ({ navigation }) => {
  console.log(navigation);
  return (
    <DrawerContentScrollView>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Help"
        icon={({ focused, color, size }) => (
          <SimpleLineIcons name="wallet" size={24} color="white" />
        )}
        onPress={() => navigation.navigate("Wallet")}
      />
      <DrawerItem
        label="Help"
        icon={({ focused, color, size }) => (
          <FontAwesome5 name="car" size={24} color="white" />
        )}
        onPress={() => navigation.navigate("Vehicle")}
      />
    </DrawerContentScrollView>
  );
};
