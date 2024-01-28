import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SummaryBgIcon from "../icons/SummaryBgIcon";

export const OrderItemFinal = ({
  title,
  descr,
  currentPrice,
  prevPrice,
  amount,
}) => {
  return (
    <View style={styles.item}>
      <SummaryBgIcon style={{ position: "absolute", left: 15 }} />
      <Image style={styles.cartPic} source={require("../img/category1.png")} />
      <View style={{ ...styles.itemRight, flexShrink: 1 }}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescr}>{descr}</Text>
        <View style={styles.itemBottom}>
          <Text style={styles.amount}>{amount} шт.</Text>
          <View style={styles.bottomWrapper}>
            <Text style={styles.currentPrice}>{currentPrice} ₽</Text>
            <Text style={styles.prevPrice}>{prevPrice} ₽</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 15,
    width: "100%",
    paddingLeft: 29,
    paddingRight: 21,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  cartPic: {
    marginRight: 21,
    width: 55,
    height: 110,
  },
  itemTitle: {
    marginBottom: 8,
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#373737",
  },
  itemDescr: {
    marginBottom: 15,
    fontFamily: "MontserratLight",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
  itemBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderColor: 2,
    borderColor: "red",
    borderStyle: "solid",
  },

  bottomWrapper: {
    flexDirection: "row",
  },
  currentPrice: {
    marginRight: 8,
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    lineHeight: 18,
    color: "#373737",
  },
  prevPrice: {
    marginRight: 19,
    fontFamily: "MontserratRegular",
    fontSize: 16,
    lineHeight: 18,
    textDecorationLine: "line-through",
    color: "#373737",
    opacity: 0.35,
  },
  amount: {
    fontFamily: "MontserratLight",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
});
