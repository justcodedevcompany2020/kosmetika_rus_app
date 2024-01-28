import * as React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Svg, { Mask, Path, G, Rect } from "react-native-svg";

function CloseBtnIcon(props) {
  return (
    <TouchableOpacity style={styles.icon}>
      <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Mask
          id="mask0_19_403"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={1}
          y={1}
          width={18}
          height={18}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.61612 1.61612C2.10427 1.12796 2.89573 1.12796 3.38388 1.61612L18.3839 16.6161C18.872 17.1043 18.872 17.8957 18.3839 18.3839C17.8957 18.872 17.1043 18.872 16.6161 18.3839L1.61612 3.38388C1.12796 2.89573 1.12796 2.10427 1.61612 1.61612Z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3839 1.61612C17.8957 1.12796 17.1043 1.12796 16.6161 1.61612L1.61612 16.6161C1.12796 17.1043 1.12796 17.8957 1.61612 18.3839C2.10427 18.872 2.89573 18.872 3.38388 18.3839L18.3839 3.38388C18.872 2.89573 18.872 2.10427 18.3839 1.61612Z"
            fill="#fff"
          />
        </Mask>
        <G mask="url(#mask0_19_403)">
          <Rect width={20} height={20} fill="#373737" />
        </G>
      </Svg>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default CloseBtnIcon;
