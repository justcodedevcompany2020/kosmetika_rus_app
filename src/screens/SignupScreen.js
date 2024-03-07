import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MainButton } from "../components/MainButton";
import { useNavigation } from "@react-navigation/native";
import MaskInput from "react-native-mask-input";
import { useDispatch } from "react-redux";
import { LoginAction } from "../services/action/action";
import { useSelector, } from 'react-redux';
import { useEffect } from "react";



export const SignupScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState(" ");
  const dispatch = useDispatch()
  const login = useSelector((st) => st.login)
  useEffect(() => {
    if (login.status) {
      navigation.navigate("PhoneConfirmScreen", { phone });
    }
  }, [login]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
        <View style={styles.registerTop}>
          <Text style={styles.title}>Регистрация</Text>
          <Text style={styles.descr}>
            Укажите номер телефона,{"\n"}на который будет отправлен{"\n"}код
            подтверждения
          </Text>
          <MaskInput
            style={styles.input}
            textAlign="center"
            placeholder="Номер телефона"
            keyboardType="phone-pad"
            // inputMode="tel"
            value={phone}
            onChangeText={(masked, unmasked) => {
              setPhone(masked); // you can use the unmasked value as well
            }}
            mask={[
              "7",
              " (",
              /\d/,
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
          />
          <MainButton
            title="Отправить код"
            onPress={() => {
              dispatch(LoginAction({ phone: phone }))
            }}
          />
        </View>
        <View>
          <Text style={styles.descrBottom}>
            Нажимая кнопку, вы даете согласие{"\n"}на обработку моих
            персональных данных
          </Text>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  registerTop: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 20,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
  },
  descr: {
    marginBottom: 29,
    fontFamily: "MontserratRegular",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#71727A",
  },
  input: {
    fontFamily: "MontserratRegular",
    marginBottom: 15,
    paddingVertical: 18,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "rgba(55, 55, 55, 0.15)",
    backgroundColor: "#fff",
    fontSize: 16,
    lineHeight: 20,
  },
  descrBottom: {
    fontFamily: "MontserratRegular",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    color: "rgba(113, 114, 122, 0.6)",
  },
});
