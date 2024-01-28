import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CartIcon(props) {
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
        d="M3.555 4.406h11.742a1.702 1.702 0 011.695 1.873l-.511 5.109a1.703 1.703 0 01-1.695 1.533H6.654a1.703 1.703 0 01-1.67-1.369l-1.43-7.146z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        d="M3.555 4.406l-.69-2.761A.852.852 0 002.039 1H1M6.11 16.327h1.702M12.921 16.327h1.703"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CartIcon;
