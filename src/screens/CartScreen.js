import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ReturnIcon from "../icons/ReturnIcon";
import { MainButton } from "../components/MainButton";
import { Navbar } from "../components/Navbar";
import { CartList } from "../components/CartList";
import { CartItem } from "../components/CartItem";
import PresentIcon from "../icons/PresentIcon";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromBasketAction, AddToBasketAction, GetBasketAction, ClearValidOrder, MinusFromBassket } from '../services/action/action'
import { EmptyCartScreen } from "./EmptyCartScreen";

export const CartScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { token } = useSelector((st) => st.static)
  const getBasket = useSelector((st) => st.getBasket)
  const [basket, setBasket] = useState({})
  const validOrder = useSelector((st) => st.validOrder)


  function totalCost() {
    let sum = 0;
    basket?.data?.forEach((product) => {

      const productPrice = Math.round(product.product.price - product.product.price * (product.product.discount / 100));
      sum += (product.product_count * productPrice);
    });
    return sum;
  }

  const addProductCount = (id) => {
    let item = { ...basket }
    let index = item.data.findIndex((elm) => elm.product.id === id)
    if (item.data[index].product.product_count - 1 >= item.data[index].product_count) {
      item.data[index].product_count = +item.data[index].product_count + 1
    }
    dispatch(AddToBasketAction({ product_id: id }, token))
    setBasket(item)
  }
  const MinusProductCount = (id) => {
    let item = { ...basket }
    let index = item.data.findIndex((elm) => elm.product.id === id)
    item.data[index].product_count = +item.data[index].product_count - 1
    if (!item.data[index].product_count) {
      item.data.splice(index, 1)
      dispatch(RemoveFromBasketAction({ product_id: id }, token))
    }
    else {
      dispatch(MinusFromBassket({ product_id: id }, token))
    }
    setBasket(item)
  }

  const RemoveFromBasket = (id, index) => {
    let item = { ...basket }
    item.data.splice(index, 1)
    dispatch(RemoveFromBasketAction({ product_id: id }, token))
    setBasket(item)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(GetBasketAction(token))
      dispatch(ClearValidOrder())
    });
    return unsubscribe;
  }, [navigation]);


  useEffect(() => {
    if (getBasket.data) {
      setBasket(getBasket.data)
    }
  }, [getBasket])

  const ValidOrder = () => {
    dispatch(ValidORderAction(token))
  }


  useEffect(() => {
    if (validOrder?.status) {
      navigation.navigate("GeneralInfo")
    }
  }, [validOrder])
  return (
    <View style={{ ...styles.container, backgroundColor: "#f7f7f7" }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Корзина</Text>
            <ReturnIcon
              style={{ left: 10, top: 0 }}
              onPress={() => navigation.navigate("Main")}
            />
            {basket?.data?.map((product, index) => {
              let price = Math.round(product.product.price - (product.product.price * product.product.discount / 100))
              return <CartItem
                key={index}
                image={product?.product?.photos[0]?.photo}
                RemoveFromBasket={() => RemoveFromBasket(product.product.id, index)}
                count={product.product_count}
                addProductCount={() => addProductCount(product.product.id)}
                MinusProductCount={() => MinusProductCount(product.product.id)}
                title={product.product.name}
                descr={`Объем: ${product.product.volume} мл`}
                currentPrice={price}
                prevPrice={product.product.discount > 0 && product.product.price}
              />
            })}
            {basket?.data?.length == 0 &&
              <EmptyCartScreen />
            }
            {basket?.data?.length != 0 && <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Сумма заказа</Text>
              <Text style={styles.totals}>{totalCost()} ₽</Text>
            </View>}
            {basket?.data?.length != 0 && <View style={styles.presentContainer}>
              <Text style={styles.presentTitle}>Вам подарок за отзыв!</Text>
              <Text style={styles.presentDescr}>
                При подтверждении заказа{"\n"}менеджер сообщит подробности
              </Text>
              <PresentIcon
                style={{ position: "absolute", right: 0, bottom: 0 }}
              />
            </View>}
            {basket?.data?.length != 0 && <MainButton
              title="Оформить заказ"
              onPress={() => navigation.navigate("FirstStep")}
            />}
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation} active="Cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  scroll: {
    paddingTop: 30,
    flex: 1,
    width: "100%",
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingBottom: 140,
    // width: 280,
    width: "100%",
    flex: 1,
  },
  title: {
    marginBottom: 50,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    color: "#373737",
    position: "relative",
    top: 5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    paddingHorizontal: 20,
  },
  presentContainer: {
    marginBottom: 43,
    paddingTop: 18,
    paddingBottom: 21,
    paddingRight: 60,
    paddingLeft: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  presentTitle: {
    marginBottom: 10,
    fontFamily: "MontserratBold",
    fontSize: 16,
    lineHeight: 20,
    color: "#373737",
  },
  presentDescr: {
    fontFamily: "MontserratLight",
    fontSize: 13,
    lineHeight: 16,
    color: "#71727A",
  },
  totalContainer: {
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalText: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
    lineHeight: 20,
    color: "#373737",
  },
  totals: {
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    lineHeight: 20,
    color: "#373737",
  },
});
