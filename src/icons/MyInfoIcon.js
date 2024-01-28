import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MyInfoIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.629 8.767h0l.008.101v.007h0v5.065h-.075a.563.563 0 01-1.115.101l1.182-5.274zm0 0l-.002-.007a.637.637 0 00-1.264.115l1.266-.108zm.345-2.423a.919.919 0 10-1.838 0 .919.919 0 001.838 0zM19.075 10a9.075 9.075 0 10-18.15 0 9.075 9.075 0 0018.15 0zM2.2 10a7.8 7.8 0 1115.6 0 7.8 7.8 0 01-15.6 0z"
        fill="#373737"
        stroke="#373737"
        strokeWidth={0.15}
      />
    </Svg>
  )
}

export default MyInfoIcon;
