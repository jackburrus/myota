import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

import Text from "../../theme/Text";

function EnergyCircle(props) {
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
      <Path
        d="M246 136a110.004 110.004 0 00-56.918-96.344A109.998 109.998 0 0026.198 142.601a110 110 0 0062.597 92.755"
        stroke="#25395F"
        strokeWidth={52}
      />
    </Svg>
  );
}

export default EnergyCircle;
