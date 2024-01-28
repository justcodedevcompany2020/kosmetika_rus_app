import React, { useState } from "react";
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

const cities = [
  "г. Москва",
  "г. Санкт-Петербург",
  "г. Казань",
  "г. Новосибирск",
  "г. Екатеринбург",
  "г. Уфа",
];

export const OrderSecondForm = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("courier");
  const navigation = useNavigation();
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
          <SelectDropdown
            buttonStyle={{
              marginBottom: 47,
              paddingHorizontal: 14,
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(55, 55, 55, 0.15)",
              borderRadius: 10,
            }}
            buttonTextStyle={{
              textAlign: "left",
              fontFamily: "MontserratMedium",
              fontSize: 16,
              color: "#373737",
            }}
            rowTextStyle={{
              textAlign: "left",
              fontFamily: "MontserratMedium",
              fontSize: 16,
              color: "#373737",
            }}
            dropdownStyle={{
              borderRadius: 10,
            }}
            rowStyle={{
              paddingHorizontal: 20,
            }}
            defaultValue="г. Москва"
            dropdownBackgroundColor="#fff"
            style={styles.dropdown}
            defaultButtonText="Выберите населенный пункт"
            data={cities}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={12}
                />
              );
            }}
            dropdownIconPosition={"right"}
            onSelect={(selectedItem, index) => {
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <Text style={[styles.subTitle, { marginBottom: 25 }]}>
            Способ доставки
          </Text>
          <RadioSelect
            title="Курьер"
            text="Доставка по Москве (в пределах МКАД) – 250 ₽"
            onPress={() => setDeliveryMethod("courier")}
            active={deliveryMethod == "courier"}
          />
          <RadioSelect
            title="Пункт выдачи СДЕК"
            text={`Выберите удобный адрес пункта выдачи${"\n"}заказов, укажите его при оформлении заказа`}
            onPress={() => setDeliveryMethod("sdek")}
            active={deliveryMethod == "sdek"}
          />
          <RadioSelect
            title="Самовывоз"
            text={`Самовывоз из офиса в будние дни с 10 до 18 ч.${"\n"}по адресу: г. Москва, Сущёвский вал, д.5, стр.2`}
            onPress={() => setDeliveryMethod("pickup")}
            active={deliveryMethod == "pickup"}
          />
          <MainButton
            onPress={() => navigation.navigate("ThirdStep")}
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
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#373737",
  },
});
