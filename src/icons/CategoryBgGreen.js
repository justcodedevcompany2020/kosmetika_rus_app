import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function CategoryBgGreen(props) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={40} cy={40} r={40} fill="#FF5F7D" />
      <Circle cx={40} cy={40} r={40} fill="url(#paint0_linear_19_1346)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_19_1346"
          x1={0}
          y1={0}
          x2={72.2255}
          y2={86.4921}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9AC6AD" />
          <Stop offset={0.0001} stopColor="#C2ECD4" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default CategoryBgGreen;
