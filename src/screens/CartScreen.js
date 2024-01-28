import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ReturnIcon from "../icons/ReturnIcon";
import { MainButton } from "../components/MainButton";
import { Navbar } from "../components/Navbar";
import { CartList } from "../components/CartList";
import { CartItem } from "../components/CartItem";
import PresentIcon from "../icons/PresentIcon";
import { useNavigation } from "@react-navigation/native";

export const CartScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container, backgroundColor: "#f7f7f7" }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Корзина</Text>
            <ReturnIcon
              style={{ left: 10, top: 0 }}
              onPress={() => navigation.navigate("Main")}
            />
            <CartItem
              title={"Крем лифтинг для\nлица с наносистемой"}
              descr="Объем: 150 мл"
              currentPrice="678"
              prevPrice="999"
            />
            <CartItem
              title="Крем коллагеновый"
              descr="Объем: 50 мл"
              currentPrice="250"
              prevPrice="999"
            />
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Сумма заказа</Text>
              <Text style={styles.totals}>867 ₽</Text>
            </View>
            <View style={styles.presentContainer}>
              <Text style={styles.presentTitle}>Вам подарок за отзыв!</Text>
              <Text style={styles.presentDescr}>
                При подтверждении заказа{"\n"}менеджер сообщит подробности
              </Text>
              <PresentIcon
                style={{ position: "absolute", right: 0, bottom: 0 }}
              />
            </View>
            <MainButton
              title="Оформить заказ"
              onPress={() => navigation.navigate("FirstStep")}
            />
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation} active="Cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  scroll: {
    paddingTop: 30,
    flex: 1,
    width: "100%",
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingBottom: 140,
    // width: 280,
    width: "100%",
    flex: 1,
  },
  title: {
    marginBottom: 50,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    color: "#373737",
    position: "relative",
    top: 5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    paddingHorizontal: 20,
  },
  presentContainer: {
    marginBottom: 43,
    paddingTop: 18,
    paddingBottom: 21,
    paddingRight: 60,
    paddingLeft: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  presentTitle: {
    marginBottom: 10,
    fontFamily: "MontserratBold",
    fontSize: 16,
    lineHeight: 20,
    color: "#373737",
  },
  presentDescr: {
    fontFamily: "MontserratLight",
    fontSize: 13,
    lineHeight: 16,
    color: "#71727A",
  },
  totalContainer: {
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  },
});
