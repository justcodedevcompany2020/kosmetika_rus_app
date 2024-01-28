import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EmailIcon from "../icons/EmailIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import TelegramIcon from "../icons/TelegramIcon";
import { Pressable } from "react-native";

export const Contacts = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Связаться с нами</Text>
      <TouchableOpacity>
        <Text style={styles.phone}>+7 (495) 212-14-64</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={{marginRight: 20,}}>
          <WhatsappIcon />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 20,}}>
          <TelegramIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <EmailIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    color: "#71727A",
  },
  phone: {
    marginBottom: 24,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    color: "#373737",
  },
  iconContainer: {
    flexDirection: "row",
  }
});