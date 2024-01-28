import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Navbar } from "../components/Navbar";
import { MainButton } from "../components/MainButton";
import ReviewIcon from "../icons/ReviewIcon";
import ReturnIcon from "../icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";

export const FeedbackScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ReturnIcon
          style={{ top: -3, left: 10 }}
          onPress={() => navigation.navigate("Profile")}
        />
        <Text style={styles.title}>Оставить отзыв</Text>
        <Text style={styles.subTitle}>Вам нравится приложение?</Text>
        <Text style={styles.descr}>
          Оставьте отзыв и получите подарок{"\n"}к вашему следующему заказу
        </Text>
        <ReviewIcon />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.subDescr}>
          Вы будете перенаправлены{"\n"}на страницу приложения в AppStore
        </Text>
        <MainButton title="Оставить отзыв" />
      </View>
      <Navbar navigation={navigation} active="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f7f7f7",
    paddingBottom: 110,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  title: {
    marginBottom: 40,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    color: "#373737",
  },
  subTitle: {
    marginBottom: 10,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
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
  subDescr: {
    marginBottom: 25,
    fontFamily: "MontserratLight",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    color: "#71727A",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    width: "100%",
  },
});
