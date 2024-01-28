import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MyInfoIcon from "../icons/MyInfoIcon";
import MyOrdersIcon from "../icons/MyOrdersIcon";
import MyProfileIcon from "../icons/MyProfileIcon";
import LogoutIcon from "../icons/LogoutIcon";
import ArrowIcon from "../icons/ArrowIcon";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


export const ProfileUserMenu = () => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.profileMenuItem}
        onPress={() => navigation.navigate('PersonalInfo')}
      >
        <View style={styles.profileMuneItemLeft}>
          <MyProfileIcon/>
          <Text style={styles.listText}>Личные данные</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileMenuItem}
        onPress={() => navigation.navigate('Orders')}
      >
        <View style={styles.profileMuneItemLeft}>
          <MyOrdersIcon/>
          <Text style={styles.listText}>Мои заказы</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileMenuItem}
        onPress={() => navigation.navigate('Info')}
      >
        <View style={styles.profileMuneItemLeft}>
          <MyInfoIcon/>
          <Text style={styles.listText}>Информация</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileMenuItemLast}
      onPress={() => setModalVisible(true)}>
        <View style={styles.profileMuneItemLeft}>
          <LogoutIcon/>
          <Text style={styles.listTextRed}>Выйти из профиля</Text>
        </View>
        <View></View>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 335,
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "rgba(55, 55, 55, 0.15)", 
  },
  profileMenuItem: {
    width: "100%",
    marginBottom: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileMenuItemLast: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listText: {
    paddingLeft: 38,
    fontFamily: "MontserratMedium",
    fontSize: 15,
    lineHeight: 20,
    color: "#373737",
  },
  listTextRed: {
    paddingLeft: 38,
    fontFamily: "MontserratBold",
    fontSize: 15,
    lineHeight: 20,
    color: "#EB4747",
  },
  profileMuneItemLeft: {
    flexDirection: "row",
  },
  
});