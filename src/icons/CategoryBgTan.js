import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function CategoryBgTan(props) {
  return (
    <Svg
      width={115}
      height={115}
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={57.5} cy={57.5} r={57.5} fill="#5D1F84" />
      <Circle cx={57.5} cy={57.5} r={57.5} fill="url(#paint0_linear_19_1352)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_19_1352"
          x1={57.5}
          y1={0}
          x2={57.5}
          y2={115}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.9999} stopColor="#EDDFCB" />
          <Stop offset={1} stopColor="#DBC3A0" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default CategoryBgTan
