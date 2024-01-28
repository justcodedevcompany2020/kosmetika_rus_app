import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function MoreIcon(props) {
  return (
    <Svg
      width={10}
      height={2}
      viewBox="0 0 10 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={1} cy={1} r={1} fill="#373737" />
      <Circle cx={5} cy={1} r={1} fill="#373737" />
      <Circle cx={9} cy={1} r={1} fill="#373737" />
    </Svg>
  );
};

export default MoreIcon;
