import { FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useTheme } from "@shopify/restyle";
import React from "react";

import FlyIcon from "../../components/FlyIcon/FlyIcon";
import { Theme } from "../../theme/PrimaryTheme";

interface CustomDrawerContentProps {}

export const CustomDrawerContent = ({ navigation }) => {
  const theme = useTheme<Theme>();
  const { accent } = theme.colors;
  return (
    <DrawerContentScrollView contentContainerStyle={{}}>
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
