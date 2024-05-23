import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "react-native-svg";
import { MainButton } from "./MainButton";
import { useDispatch } from "react-redux";
import { LogoutAction } from "../services/action/action";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LogoutPopup = ({ close }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation();

  const [token, setToken] = useState()
  const GetUser = async () => {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      setToken(token)
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      GetUser()
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.popup}>
      <View style={styles.popup2}>
        <Text style={styles.title}>Выйти из профиля</Text>
        <Text style={styles.descr}>Вы уверены, что хотите выйти? Чтобы использовать приложение, необходимо будет заново авторизоваться по номеру телефона</Text>
        <View style={styles.btnWrapper}>
          <MainButton onPress={() => close()} title="Отмена" />
          <MainButton onPress={() => {
            dispatch(LogoutAction(token))
            navigation.navigate("RegisterTab", {
              screen: "SignUp"
            })
          }} title="Выйти" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    zIndex: 999,
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    width: '100%',
    height: '100%',
    borderWidth: 1,
    padding: 40,
    justifyContent: 'center'
  },
  popup2: {
    padding: 20,
    gap: 20,
    margin: 'auto',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  title: {
    textAlign: 'center',
  },
  btnWrapper: {
    gap: 20
  }
})