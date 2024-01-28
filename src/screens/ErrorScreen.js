import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { MainButton } from "../components/MainButton";
import ErrorIcon from "../icons/ErrorIcon";
import CloseBtnIcon from "../icons/CloseBtnIcon";

export const ErrorScreen = () => {
  return(
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <CloseBtnIcon style={{position: "absolute", top: -50, right: 20}}/>
        <ErrorIcon style={{marginBottom: 20,}}/>
        <Text style={styles.subTitle}>Что-то пошло не так...</Text>
        <Text style={styles.descr}>При оформлении вашего заказа произошла ошибка. Попробуйте оформить заказ снова или обратитесь в службу поддержки</Text>
        <View style={styles.orederContainer}>
          <Text style={styles.orederNum}>Написать в службу{'\n'} поддержки:</Text>
          <Text style={styles.orederNumText}>help@plazan.ru</Text>
        </View>
      </View>
      <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 169,
    flex: 1,
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
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
    marginBottom: 88,
    fontFamily: "MontserratRegular",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#71727A",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 80,
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
    marginBottom: 6,
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#373737",
  },
  orederNumText: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#71727A",
  }
})