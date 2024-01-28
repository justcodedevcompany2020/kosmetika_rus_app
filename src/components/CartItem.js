import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import RemoveFromCartIcon from "../icons/RemoveFromCartIcon";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import SummaryBgIcon from "../icons/SummaryBgIcon";

export const CartItem = ({ title, descr, currentPrice, prevPrice }) => {
  const [count, setCount] = useState(1);
  const onPressMinus = () =>
    setCount((prevCount) => (prevCount == 0 ? (prevCount = 0) : prevCount - 1));
  const onPressPlus = () => setCount((prevCount) => prevCount + 1);

  return (
    <View style={styles.cartItem}>
      <TouchableOpacity style={{ position: "absolute", bottom: 17, right: 15 }}>
        <RemoveFromCartIcon />
      </TouchableOpacity>
      <SummaryBgIcon style={{ position: "absolute", left: 15 }} />
      <Image style={styles.cartPic} source={require("../img/category1.png")} />
      <View style={{ ...styles.itemRight, flexShrink: 1 }}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescr}>{descr}</Text>
        <View style={styles.itemBottom}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text style={styles.currentPrice}>{currentPrice} ₽</Text>
            <Text style={styles.prevPrice}>{prevPrice} ₽</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={styles.minusBtn} onPress={onPressMinus}>
              <MinusIcon />
            </TouchableOpacity>
            <Text style={styles.itemAmount}>{count}</Text>
            <TouchableOpacity style={styles.plusBtn} onPress={onPressPlus}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plusBtn: {
    backgroundColor: "brown",
    width: 24,
    height: 24,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  cartItem: {
    marginBottom: 15,
    width: "100%",
    paddingLeft: 29,
    paddingRight: 20,
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
  minusBtn: {
    marginRight: 14,
  },
  itemAmount: {
    marginRight: 14,
    fontFamily: "MontserratRegular",
    fontSize: 16,
    lineHeight: 16,
    color: "#373737",
  },
});
