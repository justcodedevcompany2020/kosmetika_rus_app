import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AccIcon(props) {
  return (
    <Svg
      width={12}
      height={7}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.161 6.69L5.994 2.565 1.828 6.69A1.071 1.071 0 011.07 7a1.08 1.08 0 01-.757-.31A1.06 1.06 0 010 5.94a1.05 1.05 0 01.314-.75L5.243.31A1.07 1.07 0 016 0a1.079 1.079 0 01.757.31l4.929 4.88a1.051 1.051 0 010 1.5 1.1 1.1 0 01-1.525 0z"
        fill="#373737"
      />
    </Svg>
  )
}

export default AccIcon;
