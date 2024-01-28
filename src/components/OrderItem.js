import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const OrderItem = ({orderStatus, orderNum, orderAmount, orderSum, orderDate, orderId}) => {
  const navigation = useNavigation();
  let orderItem = orderAmount > "1" ? "товара" : "товар";

  if(orderStatus === "Отменен") {
    styles.status = {
      paddingHorizontal: 8,
      paddingTop: 2,
      paddingBottom: 4,
      backgroundColor: "#F87676",
      marginBottom: 7,
      borderRadius: 5,
    };
    styles.statusText = {
      fontFamily: "MontserratMedium",
      color: "#fff",
    }
  } else if(orderStatus === "Доставлен"){
    styles.status = {
      backgroundColor: "#9AC6AD",
      paddingHorizontal: 8,
      paddingTop: 2,
      paddingBottom: 4,
      marginBottom: 7,
      borderRadius: 5,
    };
    styles.statusText = {
      fontFamily: "MontserratMedium",
      color: "#fff",
    }
  } else {
    styles.status = {
      marginBottom: 10,
      backgroundColor: "#fff"
    }
    styles.statusText = {
      fontFamily: "MontserratRegular",
      fontSize: 14,
      lineHeight: 20,
      color: "#373737",
      textAlign: "right",
    }
  }

  return(
    <TouchableOpacity 
      style={styles.orederItem}
      onPress={() => navigation.navigate('OrderedItem')}
    >
      <View style={styles.left}>
        <Text style={styles.title}>Заказ №{orderNum}</Text>
        <View style={styles.leftWrapper}>
          <Text style={styles.orderAmount}>
            {orderAmount} {orderItem}
          </Text>
          <Text style={styles.orderSum}>
            {orderSum} ₽
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.status}><Text style={styles.statusText}>{orderStatus}</Text></View>
        <Text style={styles.date}>{orderDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  orederItem: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 10,
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 20,
    color: "#373737",
  },
  leftWrapper: {
    flexDirection: "row",
  },
  orderAmount: {
    marginRight: 35,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 20,
    color: "#8F9098",
  },
  orderSum: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 20,
    color: "#8F9098",
  },
  date: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "right",
    color: "#8F9098",
  }
})
