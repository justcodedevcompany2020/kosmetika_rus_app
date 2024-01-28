import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const PaymentMethod = (props) => {
  return (
    <TouchableOpacity
      style={[
        props.active ? styles.paymentActive : styles.payment,
        props.style,
      ]}
      onPress={props.onPress}
    >
      <View style={styles.paymentTop}>
        <LinearGradient
          colors={props.active ? ["#C2ECD4", "#9AC6AD"] : ["#fff", "#fff"]}
          style={props.active ? styles.selectCircleActive : styles.selectCircle}
        ></LinearGradient>
        <Text
          style={[
            props.active ? styles.paymentTitleActive : styles.paymentTitle,
          ]}
        >
          {props.title}
        </Text>
      </View>
      <Text style={styles.paymentDescr}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  payment: {
    marginBottom: 15,
    paddingTop: 18,
    height: 91,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.15)",
    borderRadius: 10,
  },
  paymentActive: {
    marginBottom: 15,
    paddingTop: 18,
    height: 91,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#9AC6AD",
    borderRadius: 10,
  },
  paymentTop: {
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  selectCircle: {
    marginRight: 10,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(113, 114, 122, 0.5)",
    borderRadius: 100,
  },
  selectCircleActive: {
    marginRight: 10,
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: "green",
  },
  paymentTitle: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
    lineHeight: 20,
    color: "#71727A",
  },
  paymentTitleActive: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    lineHeight: 20,
    color: "#373737",
  },
  paymentDescr: {
    fontFamily: "MontserratLight",
    fontSize: 12,
    lineHeight: 15,
    color: "#71727A",
  },
});
