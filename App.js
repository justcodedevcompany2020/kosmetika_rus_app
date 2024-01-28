import * as SplashScreen from "expo-splash-screen";
import { useState, useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RegisterTab } from "./src/tabs/RegisterTab";
import { OrderTab } from "./src/tabs/OrderTab";
import { ProfileTab } from "./src/tabs/ProfileTab";
import { CatalogTab } from "./src/tabs/CatalogTab";
import { FeedbackScreen } from "./src/screens/FeedbackScreen";
import { PromoScreen } from "./src/screens/PromoScreen";
import { MainScreen } from "./src/screens/MainScreen";
import { ThanksForOrderScreen } from "./src/screens/ThanksForOrderScreen";
import { LinearGradient } from "expo-linear-gradient";
import { Provider, useSelector, } from 'react-redux';
import { store } from "./src/services/reducer/configStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratLight: require("./src/fonts/Montserrat-Light.ttf"),
    MontserratRegular: require("./src/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("./src/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("./src/fonts/Montserrat-Bold.ttf"),
    MontserratSemiBold: require("./src/fonts/Montserrat-SemiBold.ttf"),
    MontserratExtraBold: require("./src/fonts/Montserrat-ExtraBold.ttf"),
  });
  const [initialScreen, setInitialScreen] = useState("RegisterTab");

  const GetUser = async () => {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      // setToken(token)
      setInitialScreen('ProfileTab')
    }
  }

  useEffect(() => {
    GetUser()
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <LinearGradient colors={["#F7F7F7", "#FFFFFF"]}>
          <StatusBar style="auto"></StatusBar>
          <SafeAreaView edges={["top", "right", "left"]}>
            <View onLayout={onLayoutRootView} style={styles.container}>
              <NavigationContainer onLayout={onLayoutRootView}>
                <Tab.Navigator
                  screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                  }}
                  initialRouteName={initialScreen}
                  backBehavior="none"
                >
                  <Tab.Screen
                    options={{ tabBarStyle: { display: "none" } }}
                    name="RegisterTab"
                    component={RegisterTab}
                  ></Tab.Screen>
                  <Tab.Screen
                    options={{ tabBarStyle: { display: "none" } }}
                    name="OrderTab"
                    component={OrderTab}
                  ></Tab.Screen>
                  <Tab.Screen
                    options={{ tabBarStyle: { display: "none" } }}
                    name="ProfileTab"
                    component={ProfileTab}
                  ></Tab.Screen>
                  <Tab.Screen
                    name="Main"
                    component={MainScreen}
                    options={{ tabBarStyle: { display: "none" } }}
                  />
                  <Tab.Screen
                    name="CatalogTab"
                    component={CatalogTab}
                    options={{ tabBarStyle: { display: "none" } }}
                  />
                  {/* <Tab.Screen
                  name="Promo"
                  component={PromoScreen}
                  options={{ tabBarStyle: { display: "none" } }}
                /> */}
                  <Tab.Screen
                    name="ThanksForOrder"
                    options={{ tabBarStyle: { display: "none" } }}
                    component={ThanksForOrderScreen}
                  ></Tab.Screen>
                </Tab.Navigator>
              </NavigationContainer>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  scroll: {
    display: "flex",
    backgroundColor: "#fff",
    height: "100%",
  },
  container: {
    height: "100%",
    backgroundColor: "white",
  },
});
