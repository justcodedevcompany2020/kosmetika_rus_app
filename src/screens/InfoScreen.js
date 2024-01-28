import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Navbar } from "../components/Navbar";
import ArrowIcon from "../icons/ArrowIcon";
import ReturnIcon from "../icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export const InfoScreen = (props) => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <View style={styles.containerTop}>
            <Text style={styles.title}>Информация</Text>
            <ReturnIcon
              style={{ left: 0, top: -3 }}
              onPress={() => navigation.navigate("Profile")}
            />
          </View>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.infoItemText}>Доставка и оплата</Text>
            <ArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.infoItemText}>Договор оферты</Text>
            <ArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.infoItemText}>Политика конфиденциальности</Text>
            <ArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoItem}
            onPress={() => navigation.navigate("Feedback")}
          >
            <Text style={styles.infoItemText}>Оставить отзыв</Text>
            <ArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.infoItemText}>О компании</Text>
            <ArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.infoItemText}>О приложении</Text>
            <ArrowIcon />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Navbar active="Profile" activeText="Profile" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    position: "relative",
    width: "100%",
    marginBottom: 47,
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  mainContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    color: "#373737",
    textAlign: "center",
  },
  infoItem: {
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  infoItemText: {
    fontFamily: "MontserratRegular",
    fontSize: 15,
    lineHeight: 20,
    color: "#373737",
  },
});
