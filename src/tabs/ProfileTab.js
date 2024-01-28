import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens/ProfileScreen";
import { UserPrivateFormScreen } from "../screens/UserPrivateFormScreen";
import { OrdersScreen } from "../screens/OrdersScreen";
import { OrderSummaryScreen } from "../screens/OrderSummaryScreen";
import { FeedbackScreen } from "../screens/FeedbackScreen";

import { InfoScreen } from "../screens/InfoScreen";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SetToken } from "../services/action/successAction";

const Stack = createNativeStackNavigator();

export const ProfileTab = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    SetTokens()
  }, [])
  const SetTokens = async () => {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      dispatch(SetToken(token))
    }
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PersonalInfo" component={UserPrivateFormScreen} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="OrderedItem" component={OrderSummaryScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
    </Stack.Navigator>
  );
};
