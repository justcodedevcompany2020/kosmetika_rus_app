import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,

} from "react-native";

export const HeroSlide = (props) => {
  return (
    <View
      style={[styles.hero, props.style]}
      resizeMode="cover"
    >
      <View style={styles.heroRight}>
        <Image
          source={{ uri: `https://basrarusbackend.justcode.am/uploads/${props.image}` }}
          style={styles.heroPic}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    paddingLeft: 20,
    paddingRight: 8,
    paddingBottom: 7,
    borderRadius: 15,
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
    width: '100%',
    height: 199,
  },
});
