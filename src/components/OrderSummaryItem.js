import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SummaryBgIcon from "../icons/SummaryBgIcon";

export const OrderSummaryItem = () => {
  return(
    <View style={styles.item}>
      <SummaryBgIcon style={{position: "absolute", left: 27, top: 37,}}/>
      <Image style={styles.image} 
        source={require('../img/summary-item-pic.png')}
      />
      <Text style={styles.posTitle}>Крем лифтинг для лица с наносистемой</Text>
      <Text style={styles.posDescr}>Объем: 150 мл</Text>
      <View style={styles.itemWrapper}>
        <Text style={styles.posSubDescr}>1 шт.</Text>
        <View style={styles.itemBottomRight}>
          <Text style={styles.posPrice}>678 ₽</Text>
          <Text style={styles.posPrevPrice}>999 ₽</Text>
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
    maxWidth: 58,
    maxHeight: 116,
    position: "absolute",
    left: 30,
    top: 9,
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

