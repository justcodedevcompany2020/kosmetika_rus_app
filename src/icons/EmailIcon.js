import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function EmailIcon(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_19_456)">
        <Path
          d="M60 44.536V15.464C60 6.924 53.077 0 44.536 0H15.464C6.924 0 0 6.923 0 15.464v29.072C0 53.076 6.923 60 15.464 60h29.072C53.076 60 60 53.077 60 44.536z"
          fill="url(#paint0_linear_19_456)"
        />
        <Path
          d="M33.353 30.715L46.085 18.32a2.401 2.401 0 00-.91-.18H14.823c-.312 0-.622.062-.91.18l12.734 12.394a4.804 4.804 0 006.706 0z"
          fill="#fff"
        />
        <Path
          d="M26.208 32.016L12.812 19.234c-.255.39-.391.845-.39 1.311v18.91a2.403 2.403 0 002.403 2.403h30.352a2.404 2.404 0 002.401-2.403v-18.91c0-.466-.135-.921-.39-1.311L33.792 32.016a5.491 5.491 0 01-7.584 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_19_456"
          x1={60}
          y1={30}
          x2={0}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EDDFCB" />
          <Stop offset={1} stopColor="#DBC3A0" />
        </LinearGradient>
        <ClipPath id="clip0_19_456">
          <Path fill="#fff" d="M0 0H60V60H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default EmailIcon;
