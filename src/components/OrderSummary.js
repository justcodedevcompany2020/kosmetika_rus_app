import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const OrderSummary = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text style={styles.subTitle}>Екатерина Иванова</Text>
        <Text style={styles.subDescr}>+7 (938) 228-33-44</Text>
        <Text style={styles.subDescr}>katty.kat@mail.ru</Text>
      </View>
      <View style={styles.deliveryMet}>
        <Text style={styles.subTitle}>Способ доставки</Text>
        <Text style={styles.subDescr}>Доставка курьером</Text>
      </View>
      <View style={styles.deliveryAddress}>
        <Text style={styles.subTitle}>Адрес доставки</Text>
        <Text style={styles.subDescr}>
          г. Москва, Тверская ул., 39/3, кв. 50
        </Text>
      </View>
      <View style={styles.payment}>
        <Text style={styles.subTitle}>Оплачен</Text>
        <View style={styles.subItem}>
          <Text style={styles.subDescr}>Товаров в заказе</Text>
          <Text style={styles.subDescr}>1</Text>
        </View>
        <View style={styles.subItem}>
          <Text style={styles.subDescr}>Товары на сумму</Text>
          <Text style={styles.subDescr}>678 ₽</Text>
        </View>
        <View style={styles.subItem}>
          <Text style={styles.subDescr}>Доставка</Text>
          <Text style={styles.subDescr}>250 ₽</Text>
        </View>
        <View style={styles.subItem}>
          <Text style={styles.subDescr}>Итого</Text>
          <Text style={styles.subDescr}>928 ₽</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingTop: 15,
    paddingBottom: 12,
    paddingHorizontal: 20,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  user: {
    marginBottom: 17,
  },
  deliveryMet: {
    marginBottom: 17,
  },
  deliveryAddress: {
    marginBottom: 17,
  },
  subTitle: {
    marginBottom: 12,
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#373737",
  },
  subDescr: {
    marginBottom: 8,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
  subItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
