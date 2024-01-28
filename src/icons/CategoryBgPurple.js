import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function CategoryBgPurple(props) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={40.0002} cy={40} r={40} fill="url(#paint0_linear_19_1349)" />
      <Circle cx={40.0002} cy={40} r={40} fill="url(#paint1_linear_19_1349)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_19_1349"
          x1={80.0002}
          y1={-0.00000476837}
          x2={-14.1174}
          y2={23.5294}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.9999} stopColor="#F7ECE8" />
          <Stop offset={1} stopColor="#E3C3B6" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_19_1349"
          x1={0.000243462}
          y1={39.6522}
          x2={80.0002}
          y2={39.6522}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E6B8D6" />
          <Stop offset={0.0001} stopColor="#F1DCEA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default CategoryBgPurple;
