import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon(props) {
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
        opacity={0.25}
        d="M17 17l-5.217-5.217M1 7.26a6.26 6.26 0 1012.522 0A6.26 6.26 0 001 7.26z"
        stroke="#373737"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchIcon;
