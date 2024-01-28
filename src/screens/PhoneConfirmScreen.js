import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MainButton } from "../components/MainButton";
import { useNavigation } from "@react-navigation/native";
import { InputSms } from "../components/InputSms";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { ClearLogin, ConfrimCode } from "../services/action/action";

export const PhoneConfirmScreen = ({ route }) => {
  const navigation = useNavigation();
  const [lastNumber, setLastNumber] = useState("");
  const [code, setCode] = useState([]);
  const confirmCode = useSelector((st) => st.confirmCode)

  useEffect(() => {
    if (confirmCode.status) {
      navigation.navigate("SignupThanksScreen");
    }

  }, [confirmCode])


  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const inputs = [firstInput, secondInput, thirdInput, fourthInput];

  function handleChange(index, e) {
    if (index != 4) {
      inputs[index].current.focus();
    }
    let item = [...code]
    item[index - 1] = e
    setCode(item)
  }
  async function handleSubmit() {
    let textCode = ''
    code.map((elm, i) => {
      textCode = textCode + elm
    })
    dispatch(ConfrimCode({ phone: route.params.phone, code: textCode }))
  }
  const dispatch = useDispatch()
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
        <View style={styles.smsTop}>
          <Text style={styles.title}>Введите код из смс</Text>
          <Text style={styles.descr}>
            Четырехзначный код был отправлен{"\n"}на номер +{route.params.phone}
          </Text>
          <View style={styles.inputWrapper}>
            <InputSms
              innerRef={firstInput}
              onChangeText={(e) => handleChange(1, e)}
              keyboardType="phone-pad"
              textAlign="center"
              maxLength={1}
              style={{ marginRight: 10 }}
            />
            <InputSms
              innerRef={secondInput}
              onChangeText={(e) => handleChange(2, e)}
              keyboardType="phone-pad"
              textAlign="center"
              maxLength={1}
              style={{ marginRight: 10 }}
            />
            <InputSms
              innerRef={thirdInput}
              onChangeText={(e) => handleChange(3, e)}
              keyboardType="phone-pad"
              textAlign="center"
              maxLength={1}
              style={{ marginRight: 10 }}
            />
            <InputSms
              innerRef={fourthInput}
              keyboardType="phone-pad"
              textAlign="center"
              maxLength={1}
              onChangeText={(e) => {
                handleChange(4, e)
                Keyboard.dismiss();
              }}
            />
          </View>
          <View>
            <Text style={{ color: 'red', textAlign: "center", marginTop: 20 }}>{confirmCode.error}</Text>
          </View>
        </View>
        <View style={styles.smsBtm}>
          <View>
            <Text style={styles.descrBottom}>Отправить код еще раз</Text>
          </View>
          <MainButton
            title="Продолжить"
            onPress={() => {
              handleSubmit()
              // navigation.navigate("SignupThanksScreen");
            }}
          />
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingBottom: 50,
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
  descrBottom: {
    marginBottom: 20,
    fontFamily: "MontserratMedium",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    color: "#71727A",
  },
  inputWrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smsTop: {
    justifyContent: "center",
    display: "flex",
    flexGrow: 1,
  },
  input: {
    paddingHorizontal: 21,
    paddingVertical: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#C5C6CC",
    borderRadius: 12,
    color: "#9AC6AD",
  },
});
