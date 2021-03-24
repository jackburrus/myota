import * as React from "react";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
  withDecay,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);
import { useTheme } from "@shopify/restyle";

import Text from "../../theme/Text";
import Box from "../../theme/Box";
import { Theme } from "../../theme/PrimaryTheme";

// const paths = [
//   "M246 136a110.004 110.004 0 00-56.918-96.344A109.998 109.998 0 0026.198 142.601a110 110 0 0062.597 92.755",
//   "M246 136a110.003 110.003 0 01-109.827 110 110 110 0 11109.825-110.691",
// ];
const paths = [
  // "M246 136a110.004 110.004 0 00-56.918-96.344A109.998 109.998 0 0026.198 142.601a110 110 0 0062.597 92.755",
  // "M246 136a109.999 109.999 0 00-219.943-3.527 110 110 0 00219.717 10.578",
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
        // borderWidth={1}
        borderColor={"failureRed"}
        zIndex={100}
        width={272}
        height={272}
        justifyContent={"center"}
        alignItems={"center"}

        // position={"absolute"}
        // left={100}
        // top={110}
        // alignItems={"center"}
      >
        <Text
          variant={"whiteText"}
          fontSize={50}
          style={{ height: 64 }}
          // fontFamily={"Oxygen_400Regular"}
          fontFamily={"Oxygen_700Bold"}
        >
          99%
        </Text>
        <Text variant={"title"}>Charged</Text>
        {/* <Text variant={"whiteText"}>Charged</Text> */}
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
          // stroke="#25395F"
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
