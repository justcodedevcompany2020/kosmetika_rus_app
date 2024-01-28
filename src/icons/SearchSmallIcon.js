import * as React from "react"
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg"

function SearchSmallIcon(props) {
  return (
    <TouchableOpacity>
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M23 23l-8.71-8.643m2.345-5.5c0 4.34-3.5 7.857-7.818 7.857C4.5 16.714 1 13.197 1 8.857S4.5 1 8.818 1c4.317 0 7.817 3.518 7.817 7.857z"
          stroke="#373737"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
    
  );
};

export default SearchSmallIcon;
