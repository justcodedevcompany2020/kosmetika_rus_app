import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function RatingBigIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.467 5.594L8.975.718C8.68-.24 7.32-.24 7.035.718L5.533 5.594H1.015c-.985 0-1.391 1.26-.589 1.823l3.696 2.62L2.67 14.68c-.295.937.802 1.692 1.584 1.098L8 12.959l3.746 2.83c.782.594 1.879-.161 1.584-1.098l-1.452-4.644 3.696-2.62c.802-.574.396-1.823-.589-1.823h-4.518v-.01z"
        fill="url(#paint0_linear_19_1576)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_19_1576"
          x1={8}
          y1={0}
          x2={8}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EDDFCB" />
          <Stop offset={1} stopColor="#DBC3A0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default RatingBigIcon;
