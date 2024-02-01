import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MainButton } from "../../components/MainButton";
import { LinearGradient } from "expo-linear-gradient";
import ReturnIcon from "../../icons/ReturnIcon";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { RadioSelect } from "../../components/RadioSelect";
import { useDispatch, useSelector } from "react-redux";
import { AddNewOrder, ClearValidOrder } from "../../services/action/action";
import { CityModal } from "../../components/CityModal";

// const cities = [
//   "г. Москва",
//   "г. Санкт-Петербург",
//   "г. Казань",
//   "г. Новосибирск",
//   "г. Екатеринбург",
//   "г. Уфа",
// ];

export const OrderSecondForm = (props) => {
  const cities = useSelector((st) => st.getCityes)
  const [error, setError] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [deliveryMethod, setDeliveryMethod] = useState(1);
  const [deliveryType, setDeliveryType] = useState([])
  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState(2);
  const [selectedCity, setSelectedCity] = useState({})
  const [errorC, setErrorC] = useState('')
  const getDelivery = useSelector((st) => st.getDelivery)

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
  }, [getPaymentType?.data])

  const [data, setData] = useState(props.route?.params?.data)


  useEffect(() => {
    let item = { ...data }
    item.payment_id = 1
    setData(item)
  }, [])

  // AddNewOrder

  const handelPress = () => {
    let item = { ...data }
    item.payment_id = 2
    item.platform_id = 1
    item.phone = getUser.data?.user?.phone
    dispatch(AddNewOrder(item, token))
    // navigation.navigate("Success")
  }

  useEffect(() => {
    if (addNewOrder.status) {
      navigation.navigate("Success")
    }
  }, [addNewOrder])

  useEffect(() => {
    let item = { ...data }
    item.city_id = ''
    item.city_name = ''
    item.delivery_id = 1
    setData(item)
  }, [])
  useEffect(() => {
    let item = { ...data }
    setDeliveryType(getDelivery.data)
    item.delivery_id = 1
    item.delevery_name = deliveryType[0]?.name
    setData(item)
  }, [getDelivery.data])


  useEffect(() => {
    let item = { ...data }
    item.city_id = selectedCity.id
    item.city_name = selectedCity.name
    setData(item)
  }, [selectedCity])

  const HandelClick = () => {
    let send1 = false
    let send = false
    if (!data.city_id) {
      setError('error')
      send1 = false
    }
    else {
      send1 = true
      setError('')
    }
    if (!data.delivery_id) {
      send = false
      setErrorC('error')
    }
    else {
      send = true
      setErrorC('')
    }

    console.log(send, send1)
    if (send && send1) {
      navigation.navigate("ThirdStep", { data })
    }
  }
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={{ paddingTop: 30, paddingBottom: 40 }}>
          <TouchableOpacity
            style={{ position: "absolute", left: 0, top: 25, zIndex: 10 }}
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
                width: "40%",
                textAlign: "left",
              }}
            >
              Получатель
            </Text>
            <Text
              style={{
                ...styles.statusDescrActive,
                width: "30%",
                textAlign: "center",
              }}
            >
              Доставка
            </Text>
            <Text
              style={{
                ...styles.statusDescr,
                width: "30%",
                textAlign: "right",
              }}
            >
              Оплата
            </Text>
          </View>
          <Text style={[styles.subTitle, { marginBottom: 25 }]}>
            Населенный пункт
          </Text>
          <TouchableOpacity onPress={() => { setOpenModal(true) }} style={[styles.input, { marginBottom: 48, borderColor: error ? 'red' : 'rgba(31, 32, 36, 0.15)' }]} >
            <Text style={styles.inputText}> {selectedCity.name ? selectedCity.name : ''}</Text>
          </TouchableOpacity>
          <CityModal onPress={(e) => setSelectedCity(e)} close={() => setOpenModal(false)} visible={openModal} />
          <Text style={[styles.subTitle, { marginBottom: 25 }]}>
            Способ доставки
          </Text>
          {paymentData?.map((elm, i) => {
            return <RadioSelect
              key={i}
              title={elm.name}
              // text="Доставка по Москве (в пределах МКАД) – 250 ₽"
              onPress={() => {
                setData({ ...data, delevery_name: elm.name, delivery_id: elm.id })
                setDeliveryMethod(1)
              }}
              active={deliveryMethod == 1}
            />
          })}
          <MainButton
            onPress={() => HandelClick()}
            // onPress={() => navigation.navigate("ThirdStep")}
            title="Далее"
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scroll: {
    width: "100%",
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
    width: "67%",
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
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#373737",
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 40,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  input: {
    height: 56,
    borderColor: "rgba(31, 32, 36, 0.15)",
    borderWidth: 1,
    width: "100%",
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#F2F2F4",
    justifyContent: 'center'
  },
  inputText: {
    textAlign: 'right',
  }
});
