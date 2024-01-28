import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
const MinusIcon = (props) => (
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
      fill="url(#a)"
      rx={12}
      transform="rotate(180 24 24)"
    />
    <Path
      fill="#fff"
      d="M11.976 11.375h4.399a.624.624 0 1 1 0 1.25h-8.75a.625.625 0 1 1 0-1.25h4.351Z"
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
export default MinusIcon;
