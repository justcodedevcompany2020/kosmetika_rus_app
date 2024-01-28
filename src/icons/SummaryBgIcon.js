import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function SummaryBgIcon(props) {
  return (
    <Svg
      width={70}
      height={70}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={35} cy={35} r={35} fill="url(#paint0_linear_19_693)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_19_693"
          x1={35}
          y1={0}
          x2={35}
          y2={70}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.9999} stopColor="#F7ECE8" />
          <Stop offset={1} stopColor="#E3C3B6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SummaryBgIcon;
