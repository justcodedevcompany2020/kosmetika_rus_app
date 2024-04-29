import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { MainButton } from "../components/MainButton";
import { OrderSummary } from "../components/OrderSummary";
import { LinearGradient } from "expo-linear-gradient";
import { OrderSummaryItem } from "../components/OrderSummaryItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { GetSinglOrder } from "../services/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const OrderSummaryScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const id = props.route.params.id;
  const [token, setToken] = useState()
  const [status, setStatus] = useState('')
  const getSinglOrder = useSelector((st) => st.getSinglOrder)
  const GetUser = async () => {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      setToken(token)
    }
  }

  useEffect(() => {
    GetUser()
  }, []);

  useEffect(() => {
    dispatch(GetSinglOrder(token, id))
  }, [token])
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <ReturnIcon
            style={{ top: 15, position: "absolute", left: 0 }}
            onPress={() => navigation.navigate("Orders")}
          />
          <Text style={styles.title}>Заказ #{getSinglOrder.data.id}</Text>
          {getSinglOrder.data?.order_status && <LinearGradient
            colors={["#EDDFCB", "#DBC3A0"]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>{getSinglOrder.data.order_status.name_ru}</Text>
          </LinearGradient>}
          <Text style={styles.descr}>Информация о заказе</Text>
          <OrderSummary data={getSinglOrder.data} />
          {getSinglOrder.data?.products?.map((elm, i) => {
            return <OrderSummaryItem key={i} data={elm} />
          })

          }
        </View>
      </ScrollView>
      {/* <View style={styles.buttonContainer}>
        <MainButton title="Повторить заказ" />
      </View> */}
      <Navbar active="Profile" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  mainContainer: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingBottom: 180,
  },
  title: {
    marginBottom: 6,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    color: "#373737",
  },
  linearGradient: {
    marginBottom: 27,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "MontserratMedium",
    fontSize: 14,
    lineHeight: 20,
    color: "#FFFFFF",
  },
  descr: {
    marginBottom: 12,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    paddingHorizontal: 20,
    bottom: 100,
  },
});
