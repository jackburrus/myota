import { DrawerScreenProps, useIsDrawerOpen } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { FAB } from "react-native-paper";
import Constants from "expo-constants";
import { View as MotiView } from "moti";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import Box from "../../theme/Box";
import FlyIcon from "../FlyIcon/FlyIcon";

interface MenuToggleButtonProps {
  drawerNavigation: DrawerScreenProps;
}

const MenuToggleButton = (props: MenuToggleButtonProps) => {
  const { drawerNavigation } = props;
  const isDrawerOpen = useIsDrawerOpen();
  const offSetX = useSharedValue(10);

  const style = useAnimatedStyle(() => {
    return {
      left: offSetX.value,
    };
  });

  useEffect(() => {
    if (isDrawerOpen) {
      offSetX.value = withSpring(80);
    } else {
      offSetX.value = withSpring(10);
    }
  }, [isDrawerOpen]);

  return (
    <Animated.View
      style={[
        style,
        {
          position: "absolute",

          top: Constants.statusBarHeight,

          // left: isDrawerOpen ? 80 : 10,
        },
      ]}
    >
      <FAB
        animated={false}
        style={{
          backgroundColor: "#25395F",
        }}
        small
        icon={() => <FlyIcon />}
        onPress={() => drawerNavigation.toggleDrawer()}
      />
    </Animated.View>
  );
};

export default MenuToggleButton;
