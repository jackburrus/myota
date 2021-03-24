import { DrawerScreenProps, useIsDrawerOpen } from "@react-navigation/drawer";
import Constants from "expo-constants";
import React, { useEffect } from "react";
import { FAB } from "react-native-paper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import FlyIcon from "../FlyIcon/FlyIcon";

interface MenuToggleButtonProps {
  drawerNavigation: DrawerScreenProps;
}

const MenuToggleButton = (props: MenuToggleButtonProps) => {
  const { drawerNavigation } = props;
  const isDrawerOpen = useIsDrawerOpen();
  const offSetX = useSharedValue(10);
  const scaleValue = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  useEffect(() => {
    if (isDrawerOpen) {
      scaleValue.value = withTiming(0);
    } else {
      scaleValue.value = withTiming(1);
    }
  }, [isDrawerOpen]);

  return (
    <Animated.View
      style={[
        style,
        {
          position: "absolute",
          zIndex: 100,
          top: Constants.statusBarHeight,

          left: 15,
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
