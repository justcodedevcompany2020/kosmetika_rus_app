import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { MainButton } from "../components/MainButton";
import EmptyCartIcon from "../icons/EmptyCartIcon";
import { useNavigation } from "@react-navigation/native";

export const EmptyCartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        {/* <Text style={styles.title}>Корзина</Text> */}
        {/* <ReturnIcon style={{ left: 20, }} /> */}
        <EmptyCartIcon style={{ marginBottom: 44, }} />
        <Text style={styles.subTitle}>В корзине пока ничего нет</Text>
        <Text style={styles.descr}>Перейдите в каталог и добавьте в корзину понравившиеся товары</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton onPress={() =>
          navigation.navigate("CatalogTab", { screen: "CatalogueScreen" })
        } title="Перейти в каталог" />
      </View>
      {/* <Navbar active="Cart" activeText="Cart"/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    width: "100%",
    height: '100%'
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    height: '100%'
  },
  title: {
    marginBottom: 105,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    color: "#373737",
  },
  subTitle: {
    marginBottom: 20,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    color: "#373737",
  },
  descr: {
    maxWidth: "66%",
    fontFamily: "MontserratRegular",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#71727A",
  },
  buttonContainer: {
    position: "absolute",
    bottom: -100,
    width: "100%",
    paddingHorizontal: 20,
  },
})