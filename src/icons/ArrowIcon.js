import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowIcon(props) {
  return (
    <Svg
      width={7}
      height={12}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.25}
        d="M.31 10.161l4.125-4.167L.31 1.828A1.071 1.071 0 010 1.07 1.08 1.08 0 01.31.314 1.06 1.06 0 011.06 0a1.05 1.05 0 01.75.314l4.88 4.929A1.07 1.07 0 017 6a1.079 1.079 0 01-.31.757l-4.88 4.929a1.051 1.051 0 01-1.5 0 1.1 1.1 0 010-1.525z"
        fill="#373737"
      />
    </Svg>
  );
};

export default ArrowIcon;
