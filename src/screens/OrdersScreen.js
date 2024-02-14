import React, { useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ReturnIcon from "../icons/ReturnIcon";
import { OrderList } from "../components/OrderList";
import { Navbar } from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { GetMyOrderAction } from "../services/action/action";
import { EmptyCartScreen } from './EmptyCartScreen'

export const OrdersScreen = (props) => {
  const navigation = useNavigation();
  const { token } = useSelector((st) => st.static)
  const dispatch = useDispatch()
  const getMyOrder = useSelector((st) => st.getMyOrder)
  useEffect(() => {
    dispatch(GetMyOrderAction(token))
  }, [dispatch])
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={{ flex: 1 }}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.containerTop}>
            <Text style={styles.title}>Мои заказы</Text>
            <ReturnIcon
              style={{ top: -3 }}
              onPress={() => navigation.navigate("Profile")}
            />
            {getMyOrder?.data?.data == 0 &&
              <EmptyCartScreen />
            }
            <OrderList data={getMyOrder?.data?.data} />
          </View>
        </View>
      </ScrollView>
      <Navbar active="Profile" activeText="Profile" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 120,
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  containerTop: {
    position: "relative",
    width: "100%",
  },
  title: {
    marginBottom: 52,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#373737",
  },
});
