import * as React from "react";
import { useSharedValue } from "react-native-reanimated";
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg";

function Battery(props) {
  const batteryLevel = useSharedValue(83);
  const dValue = `M7 36C7 16.118 23.118 0 ${batteryLevel.value} 0h147v254H43c-19.882 0-36-16.118-36-36V36z`;
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 425 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d={dValue} fill="url(#prefix__paint0_linear)" />
      <Rect
        x={4}
        y={4}
        width={382}
        height={246}
        rx={32}
        stroke="#8699BB"
        strokeWidth={8}
      />
      <Path
        d="M407 93v68c12.8 0 18-4.5 18-12v-44.5c0-9.2-12-11.5-18-11.5z"
        fill="#8699BB"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={190}
          y1={127}
          x2={7}
          y2={127}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#61E884" />
          <Stop offset={1} stopColor="#A2FCB9" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Battery;
