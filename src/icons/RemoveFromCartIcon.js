import * as React from "react"
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg"

function RemoveFromCartIcon(props) {
  return (
      <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M19.791 4.167h-3.646l-1.041-1.042H9.896L8.854 4.167H5.208V6.25h14.583M6.25 19.792a2.083 2.083 0 002.083 2.083h8.333a2.083 2.083 0 002.084-2.083v-12.5H6.25v12.5z"
          fill="#373737"
          opacity={0.25}
        />
      </Svg>
    
  );
};

export default RemoveFromCartIcon;
