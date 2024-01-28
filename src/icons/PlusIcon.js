import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
const PlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect
      width={24}
      height={24}
      x={24}
      y={24}
      fill="#E0C18F"
      rx={12}
      transform="rotate(180 24 24)"
    />
    <Rect
      width={24}
      height={24}
      x={24}
      y={24}
      fill="url(#a)"
      rx={12}
      transform="rotate(180 24 24)"
    />
    <Path
      fill="#fff"
      d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={36}
        x2={36}
        y1={24}
        y2={48}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EDDFCB" />
        <Stop offset={1} stopColor="#DBC3A0" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default PlusIcon;
