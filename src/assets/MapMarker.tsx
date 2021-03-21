import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function MapMarker(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={11}
        cy={11}
        r={10.65}
        fill="#57D087"
        fillOpacity={0.5}
        stroke="#57D087"
        strokeWidth={0.7}
      />
      <Circle cx={11} cy={11} r={6} fill="#fff" />
      <Circle cx={11} cy={11} r={3} fill="#57D087" />
    </Svg>
  );
}

export default MapMarker;
