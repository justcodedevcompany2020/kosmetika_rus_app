import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { OrderItem } from "./OrderItem";

export const OrderList = ({ data }) => {
  const DATA = [


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
      {data?.map((item, i) => {
        return <OrderItem
          key={i}
          orderStatus={item.status}
          orderNum={item.id}
          orderSum={item.order_sum}
          orderAmount={item.products_count}
          orderDate={JSON.stringify(item.created_at).slice(1, 11)}
        />
      })}
    </View>
  );
};
