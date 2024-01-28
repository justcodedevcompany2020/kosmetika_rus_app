import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ReturnIcon from "../../icons/ReturnIcon";
import { MainButton } from "../../components/MainButton";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { OrderItemFinal } from "../../components/OrderItemFinal";
import { PaymentMethod } from "../../components/PaymentMethod";

export const OrderFourthForm = (props) => {
  const [paymentOption, setPaymentOption] = useState("card");
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <TouchableOpacity
            style={{ top: -4, left: 0, zIndex: 10 }}
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
                width: "33%",
                textAlign: "left",
              }}
            >
              Получатель
            </Text>
            <Text
              style={{
                ...styles.statusDescrPrev,
                width: "33%",
                textAlign: "center",
              }}
            >
              Доставка
            </Text>
            <Text
              style={{
                ...styles.statusDescrActive,
                width: "33%",
                textAlign: "right",
              }}
            >
              Оплата
            </Text>
          </View>
          <Text style={[styles.subTitle, { marginBottom: 25 }]}>
            Выберите способ оплаты
          </Text>

          <PaymentMethod
            title="Банковской картой, онлайн"
            text="Оплатите заказ в течение 30 минут после оформления"
            onPress={() => setPaymentOption("card")}
            active={paymentOption == "card"}
          />
          <PaymentMethod
            style={{ marginBottom: 47 }}
            title="Оплата при получении"
            text="Оплатить заказ можно наличными курьеру"
            onPress={() => setPaymentOption("courier")}
            active={paymentOption == "courier"}
          />

          <Text style={[styles.subTitle, { marginBottom: 25 }]}>
            Проверьте детали заказа
          </Text>
          <View style={styles.detailsContainer}>
            <Text style={{ ...styles.detailsTitle, marginTop: 0 }}>
              Получатель
            </Text>
            <Text style={styles.detailsText}>Екатерина Иванова</Text>
            <Text style={styles.detailsText}>+7 (938) 228-33-44</Text>
            <Text style={{ ...styles.detailsText, marginBottom: 0 }}>
              katty.kat@mail.ru
            </Text>

            <Text style={styles.detailsTitle}>Способ доставки</Text>
            <Text style={{ ...styles.detailsText, marginBottom: 0 }}>
              Доставка курьером
            </Text>

            <Text style={styles.detailsTitle}>Адрес доставки</Text>
            <Text style={{ ...styles.detailsText, marginBottom: 0 }}>
              г. Москва, Тверская ул., 39/3, кв. 50
            </Text>

            <Text style={styles.detailsTitle}>Оплачен</Text>
            <View style={styles.detailsBottomLine}>
              <Text style={styles.detailsText}>Товаров в заказе</Text>
              <Text style={styles.detailsText}>1</Text>
            </View>
            <View style={styles.detailsBottomLine}>
              <Text style={styles.detailsText}>Товары на сумму</Text>
              <Text style={styles.detailsText}>678 ₽</Text>
            </View>
            <View style={styles.detailsBottomLine}>
              <Text style={styles.detailsText}>Скидка</Text>
              <Text style={styles.detailsText}>48 ₽</Text>
            </View>
            <View style={styles.detailsBottomLine}>
              <Text style={styles.detailsText}>Доставка</Text>
              <Text style={styles.detailsText}>250 ₽</Text>
            </View>
            <View style={styles.detailsBottomLine}>
              <Text style={styles.detailsText}>Итого</Text>
              <Text style={styles.detailsText}>928 ₽</Text>
            </View>
          </View>

          {/* <View style={{ width: 280 }}> */}
          <OrderItemFinal
            title={`Крем лифтинг для лица\nс наносистемой`}
            descr="Объем: 150 мл"
            amount="1"
            currentPrice="678"
            prevPrice="999"
          />
          {/* </View> */}
          <MainButton
            title="Оформить  заказ"
            onPress={() => navigation.navigate("ThanksForOrder")}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  inner: {
    paddingTop: 30,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scroll: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 35,
    fontFamily: "MontserratBold",
    fontSize: 20,
    textAlign: "center",
    color: "#373737",
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
    width: "100%",
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
  detailsContainer: {
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
  },
  detailsTitle: {
    marginBottom: 12,
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#373737",
    marginTop: 25,
  },
  detailsText: {
    marginBottom: 8,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
  detailsBottomLine: {
    width: "100%",
    flexDirection: "row",
    // alignItems: "100%",
    justifyContent: "space-between",
  },
  mb: {
    marginBottom: 47,
  },
});
