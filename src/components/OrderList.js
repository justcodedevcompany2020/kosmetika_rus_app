import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { OrderItem } from "./OrderItem";

export const OrderList = () => {
  const DATA = [
    {
      orderId: "1",
      orderStatus: "Новый",
      orderNum: "00493",
      orderAmount: "2",
      orderSum: "678",
      orderDate: "12.12.2022",
    },
    {
      orderId: "2",
      orderStatus: "Подтвержден",
      orderNum: "00492",
      orderAmount: "1",
      orderSum: "234",
      orderDate: "11.12.2022",
    },
    {
      orderId: "3",
      orderStatus: "Отменен",
      orderNum: "00491",
      orderAmount: "5",
      orderSum: "2546",
      orderDate: "05.12.2022",
    },
    {
      orderId: "4",
      orderStatus: "Доставлен",
      orderNum: "00490",
      orderAmount: "3",
      orderSum: "999",
      orderDate: "02.12.2022",
    },
    {
      orderId: "5",
      orderStatus: "Доставлен",
      orderNum: "00489",
      orderAmount: "3",
      orderSum: "2700",
      orderDate: "15.09.2022",
    },
  ];

  return (
    <View>
      {DATA?.map((item) => (
        <OrderItem
          key={item.orderId}
          orderStatus={item.orderStatus}
          orderNum={item.orderNum}
          orderSum={item.orderSum}
          orderAmount={item.orderAmount}
          orderDate={item.orderDate}
        />
      ))}
    </View>
  );
};
