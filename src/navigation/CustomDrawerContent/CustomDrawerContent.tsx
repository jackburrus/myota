import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Ionicons, SimpleLineIcons, FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../theme/PrimaryTheme";
import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";
import FlyIcon from "../../components/FlyIcon/FlyIcon";

interface CustomDrawerContentProps {}

export const CustomDrawerContent = ({ navigation }) => {
  const theme = useTheme<Theme>();
  const { accent } = theme.colors;
  return (
    <DrawerContentScrollView
      //   style={{ paddingTop: 50 }}
      contentContainerStyle={
        {
          // borderWidth: 1,
          // justifyContent: "center",
          // alignItems: "center",
          // flex: 1,
        }
      }
    >
      <DrawerItem
        icon={({ focused, color, size }) => <FlyIcon />}
        onPress={() => navigation.toggleDrawer()}
        style={{
          paddingLeft: 5,
        }}
        label={"Home"}
      />
      <DrawerItem
        label="Help"
        style={{
          paddingLeft: 5,
        }}
        icon={({ focused, color, size }) => (
          <SimpleLineIcons name="wallet" size={20} color={accent} />
        )}
        onPress={() => navigation.navigate("Wallet")}
      />
      <DrawerItem
        label="Help"
        style={{
          paddingLeft: 5,
        }}
        icon={({ focused, color, size }) => (
          <FontAwesome5 name="car" size={20} color={accent} />
        )}
        onPress={() => navigation.navigate("Vehicle")}
      />
      <DrawerItem
        label="Energy"
        style={{
          paddingLeft: 5,
        }}
        icon={({ focused, color, size }) => (
          <SimpleLineIcons name="energy" size={20} color={accent} />
        )}
        onPress={() => navigation.navigate("Energy")}
      />
    </DrawerContentScrollView>
  );
};
