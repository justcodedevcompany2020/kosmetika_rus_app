import React from "react";
import { View } from "react-native";
import { OrderItem } from "./OrderItem";

export const OrderList = ({ data }) => {
  return (
    <View>
      {data?.map((item, i) => {
        return <OrderItem
          key={i}
          orderStatus={item.status}
          orderNum={item.id}
          orderSum={Math.round(item.order_sum)}
          orderAmount={item.products_count}
          orderDate={JSON.stringify(item.created_at).slice(1, 11)}
        />
      })}
    </View>
  );
};
