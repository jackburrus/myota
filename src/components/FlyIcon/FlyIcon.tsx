import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function FlyIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      //   style={{ position: "absolute", left: 2 }}
      viewBox="0 0 68 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.5 55C28 55 47.62 28.64 48 27.5c.5-1.5-21.5-6-28-6-9 0-20 10.5-20 19S5.5 55 15.5 55z"
        fill="#FFC962"
      />
      <Path
        d="M15.5 0C28 0 47.62 26.36 48 27.5 48.5 29 26.5 37 20 37 11 37 0 23 0 14.5S5.5 0 15.5 0z"
        fill="#108CFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.832 27.189c.093.153.15.258.168.311.5 1.5-20.627 10-27.127 10-5.105 0-10.854-4.505-14.873-9.955C9.213 24.266 14.14 22 21.341 22c5.565 0 22.15 3.299 26.491 5.189z"
        fill="#06F"
      />
      <Circle cx={58} cy={18} r={10} fill="#108CFF" />
    </Svg>
  );
}

export default FlyIcon;
