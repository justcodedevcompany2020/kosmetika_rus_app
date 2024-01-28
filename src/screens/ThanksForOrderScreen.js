import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { MainButton } from "../components/MainButton";
import ThanksForOrderIcon from "../icons/ThanksForOrderIcon";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import { useNavigation } from "@react-navigation/native";

export const ThanksForOrderScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.container, backgroundColor: "#f7f7f7" }}>
      <View style={styles.mainContainer}>
        <CloseBtnIcon
          style={{ zIndex: 5 }}
          onPress={() => navigation.navigate("Main")}
        />
        <ThanksForOrderIcon style={{ marginBottom: 34 }} />
        <Text style={styles.subTitle}>Спасибо за заказ!</Text>
        <Text style={styles.descr}>
          Вскоре с вами свяжется наш менеджер для подтверждения заказа
        </Text>
        <View style={styles.orederContainer}>
          <Text style={styles.orederNum}>0097746</Text>
          <Text style={styles.orederNumText}>номер заказа</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          onPress={() =>
            navigation.navigate("CatalogTab", { screen: "CatalogueScreen" })
          }
          title="Вернуться в каталог"
        />
      </View>
      <Navbar active="Catalogue" activeText="Catalogue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
    width: "100%",
    paddingBottom: 110,
    justifyContent: "space-between",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "center",
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
    marginBottom: 20,
    fontFamily: "MontserratRegular",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#71727A",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  orederContainer: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 23,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#37373733",
    borderRadius: 10,
  },
  orederNum: {
    marginBottom: 3,
    fontFamily: "MontserratBold",
    fontSize: 24,
    lineHeight: 29,
    color: "#373737",
  },
  orederNumText: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#71727A",
  },
});
