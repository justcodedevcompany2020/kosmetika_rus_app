import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { MainButton } from "../../components/MainButton";
import ReturnIcon from "../../icons/ReturnIcon";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import MaskInput from "react-native-mask-input";
import { useDispatch, useSelector } from "react-redux";
import { DeliveryType, GetAuthUser, GetCityes, GetMyOrderAction, GetPaymentType } from "../../services/action/action";

export const OrderFirstForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { token } = useSelector((st) => st.static)
  const getUser = useSelector((st) => st.getUser)
  useEffect(() => {
    dispatch(GetCityes())
    dispatch(DeliveryType())
    dispatch(GetPaymentType())
    dispatch(GetMyOrderAction(token))
    dispatch(GetAuthUser(token))
  }, [dispatch])
  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    let item = { ...data }
    item.name = getUser.data?.user?.name
    item.email = getUser.data?.user?.email
    item.surname = getUser.data?.user?.surname
    item.phone = getUser.data?.user?.phone

    setData(item)
  }, [getUser])

  const [error, setEorrr] = useState({
    name: '',
    surname: "",
    email: '',
    phone: ''
  })

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    return (false)
  }

  const HandelChange = (e, name) => {
    let item = { ...data }
    item[name] = e
    setData(item)
  }

  const HandelPress = () => {
    let send = true
    let item = { ...error }
    if (data.name == '') {
      item.name = 'error'
      send = false
    }
    else {
      item.name = ''
      send = true
    }

    if (data.surname == '') {
      item.surname = 'error'
      send = false
    }
    else {
      item.surname = ''
      send = true
    }

    if (!ValidateEmail(data.email)) {
      item.email = 'error'
      send = false
    }
    else {
      item.email = ''
      send = true
    }
    if (send) {
      navigation.navigate("SecondStep", { data })
      // navigation.navigate("LocationInfo", { data })
    }
    setEorrr(item)
  }

  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity
          style={{ zIndex: 10 }}
          onPress={() => navigation.goBack()}
        >
          <ReturnIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Оформление</Text>
        <View style={styles.status}>
          <LinearGradient
            colors={["#C2ECD4", "#9AC6AD"]}
            style={styles.statusActive}
          ></LinearGradient>
        </View>
        <View style={styles.statusDescrContainer}>
          <Text
            style={{
              ...styles.statusDescrActive,
              width: "40%",
              textAlign: "left",
            }}
          >
            Получатель
          </Text>
          <Text
            style={{ ...styles.statusDescr, width: "30%", textAlign: "center" }}
          >
            Доставка
          </Text>
          <Text
            style={{ ...styles.statusDescr, width: "30%", textAlign: "right" }}
          >
            Оплата
          </Text>
        </View>
        <Text style={styles.subTitle}>Данные получателя</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Имя"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
            onChangeText={(e) => HandelChange(e, 'name')}
            value={data.name}
            borderColor={error.name != '' && 'red'}
          />
          <TextInput
            style={styles.input}
            placeholder="Фамилия"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
            borderColor={error.surname != '' && 'red'}
            onChangeText={(e) => HandelChange(e, 'surname')}
            value={data.surname}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            inputMode="email"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
            borderColor={error.email != '' && 'red'}
            onChangeText={(e) => HandelChange(e, 'email')}
            value={data.email}
          />
          <MaskInput
            style={styles.input}
            placeholder="Телефон"
            keyboardType="phone-pad"
            // inputMode="tel"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
            value={data.phone}
            onChangeText={(masked, unmasked) => {
              HandelChange(unmasked, 'phone')
              // setPhone(masked); // you can use the unmasked value as well
              if (unmasked.length == 10) {
                Keyboard.dismiss();
              }
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
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 20 }}>
        <MainButton
          title="Выбрать способ доставки"
          onPress={() =>
            HandelPress()
          }
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingBottom: 40,
    paddingTop: 30
  },
  scroll: {
    // flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    height: '100%',
  },
  title: {
    marginBottom: 35,
    fontFamily: "MontserratBold",
    fontSize: 20,
    textAlign: "center",
    color: "#373737",
    top: 5,
  },
  status: {
    marginBottom: 16,
    width: "100%",
    height: 5,
    backgroundColor: "rgba(31, 32, 36, 0.15)",
    borderRadius: 100,
  },
  statusActive: {
    height: "100%",
    width: "33%",
    borderRadius: 100,
  },
  statusDescrContainer: {
    marginBottom: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  statusDescrActive: {
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#373737",
  },
  statusDescr: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 17,
    color: "rgba(rgba(113, 114, 122, 0.5)",
  },
  subTitle: {
    marginBottom: 25,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#373737",
  },
  form: {
    width: "100%",
  },
  input: {
    marginBottom: 15,
    paddingHorizontal: 24,
    paddingVertical: 18,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.15)",
    borderRadius: 10,
    fontFamily: "MontserratRegular",
    fontSize: 16,
    lineHeight: 20,
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
