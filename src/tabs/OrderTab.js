import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrderFirstForm } from "../screens/order/OrderFirstForm";
import { OrderSecondForm } from "../screens/order/OrderSecondForm";
import { OrderThirdForm } from "../screens/order/OrderThirdForm";
import { OrderFourthForm } from "../screens/order/OrderFourthForm";
import { CartScreen } from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export const OrderTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
      <Stack.Screen name="FirstStep" component={OrderFirstForm}></Stack.Screen>
      <Stack.Screen
        name="SecondStep"
        component={OrderSecondForm}
      ></Stack.Screen>
      <Stack.Screen name="ThirdStep" component={OrderThirdForm}></Stack.Screen>
      <Stack.Screen
        name="FourthStep"
        component={OrderFourthForm}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
