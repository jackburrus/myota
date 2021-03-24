import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { ReText, Vector, round } from "react-native-redash";

import Box from "../../theme/Box";
import Text from "../../theme/Text";

import ETH from "./components/ETH";
import { graphs, SIZE, GraphIndex } from "./Model";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  values: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  value: {
    fontWeight: "500",
    fontSize: 24,
  },
});

interface HeaderProps {
  translation: Vector<Animated.SharedValue<number>>;
  index: Animated.SharedValue<GraphIndex>;
}

const Header = ({ translation, index }: HeaderProps) => {
  const theme = useTheme<Theme>();
  const {
    primaryLight,
    lineColor,
    accent,
    successGreen,
    neutralYellow,
    white,
  } = theme.colors;
  const data = useDerivedValue(() => graphs[index.value].data);

  const price = useDerivedValue(() => {
    const p = interpolate(
      translation.y.value,
      [0, SIZE],
      [data.value.maxPrice, data.value.minPrice]
    );
    return `$ ${round(p, 2).toLocaleString("en-US", { currency: "USD" })}`;
  });
  const percentChange = useDerivedValue(
    () => `${round(data.value.percentChange, 3)}%`
  );
  const label = useDerivedValue(() => data.value.label);
  const style = useAnimatedStyle(() => ({
    fontWeight: "500",
    fontSize: 24,
    color: data.value.percentChange > 0 ? "green" : "red",
  }));

  return (
    <Box>
      <Box marginLeft={"m"} marginTop={"s"}>
        <Text variant={"whiteText"} fontSize={24}>
          Balance
        </Text>
      </Box>

      <Box>
        <Box marginLeft={"m"}>
          <ReText style={[styles.value, { color: white }]} text={price} />
          {/* <Text style={styles.label}>Iota</Text> */}
        </Box>
        {/* <View>
          <ReText style={style} text={percentChange} />
          <ReText style={styles.label} text={label} />
        </View> */}
      </Box>
    </Box>
  );
};

export default Header;
