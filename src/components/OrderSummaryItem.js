import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SummaryBgIcon from "../icons/SummaryBgIcon";

export const OrderSummaryItem = ({ data }) => {
  return (
    <View style={styles.item}>
      <View style={{ position: "absolute", left: 27, top: 27, }}>
        <SummaryBgIcon />
        <Image
          style={styles.image}
          source={{ uri: `https://basrarusbackend.justcode.am/uploads/${data.product?.photos[0]?.photo}` }}
        />
      </View>
      <Text style={styles.posTitle}>{data.product.name}</Text>
      <Text style={styles.posDescr}>Объем: {data.product.volume} мл</Text>
      <View style={styles.itemWrapper}>
        <Text style={styles.posSubDescr}>{data.product_count} шт.</Text>
        <View style={styles.itemBottomRight}>
          <Text style={styles.posPrice}>{Math.round(data.product_price_in_order_moment)} ₽</Text>
          {Math.round(data.product_price_in_order_moment) != Math.round(data.product_price) &&

            <Text style={styles.posPrevPrice}>{Math.round(data.product_price)} ₽</Text>
          }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 19,
    paddingBottom: 24,
    paddingLeft: 120,
    paddingRight: 35,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  image: {
    // maxWidth: 58,
    width: 58,
    height: 90,
    // maxHeight: 116,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    left: 5,
    top: -10,
    zIndex: 999
  },
  posTitle: {
    marginBottom: 6,
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#373737",
  },
  posDescr: {
    marginBottom: 19,
    fontFamily: "MontserratLight",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  posSubDescr: {
    fontFamily: "MontserratLight",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
  itemBottomRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  posPrice: {
    marginRight: 6,
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    lineHeight: 15,
    color: "#373737",
  },
  posPrevPrice: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 15,
    textDecorationLine: "line-through",
    color: "#373737",
    opacity: 0.35,
  },

})

