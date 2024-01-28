import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { MainButton } from "../components/MainButton";
import { OrderSummary } from "../components/OrderSummary";
import { LinearGradient } from "expo-linear-gradient";
import { OrderSummaryItem } from "../components/OrderSummaryItem";
import { useNavigation } from "@react-navigation/native";

export const OrderSummaryScreen = (props) => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <ReturnIcon
            style={{ top: 15, position: "absolute", left: 0 }}
            onPress={() => navigation.navigate("Orders")}
          />
          <Text style={styles.title}>Заказ #00493</Text>
          <LinearGradient
            colors={["#EDDFCB", "#DBC3A0"]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>Доставлен</Text>
          </LinearGradient>
          <Text style={styles.descr}>Информация о заказе</Text>
          <OrderSummary />
          <OrderSummaryItem />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <MainButton title="Повторить заказ" />
      </View>
      <Navbar active="Profile" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  mainContainer: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingBottom: 180,
  },
  title: {
    marginBottom: 6,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    color: "#373737",
  },
  linearGradient: {
    marginBottom: 27,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "MontserratMedium",
    fontSize: 14,
    lineHeight: 20,
    color: "#FFFFFF",
  },
  descr: {
    marginBottom: 12,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    paddingHorizontal: 20,
    bottom: 100,
  },
});
