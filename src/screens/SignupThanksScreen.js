import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import SignupThanksIcon from "../icons/SignupThanksIcon";
import { MainButton } from "../components/MainButton";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { ClearConfirmCode } from "../services/action/errorAction";
import { ClearLogin } from "../services/action/action";

export const SignupThanksScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ClearConfirmCode())
    dispatch(ClearLogin())
  }, [])
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <CloseBtnIcon
        onPress={() => {
          navigation.navigate("Main");
        }}
      />
      <View style={styles.containerTop}>
        <Text style={styles.title}>Спасибо за регистрацию</Text>
        <Text style={styles.descr}>
          Заполните поля, чтобы получить скидку{"\n"}на первый заказ, а также
          получать от{"\n"}нас подарки в ваш День Рождения{" "}
        </Text>
      </View>
      <View style={styles.containerMiidle}>
        <SignupThanksIcon />
      </View>
      <View style={styles.containerBottom}>
        <MainButton
          style={{ width: "100%" }}
          title="Заполнить информацию"
          onPress={() => {
            navigation.navigate("ProfileTab");
          }}
        />
        <Text style={styles.descrBottom}>
          Заполнить и отредактировать информацию{"\n"}можно позже в личном
          кабинете
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    paddingTop: 80,
    flex: 1,
    justifyContent: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  containerMiidle: {
    alignItems: "center",
  },
  containerTop: {
    alignItems: "center",
  },
  containerBottom: {
    width: "100%",
  },
  title: {
    marginBottom: 20,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
  },
  descr: {
    fontFamily: "MontserratRegular",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#71727A",
  },
  descrBottom: {
    fontFamily: "MontserratLight",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
    color: "#71727A",
    marginTop: 22,
  },
});
