import * as React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Svg, { Rect, Path } from "react-native-svg";

function ReturnIcon(props) {
  return (
    <View style={[styles.icon, props.style]}>
      <Svg
        width={34}
        height={34}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Rect
          opacity={0.25}
          x={0.5}
          y={0.5}
          width={33}
          height={33}
          rx={8.5}
          stroke="#373737"
        />
        <Path
          d="M19.69 21.161l-4.125-4.167 4.125-4.166a1.073 1.073 0 00.23-1.167 1.072 1.072 0 00-.574-.58 1.05 1.05 0 00-1.155.233l-4.88 4.929A1.07 1.07 0 0013 17a1.08 1.08 0 00.31.757l4.88 4.929a1.051 1.051 0 001.5 0 1.1 1.1 0 000-1.525z"
          fill="#373737"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default ReturnIcon;
