import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={["#C2ECD4", "#9AC6AD"]}
        style={[styles.linearGradient]}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    paddingVertical: 18,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 20,
    color: "#fff",
  },
});
