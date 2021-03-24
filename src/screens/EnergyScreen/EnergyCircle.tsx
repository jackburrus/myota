import { useTheme } from "@shopify/restyle";
import * as React from "react";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

import Box from "../../theme/Box";
import { Theme } from "../../theme/PrimaryTheme";
import Text from "../../theme/Text";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const paths = [
  "M245.181 149.401a110.005 110.005 0 01-108.321 96.596 110.003 110.003 0 01-109.818-94.89A110 110 0 01237.416 93.4",
];

function EnergyCircle(props) {
  const progress = useSharedValue(0);
  const [length, setLength] = React.useState(0);
  const ref = React.useRef<typeof AnimatedPath>(null);
  React.useEffect(() => {
    progress.value = withTiming(1, {
      duration: 2000,
      easing: Easing.linear,
    });
  }, [progress]);

  const theme = useTheme<Theme>();
  const {
    primaryLight,
    lineColor,
    accent,
    successGreen,
    neutralYellow,
    white,
  } = theme.colors;

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:
      length - length * Easing.bezier(0.17, 0.67, 0.37, 1)(progress.value),
  }));
  return (
    <Svg
      width={272}
      height={272}
      // style={{ borderWidth: 1 }}
      //   style={{ justifyContent: "center" }}
      viewBox="0 0 272 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Box
        borderColor={"failureRed"}
        zIndex={100}
        width={272}
        height={272}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          variant={"whiteText"}
          fontSize={50}
          style={{ height: 64 }}
          fontFamily={"Oxygen_700Bold"}
        >
          99%
        </Text>
        <Text variant={"title"}>Charged</Text>
      </Box>
      <Circle
        cx={136}
        cy={136}
        r={110}
        stroke="#25395F"
        strokeOpacity={0.2}
        strokeWidth={32}
      />
      {paths.map((d, key) => (
        <AnimatedPath
          key={key}
          animatedProps={animatedProps}
          onLayout={() => setLength(ref.current.getTotalLength())}
          ref={ref}
          d={d}
          stroke={"url(#prefix__paint0_linear)"}
          strokeWidth={32}
          strokeDasharray={length}
          strokeLinecap={"round"}
        />
      ))}
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={322}
          y1={128}
          x2={404.5}
          y2={136}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#57D087" />
          <Stop offset={1} stopColor="#25395F" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default EnergyCircle;
