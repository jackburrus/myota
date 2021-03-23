import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);
import Text from "../../theme/Text";

const paths = [
  "M246 136a110.004 110.004 0 00-56.918-96.344A109.998 109.998 0 0026.198 142.601a110 110 0 0062.597 92.755",
  "M246 136A109.997 109.997 0 00139.787 26.065a110 110 0 10105.171 125.039",
];

function EnergyCircle(props) {
  const progress = useSharedValue(0);
  const [length, setLength] = React.useState(0);
  const ref = React.useRef<typeof AnimatedPath>(null);
  React.useEffect(() => {
    progress.value = withTiming(1, {
      duration: 4000,
      easing: Easing.linear,
    });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:
      length - length * Easing.bezier(0.37, 0, 0.63, 1)(progress.value),
  }));
  return (
    <Svg
      width={272}
      height={272}
      //   style={{ justifyContent: "center" }}
      viewBox="0 0 272 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* <Text>Amount</Text> */}
      <Circle
        cx={136}
        cy={136}
        r={110}
        stroke="#25395F"
        strokeOpacity={0.2}
        strokeWidth={52}
      />
      {paths.map((d, key) => (
        <AnimatedPath
          key={key}
          animatedProps={animatedProps}
          onLayout={() => setLength(ref.current.getTotalLength())}
          ref={ref}
          d={d}
          stroke="#25395F"
          strokeWidth={52}
          strokeDasharray={length}
        />
      ))}
      {/* <AnimatedPath animatedProps={animatedProps} fill="black" /> */}
      {/* <Path
        d="M246 136a110.004 110.004 0 00-56.918-96.344A109.998 109.998 0 0026.198 142.601a110 110 0 0062.597 92.755"
        stroke="#25395F"
        strokeWidth={52}
      /> */}
    </Svg>
  );
}

export default EnergyCircle;
