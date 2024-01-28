import React, { useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { GetBanners } from "../services/action/action";

export const HeroSlide = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(GetBanners())
  // }, [])
  return (
    <ImageBackground
      style={[styles.hero, props.style]}
      source={require("../img/hero2.png")}
      resizeMode="cover"
    >
      <View style={styles.heroLeft}>
        <Text style={styles.heroTitle}>Крема{"\n"}с наносистемой</Text>
        <Text style={styles.descr}>
          Уникальная косметическая{"\n"}серия в линейке Plazan
        </Text>
        <TouchableOpacity
          style={styles.heroBtn}
          onPress={() =>
            navigation.navigate("CatalogTab", { screen: "Category" })
          }
        >
          <Text style={styles.heroBtnText}>Узнать больше</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.heroRight}>
        <Image
          source={require("../img/summary-item-pic.png")}
          style={styles.heroPic}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  hero: {
    paddingLeft: 20,
    paddingRight: 8,
    paddingBottom: 7,
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroTitle: {
    alignSelf: "flex-start",
    marginBottom: 11,
    fontFamily: "MontserratSemiBold",
    fontSize: 20,
    lineHeight: 22,
    color: "#373737",
  },
  descr: {
    marginBottom: 22,
    alignSelf: "flex-start",
    fontFamily: "MontserratRegular",
    fontSize: 15,
    lineHeight: 18,
    color: "#373737",
  },
  heroBtn: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#E1A0BE",
    borderRadius: 8,
  },
  heroBtnText: {
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  heroPic: {
    width: 105,
    height: 199,
  },
});
