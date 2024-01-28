import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const RadioSelect = (props) => {
  return (
    <TouchableOpacity
      style={props.active ? styles.deliveryMethodActive : styles.deliveryMethod}
      onPress={props.onPress}
    >
      <View style={styles.itemTop}>
        <LinearGradient
          colors={props.active ? ["#C2ECD4", "#9AC6AD"] : ["#fff", "#fff"]}
          style={props.active ? styles.selectCircleActive : styles.selectCircle}
        ></LinearGradient>
        <Text style={props.active ? styles.itemTitleActive : styles.itemTitle}>
          {props.title}
        </Text>
      </View>
      <Text style={styles.itemDescr}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deliveryMethod: {
    marginBottom: 15,
    paddingLeft: 20,
    paddingTop: 18,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.15)",
    borderRadius: 10,
  },
  deliveryMethodActive: {
    marginBottom: 15,
    paddingLeft: 20,
    paddingTop: 18,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#9AC6AD",
    borderRadius: 10,
  },
  itemTop: {
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  selectCircle: {
    marginRight: 10,
    width: 16,
    height: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(113, 114, 122, 0.5)",
  },
  selectCircleActive: {
    marginRight: 10,
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: "green",
  },
  itemTitleActive: {
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    color: "#373737",
  },
  itemTitle: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
    color: "#71727A",
  },
  itemDescr: {
    fontFamily: "MontserratLight",
    fontSize: 12,
    lineHeight: 15,
    color: "#71727A",
  },
});
