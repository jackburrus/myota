import React from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { device } from "../../constants";

interface TickerProps {}

export const Ticker = (props: TickerProps) => {
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
            if (i === price.value) {
              return 80;
            } else if (i === price.value + 1) {
              return 60;
            } else if (i === price.value - 1) {
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
