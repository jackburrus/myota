import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { device } from "../../constants";

interface TickerProps {}

const l = [...Array(60)];

export const Ticker = (props: TickerProps) => {
  const time = useSharedValue(0);
  const transY = useSharedValue(0);
  const transX = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const [timer, setTimer] = useState(1);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      time.value = Math.abs(Math.floor(event.contentOffset.x / 45));
      runOnJS(setTimer)(time.value);

      transX.value = event.contentOffset.x;

      transY.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
      //   runOnJS(fireHaptic)(e);
    },
  });
  return (
    <Animated.ScrollView
      showsHorizontalScrollIndicator={false}
      snapToInterval={20}
      snapToAlignment={"center"}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal
      style={{
        height: device.height / 4,
      }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: device.width / 2,
      }}
    >
      {l.map((e, i) => {
        const stylez = useAnimatedStyle(() => {
          const size = () => {
            if (i === time.value) {
              return 80;
            } else if (i === time.value + 1) {
              return 60;
            } else if (i === time.value - 1) {
              return 60;
            } else if (i === 0) {
              return 40;
            } else {
              return 40;
            }
          };
          return {
            transform: [
              {
                translateY: transY.value,
              },
            ],
            width: 5,
            height: withSpring(size(), { stiffness: 40 }),
          };
        });

        return (
          <Animated.View
            key={i}
            style={[
              {
                margin: 20,

                backgroundColor: "white",
              },
              stylez,
            ]}
          />
        );
      })}
    </Animated.ScrollView>
  );
};
