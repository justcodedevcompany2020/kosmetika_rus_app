import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function CategoryBgPink(props) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={40} cy={40} r={40} fill="url(#paint0_linear_19_1340)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_19_1340"
          x1={80}
          y1={-0.00000476837}
          x2={-14.1176}
          y2={23.5294}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.9999} stopColor="#F7ECE8" />
          <Stop offset={1} stopColor="#E3C3B6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default CategoryBgPink;
