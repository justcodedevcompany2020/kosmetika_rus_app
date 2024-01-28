import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CartIcon from "../icons/CartIcon";

export const CartButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.linearGradient}>
        <CartIcon />
        <Text numberOfLines={1} style={styles.buttonText}>
          В корзину
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: "#9AC6AD",
    borderRadius: 10,
    paddingVertical: 13,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    fontSize: 12,
    color: "#fff",
    marginLeft: 10,
  },
});
