import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { CartItem } from "./CartItem";

export const CartList = (props) => {
  const DATA = [
    {
      itemId: '1',
      title: `Крем лифтинг для лица\nс наносистемой`,
      descr: "Объем: 150 мл",
      currentPrice: "678",
      prevPrice: "999",
      image: `{require("../img/category1.png")}`

    },
    {
      itemId: '2',
      title: "Крем коллагеновый",
      descr: "Объем: 50 мл",
      currentPrice: "250",
      prevPrice: "999",
    }
  ]

  return(
    <View style={[styles.container, props.style]}>
      <FlatList
        scrollEnabled="false"
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={ ({item}) => 
          <CartItem 
            title={item.title}
            descr={item.descr}
            currentPrice={item.currentPrice}
            prevPrice={item.prevPrice}
          />}
        keyExtractor={ item => item.itemId}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Сумма заказа</Text>
        <Text style={styles.totals}>867 ₽</Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  totalText: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
    lineHeight: 20,
    color: "#373737",
  },
  totals: {
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    lineHeight: 20,
    color: "#373737",
  }
})