import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MyProfileIcon(props) {
  return (
    <Svg
      width={17}
      height={19}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.802 10.564h0c1.647 1.436 2.576 3.466 2.573 5.592v.992c0 .655-.56 1.227-1.305 1.227H1.93c-.745 0-1.305-.572-1.305-1.227v-.993C.618 14.033 1.548 12 3.193 10.57l.002-.001a1.347 1.347 0 011.58-.125v.001c1.048.645 2.335 1.02 3.725 1.02 1.385 0 2.677-.374 3.722-1.024a1.347 1.347 0 011.58.124zm-1.148-5.97c0 2.17-1.836 3.97-4.154 3.97-2.317 0-4.154-1.8-4.154-3.97C4.346 2.425 6.183.625 8.5.625c2.318 0 4.154 1.8 4.154 3.97z"
        stroke="#373737"
        strokeWidth={1.25}
      />
    </Svg>
  );
};

export default MyProfileIcon;
