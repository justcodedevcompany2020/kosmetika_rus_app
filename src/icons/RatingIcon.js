import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function RatingIcon(props) {
  return (
    <Svg
      style={{marginRight: 4}}
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.159 4.895L7.853.628c-.258-.837-1.448-.837-1.697 0L4.841 4.895H.888c-.862 0-1.217 1.101-.515 1.595l3.233 2.292-1.27 4.064c-.258.82.702 1.48 1.386.96L7 11.339l3.278 2.477c.684.52 1.644-.14 1.386-.96l-1.27-4.064 3.233-2.292c.702-.503.347-1.596-.515-1.596H9.159v-.008z"
        fill="url(#paint0_linear_19_1088)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_19_1088"
          x1={7}
          y1={0}
          x2={7}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EDDFCB" />
          <Stop offset={1} stopColor="#DBC3A0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default RatingIcon;
