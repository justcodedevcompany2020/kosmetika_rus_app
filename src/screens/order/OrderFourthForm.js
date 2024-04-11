import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ReturnIcon from "../../icons/ReturnIcon";
import { MainButton } from "../../components/MainButton";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { OrderItemFinal } from "../../components/OrderItemFinal";
import { PaymentMethod } from "../../components/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { AddNewOrder, ClearValidOrder, GetBasketAction } from "../../services/action/action";

export const OrderFourthForm = (props) => {
  const [paymentMethod, setPaymentMethod] = useState(2);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const getUser = useSelector((st) => st.getUser)
  const getMyOrder = useSelector((st) => st.getMyOrder)

  const addNewOrder = useSelector((st) => st.addNewOrder)

  const getPaymentType = useSelector((st) => st.getPaymentType)
  const getBasket = useSelector((st) => st.getBasket)
  const { token } = useSelector((st) => st.static)


  const [paymentData, setPaymentData] = useState([])

  useEffect(() => {
    dispatch(ClearValidOrder())
  }, [])

  useEffect(() => {
    setPaymentData(getPaymentType?.data)
  }, [getPaymentType.data])

  const [data, setData] = useState(props.route?.params?.data)

  useEffect(() => {
    let item = { ...data }
    item.payment_id = 1
    setData(item)
  }, [])

  const GetCount = (data) => {
    let count = 0
    data?.map((elm, i) => {
      count += +elm.product_count
    })
    return count
  }

  const GetPrice = (data1, end) => {
    let price = 0
    data1?.map((elm, i) => {
      price += (+elm.product_count * Math.round(elm.product.price - (elm.product.price * elm.product.discount / 100)))
    })
    if (!end) {
      return Math.round(price)
    }
    else {
      if (data.delivery_id == 2) {
        return Math.round(price)
      }
      return Math.round(price) + 250
    }
  }

  const handelPress = () => {
    let item = { ...data }
    item.payment_id = 2
    item.platform_id = 1
    item.phone = getUser.data.user?.phone
    item.order_sum = GetPrice(getBasket.data.data, true)
    dispatch(AddNewOrder(item, token))
  }

  useEffect(() => {
    if (addNewOrder?.status) {
      navigation.navigate("ThanksForOrder")
    }
  }, [addNewOrder])

  useEffect(() => {
    dispatch(GetBasketAction(token))
  }, [])
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <TouchableOpacity
            style={{ top: -4, left: 0, zIndex: 10 }}
            onPress={() => navigation.goBack()}
          >
            <ReturnIcon />
          </TouchableOpacity>
          <Text style={styles.title}>Оформление</Text>
          <View style={styles.status}>
            <LinearGradient
              colors={["#C2ECD4", "#9AC6AD"]}
              style={styles.statusActive}
            ></LinearGradient>
          </View>
          <View style={styles.statusDescrContainer}>
            <Text
              style={{
                ...styles.statusDescrPrev,
                width: "33%",
                textAlign: "left",
              }}
            >
              Получатель
            </Text>
            <Text
              style={{
                ...styles.statusDescrPrev,
                width: "33%",
                textAlign: "center",
              }}
            >
              Доставка
            </Text>
            <Text
              style={{
                ...styles.statusDescrActive,
                width: "33%",
                textAlign: "right",
              }}
            >
              Оплата
            </Text>
          </View>
          <Text style={[styles.subTitle, { marginBottom: 25 }]}>
            Выберите способ оплаты
          </Text>
          {paymentData?.map((elm, i) => {
            if (data.delivery_id == 3) {
              if (elm.id != 2)
                return <PaymentMethod
                  title={elm.name}
                  text={elm.description}
                  onPress={() => setPaymentMethod(elm.id)}
                  active={paymentMethod == 2}
                />
            }
            else {
              return <PaymentMethod
                title={elm.name}
                text={elm.description}
                onPress={() => setPaymentMethod(elm.id)}
                active={paymentMethod == elm.id}
              />
            }

          })}

          <Text style={[styles.subTitle, { marginBottom: 25 }]}>
            Проверьте детали заказа
          </Text>
          <View style={styles.detailsContainer}>
            <Text style={{ ...styles.detailsTitle, marginTop: 0 }}>
              Получатель
            </Text>
            <Text style={styles.detailsText}>{data.name}</Text>
            <Text style={styles.detailsText}>{data.phone}</Text>
            <Text style={{ ...styles.detailsText, marginBottom: 0 }}>
              {data.email}
            </Text>

            <Text style={styles.detailsTitle}>Способ доставки</Text>
            <Text style={{ ...styles.detailsText, marginBottom: 0 }}>
              {data.delevery_name ? data.delevery_name : 'Доставка курьером'}

            </Text>

            {(data.city_name || data.address || data.home_office) && <Text style={styles.detailsTitle}>Детали заказа</Text>}
            <Text style={{ ...styles.detailsText, marginBottom: 0 }}>
              {data.city_name} {data.address} {data.home_office}  {data.posht}
            </Text>

            <Text style={styles.detailsTitle}>Сумма заказа</Text>
            <View style={styles.detailsBottomLine}>
              <Text style={styles.detailsText}>Товаров в заказе</Text>
              <Text style={styles.detailsText}>{GetCount(getBasket.data?.data)}</Text>
            </View>
            <View style={styles.detailsBottomLine}>
              <Text style={styles.detailsText}>Товары на сумму</Text>
              <Text style={styles.detailsText}>{GetPrice(getBasket.data.data)} ₽</Text>
            </View>
            {data.delivery_id == 2 ?
              <View style={styles.detailsBottomLine}>
                <Text style={styles.detailsText}>Доставка</Text>
                <Text style={styles.detailsText}>бесплатная доставка</Text>
              </View> :
              <View style={styles.detailsBottomLine}>
                <Text style={styles.detailsText}>Доставка</Text>
                <Text style={styles.detailsText}> 250 ₽</Text>
              </View>}
            <View style={styles.detailsBottomLine}>
              <Text style={styles.detailsText}>Итого</Text>
              <Text style={styles.detailsText}>{GetPrice(getBasket.data.data, true)} ₽</Text>
            </View>
          </View>

          {/* <View style={{ width: 280 }}> */}
          {getBasket.data?.data?.map((elm, i) => {
            return <OrderItemFinal
              photo={elm.product.photos[0].photo}
              title={elm.product?.name}
              descr={elm.product.volume}
              amount={elm.product_count}
              currentPrice={Math.round(Math.round(elm.product.price - (elm.product.price * elm.product.discount / 100)))}
              prevPrice={elm.product.discount > 0 && elm.product?.price}
            />
          })
          }

          {/* </View> */}
          <MainButton
            title="Оформить  заказ"
            onPress={() => handelPress()}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  inner: {
    paddingTop: 30,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scroll: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 35,
    fontFamily: "MontserratBold",
    fontSize: 20,
    textAlign: "center",
    color: "#373737",
  },
  status: {
    marginBottom: 16,
    width: "100%",
    height: 5,
    backgroundColor: "rgba(31, 32, 36, 0.15)",
    borderRadius: 100,
  },
  statusActive: {
    height: "100%",
    width: "100%",
    borderRadius: 100,
  },
  statusDescrContainer: {
    marginBottom: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  statusDescrPrev: {
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#9AC6AD",
  },
  statusDescrActive: {
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#373737",
  },
  statusDescr: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 17,
    color: "rgba(rgba(113, 114, 122, 0.5)",
  },
  subTitle: {
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#373737",
  },
  detailsContainer: {
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
  },
  detailsTitle: {
    marginBottom: 12,
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#373737",
    marginTop: 25,
  },
  detailsText: {
    marginBottom: 8,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
  detailsBottomLine: {
    width: "100%",
    flexDirection: "row",
    // alignItems: "100%",
    justifyContent: "space-between",
  },
  mb: {
    marginBottom: 47,
  },
});
