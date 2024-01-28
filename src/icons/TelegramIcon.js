import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function TelegramIcon(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_19_464)">
        <Path
          d="M60 44.536V15.464C60 6.924 53.077 0 44.536 0H15.464C6.924 0 0 6.923 0 15.464v29.072C0 53.076 6.923 60 15.464 60h29.072C53.076 60 60 53.077 60 44.536z"
          fill="url(#paint0_linear_19_464)"
        />
        <Path
          d="M60 44.536V15.464C60 6.924 53.077 0 44.536 0H15.464C6.924 0 0 6.923 0 15.464v29.072C0 53.076 6.923 60 15.464 60h29.072C53.076 60 60 53.077 60 44.536z"
          fill="url(#paint1_linear_19_464)"
        />
        <Path
          d="M26.341 34.454l-.562 7.817c.805 0 1.153-.341 1.571-.751l3.773-3.563 7.817 5.657c1.434.79 2.444.374 2.83-1.303l5.132-23.761.001-.001c.455-2.095-.766-2.914-2.163-2.4L14.578 27.56c-2.058.79-2.027 1.924-.35 2.438l7.712 2.37L39.85 21.292c.843-.551 1.61-.246.979.306L26.34 34.454z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_19_464"
          x1={60}
          y1={30}
          x2={0}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EDDFCB" />
          <Stop offset={1} stopColor="#DBC3A0" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_19_464"
          x1={60}
          y1={26.5}
          x2={9.74785e-8}
          y2={27.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F7ECE8" />
          <Stop offset={1} stopColor="#E3C3B6" />
        </LinearGradient>
        <ClipPath id="clip0_19_464">
          <Path fill="#fff" d="M0 0H60V60H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TelegramIcon;
