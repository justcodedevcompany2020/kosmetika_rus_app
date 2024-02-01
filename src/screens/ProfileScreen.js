import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Navbar } from "../components/Navbar";
import MyOrdersIcon from "../icons/MyOrdersIcon";
import MyInfoIcon from "../icons/MyInfoIcon";
import MyProfileIcon from "../icons/MyProfileIcon";
import LogoutIcon from "../icons/LogoutIcon";
import ArrowIcon from "../icons/ArrowIcon";
import { ProfileUser } from "../components/ProfileUser";
import { Contacts } from "../components/Contacts";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { GetAuthUser, LogoutAction } from "../services/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogoutPopup } from '../components/LogoutPopup'

export const ProfileScreen = (props) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch()
  const getUser = useSelector((st) => st.getUser)
  const [token, setToken] = useState()
  const GetUser = async () => {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      setToken(token)
      dispatch(GetAuthUser(token))
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      GetUser()
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ backgroundColor: "#f7f7f7", flex: 1, height: "100%" }}>
      <LogoutPopup />

      <ScrollView>
        <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
          {/* <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={[styles.centeredView, { zIndex: 10 }]}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Выйти из профиля</Text>
                <Text style={styles.modalDescr}>
                  Вы уверены, что хотите выйти?{"\n"}Чтобы использовать
                  приложение,
                  {"\n"}необходимо будет заново{"\n"}авторизоваться по номеру
                  {"\n"}
                  телефона
                </Text>
                <View style={styles.modalBottom}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Отмена</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <LinearGradient
                      colors={["#C2ECD4", "#9AC6AD"]}
                      style={[styles.linearGradient]}
                    >
                      <Text style={styles.btnText}>Выйти</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={
                this.modalVisible
                  ? [styles.dimBackground, { display: "none" }]
                  : [styles.dimBackground, { display: "block" }]
              }
            ></View>
          </Modal> */}
          <View style={styles.containerTop}>
            <Text style={styles.title}>Профиль</Text>
            <ProfileUser
              phone={getUser.data.user?.phone}
              name={getUser.data.user?.name}
              surname={getUser.data.user?.surname}
              userAvatar={getUser.data.user?.avatar}
              style={{ marginBottom: 42 }}
            />

            <View style={styles.menu}>
              <TouchableOpacity
                style={styles.profileMenuItem}
                onPress={() => navigation.navigate("PersonalInfo")}
              >
                <View style={styles.profileMuneItemLeft}>
                  <MyProfileIcon />
                  <Text style={styles.listText}>Личные данные</Text>
                </View>
                <ArrowIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileMenuItem}
                onPress={() => navigation.navigate("Orders")}
              >
                <View style={styles.profileMuneItemLeft}>
                  <MyOrdersIcon style={{ display: "flex" }} />
                  <Text style={styles.listText}>Мои заказы</Text>
                </View>
                <ArrowIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileMenuItem}
                onPress={() => navigation.navigate("Info")}
              >
                <View style={styles.profileMuneItemLeft}>
                  <MyInfoIcon />
                  <Text style={styles.listText}>Информация</Text>
                </View>
                <ArrowIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileMenuItemLast}
                onPress={() => setModalVisible(true)}
              >
                <View style={styles.profileMuneItemLeft}>
                  <LogoutIcon />
                  <Text
                    onPress={() => {
                      dispatch(LogoutAction(token))
                      navigation.navigate("RegisterTab", {
                        screen: "SignUp"
                      })
                      // navigation.navigate('SignUp')

                    }}
                    style={styles.listTextRed}>Выйти из профиля</Text>
                </View>
                <View></View>
              </TouchableOpacity>
            </View>

            <Contacts />
          </View>
        </LinearGradient>
      </ScrollView>
      <Navbar navigation={navigation} active="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 120,
    paddingHorizontal: 20,
    width: "100%",
  },
  dimBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(55, 55, 55, 0.9)",
  },
  containerTop: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    color: "#373737",
  },
  scroll: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  menu: {
    paddingBottom: 40,
    // paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "rgba(55, 55, 55, 0.15)",
    width: "100%",
  },
  profileMenuItem: {
    marginBottom: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileMenuItemLast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listText: {
    fontFamily: "MontserratMedium",
    fontSize: 15,
    lineHeight: 20,
    color: "#373737",
    marginLeft: 20,
  },
  listTextRed: {
    fontFamily: "MontserratBold",
    fontSize: 15,
    lineHeight: 20,
    color: "#EB4747",
    marginLeft: 20,
  },
  profileMuneItemLeft: {
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  button: {
    marginRight: 8,
    paddingVertical: 11,
    paddingHorizontal: 35,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#71727A",
  },
  textStyle: {
    fontFamily: "MontserratMedium",
    fontSize: 15,
    lineHeight: 18,
    color: "#71727A",
  },
  modalText: {
    marginBottom: 8,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    color: "#373737",
    textAlign: "center",
  },
  modalDescr: {
    marginBottom: 20,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    color: "#71727A",
  },
  modalBottom: {
    flexDirection: "row",
  },
  linearGradient: {
    paddingVertical: 11,
    paddingHorizontal: 39,
    borderRadius: 12,
  },

  btnText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
    lineHeight: 18,
    color: "#FFFFFF",
  },
});
