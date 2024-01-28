import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "react-native-svg";
import { MainButton } from "./MainButton";

export const LogoutPopup = () => {
  return(
    <View style={styles.popup}>
      <Text style={styles.title}>Выйти из профиля</Text>
      <Text style={styles.descr}>Вы уверены, что хотите выйти? Чтобы использовать приложение, необходимо будет заново авторизоваться по номеру телефона</Text>
      <View style={styles.btnWrapper}>
        <MainButton title="Отмена"/>
        <MainButton title="Выйти"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: "absolute",
    width: "100%"
  }
})