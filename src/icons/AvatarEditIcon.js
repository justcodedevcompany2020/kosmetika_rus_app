import * as React from "react"
import Svg, { Rect, Mask, Path, G } from "react-native-svg"

function AvatarEditIcon(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.75} width={24} height={24} rx={12} fill="#9AC6AD" />
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={8}
        y={7}
        width={9}
        height={10}
      >
        <Path
          d="M11.142 15.587l4.167-4.167-1.98-1.979-4.166 4.167a.45.45 0 00-.118.208l-.462 2.35 2.35-.461a.449.449 0 00.21-.118zm5.512-5.512a.897.897 0 000-1.268l-.711-.711a.897.897 0 00-1.268 0l-.711.711 1.979 1.98.711-.712z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#F8F9FE" d="M7.75 7H17.75V17H7.75z" />
      </G>
    </Svg>
  );
};

export default AvatarEditIcon;
