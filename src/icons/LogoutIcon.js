import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoutIcon(props) {
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
        d="M11.7 18a.9.9 0 100-1.8H4.2a2.4 2.4 0 01-2.4-2.4V4.2a2.4 2.4 0 012.4-2.4h7.5a.9.9 0 000-1.8H4.2A4.2 4.2 0 000 4.2v9.6A4.2 4.2 0 004.2 18h7.5zm1.19-13.561a.9.9 0 011.271.05l3.6 3.9a.9.9 0 010 1.222l-3.6 3.9a.9.9 0 11-1.321-1.223l2.205-2.39H5.7a.9.9 0 110-1.8h9.344L12.84 5.71a.9.9 0 01.05-1.271z"
        fill="#EC4F4F"
      />
    </Svg>
  );
};

export default LogoutIcon;
