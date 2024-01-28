import React from "react";
import {  } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignupScreen } from "../screens/SignupScreen";
import {PhoneConfirmScreen} from "../screens/PhoneConfirmScreen";
import { SignupThanksScreen } from "../screens/SignupThanksScreen";
import { UserPrivateFormScreen } from "../screens/UserPrivateFormScreen";

const Stack = createNativeStackNavigator();


export const RegisterTab = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="SignUp" 
        component={SignupScreen}>
      </Stack.Screen>
      <Stack.Screen 
        name="PhoneConfirmScreen"
        component={PhoneConfirmScreen}>
      </Stack.Screen>
      <Stack.Screen
        options={{ gestureEnabled: false }}
        name="SignupThanksScreen"
        component={SignupThanksScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ gestureEnabled: false }}
        name="UserPrivateFormScreen"
        component={UserPrivateFormScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};