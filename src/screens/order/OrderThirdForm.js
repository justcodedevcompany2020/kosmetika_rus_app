import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MainButton } from "../../components/MainButton";
import ReturnIcon from "../../icons/ReturnIcon";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export const OrderThirdForm = (props) => {
  const navigation = useNavigation();
  const [data, setData] = useState(props.route?.params?.data)
  const [error, setError] = useState({ address: "", home: "", description: '', posht: '', city: '' })


  useEffect(() => {
    let item = { ...data }
    item.address = ''
    item.home_office = ''
    item.description = ''
    setData(item)
  }, [])


  const HandelChange = (e, name) => {
    let item = { ...data }
    item[name] = e
    setData(item)
  }
  const handelClick = () => {
    let send = true
    let item = { ...error }
    if (data.address.length == 0) {
      item.address = 'error'
      send = false
    }
    else {
      item.address = ''
      send = true
    }
    if (!data.home_office) {
      item.home = 'error'
      send = false
    }
    else {
      item.home = ''
      send = true
    }
    if (!data.city && data.delivery_id == 3) {
      item.city = 'error'
      send = false
    }
    else {
      item.city = ''
      send = true
    }
    if (!data.posht) {
      item.posht = "error"
    }
    else {
      item.posht = ''
    }
    if (data.delivery_id == 1) {
      if (!item.address && !item.home) {
        navigation.navigate("FourthStep", { data })
      }
    }
    else
      if (!item.address && !item.home && !item.city && !item.posht) {
        navigation.navigate("FourthStep", { data })
      }
    setError(item)
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
              ...styles.statusDescrPrev,
              width: "40%",
              textAlign: "left",
            }}
          >
            Получатель
          </Text>
          <Text
            style={{
              ...styles.statusDescrActive,
              width: "30%",
              textAlign: "center",
            }}
          >
            Доставка
          </Text>
          <Text
            style={{ ...styles.statusDescr, width: "30%", textAlign: "right" }}
          >
            Оплата
          </Text>
        </View>

        <Text style={[styles.subTitle, { marginBottom: 25 }]}>Адрес</Text>
        <View style={styles.form}>
          {data.delivery_id == 3 && <TextInput
            style={styles.input}
            placeholder="Город"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
            onChangeText={(e) => HandelChange(e, 'city')}
            borderColor={error.city != "" ? 'red' : 'black'}
          />}
          <TextInput
            style={styles.input}
            placeholder="Улица, дом"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
            onChangeText={(e) => HandelChange(e, 'address')}
            borderColor={error.address ? 'red' : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Квартира/офис"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
            onChangeText={(e) => HandelChange(e, 'home_office')}
            borderColor={error.home ? 'red' : "black"}
          />
          <TextInput
            style={[styles.input, { minHeight: 103, paddingTop: 18 }]}
            placeholder="Комментарий для курьера"
            multiline
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
            onChangeText={(e) => HandelChange(e, 'description')}
            borderColor={error.description && 'red'}
          />
          {data.delivery_id == 3 && <TextInput
            style={[styles.input, { minHeight: 103, paddingTop: 18 }]}
            placeholder="Индекс"
            multiline
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
            onChangeText={(e) => HandelChange(e, 'posht')}
            borderColor={error.posht ? 'red' : "black"}
          />}
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <MainButton
          title="Выбрать способ оплаты"
          onPress={() => handelClick()}
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
    paddingTop: 30,
  },
  scroll: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 35,
    fontFamily: "MontserratBold",
    fontSize: 20,
    textAlign: "center",
    color: "#373737",
    top: 4,
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
    width: "67%",
    borderRadius: 100,
  },
  statusDescrContainer: {
    marginBottom: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  statusDescrPrev: {
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#9AC6AD",
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
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "MontserratRegular",
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
