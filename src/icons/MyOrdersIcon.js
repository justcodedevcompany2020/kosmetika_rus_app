import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MyOrdersIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 3.857A3.857 3.857 0 013.857 0h10.286A3.857 3.857 0 0118 3.857v10.286A3.858 3.858 0 0114.143 18H3.857A3.857 3.857 0 010 14.143V3.857zm3.857-2.571a2.571 2.571 0 00-2.571 2.571v4.5h7.071V1.286h-4.5zm5.786 0v7.071h7.071v-4.5a2.571 2.571 0 00-2.571-2.571h-4.5zm7.071 8.357H9.643v7.071h4.5a2.571 2.571 0 002.571-2.571v-4.5zm-8.357 7.071V9.643H1.286v4.5a2.571 2.571 0 002.571 2.571h4.5z"
        fill="#373737"
      />
    </Svg>
  );
};

export default MyOrdersIcon;
