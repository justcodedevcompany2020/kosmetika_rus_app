import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Navbar } from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import { HeroSlide } from "../components/HeroSlide";
import { Bestsellers } from "../components/Bestsellers";
import { Recomended } from "../components/Recomended";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

export const MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
        <ScrollView
          width="100%"
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
          horizontal={false}
        >
          <View style={styles.mainContainer}>
            <View style={{ paddingHorizontal: 20 }}>
              <SearchInput style={{ marginBottom: 11 }} title="Что вы ищите?" />
              <Swiper
                style={{ height: 250 }}
                showsPagination={true}
                dot={
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 24,
                      backgroundColor: "rgba(105, 105, 105, 0.13)",
                      marginHorizontal: 6,
                    }}
                  ></View>
                }
                activeDot={
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: "#373737",
                      borderRadius: 24,
                      marginHorizontal: 6,
                    }}
                  ></View>
                }
              >
                <View style={styles.slide1}>
                  <HeroSlide />
                </View>
                <View style={styles.slide2}>
                  <HeroSlide />
                </View>
                <View style={styles.slide3}>
                  <HeroSlide />
                </View>
                <View style={styles.slide3}>
                  <HeroSlide />
                </View>
              </Swiper>
            </View>
            <Bestsellers style={{ marginBottom: 30 }} />
            <Recomended />
          </View>
        </ScrollView>
      </LinearGradient>
      <Navbar navigation={navigation} active="Main" activeText="Main" />
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  mainContainer: {
    flex: 1,
    //paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 120,
    width: "100%",
  },
});
