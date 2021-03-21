import { useTheme } from "@shopify/restyle";
import React from "react";
import { View, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { clamp, getYForX, Vector } from "react-native-redash";

import { device } from "../../constants";
import { Theme } from "../../theme/PrimaryTheme";

import { GraphIndex, graphs } from "./Model";

const CURSOR = 50;
const styles = StyleSheet.create({
  cursor: {
    width: CURSOR,
    height: CURSOR,
    borderRadius: CURSOR / 2,
    backgroundColor: "rgba(16, 140, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  cursorBody: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    // backgroundColor: "black",
  },
});

interface CursorProps {
  index: Animated.SharedValue<GraphIndex>;
  translation: Vector<Animated.SharedValue<number>>;
}

const Cursor = ({ index, translation }: CursorProps) => {
  const theme = useTheme<Theme>();
  const {
    primaryLight,
    lineColor,
    accent,
    successGreen,
    neutralYellow,
    white,
  } = theme.colors;
  const isActive = useSharedValue(false);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      isActive.value = true;
    },
    onActive: (event) => {
      translation.x.value = clamp(event.x, 0, device.width - 50);
      translation.y.value = getYForX(
        graphs[index.value].data.path,
        translation.x.value
      );
    },
    onEnd: () => {
      isActive.value = false;
    },
  });

  const style = useAnimatedStyle(() => {
    const translateX = translation.x.value - CURSOR / 2;
    const translateY = translation.y.value - CURSOR / 2;
    return {
      transform: [
        { translateX },
        { translateY },
        { scale: withSpring(isActive.value ? 1 : 0) },
      ],
    };
  });

  return (
    <View style={StyleSheet.absoluteFill}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Animated.View style={[styles.cursor, style]}>
            <View style={[styles.cursorBody, { backgroundColor: accent }]} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Cursor;
