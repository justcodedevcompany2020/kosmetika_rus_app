import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Navbar } from "../components/Navbar";
import { FilterContainer } from "../components/FilterContainer";
import { PromoList } from "../components/PromoList";

export const PromoScreen = () => {
  return (
    <LinearGradient colors={['#f7f7f7', '#fff']} style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Крема с наносистемой</Text>
        <FilterContainer style={{ marginBottom: 23, }} />
        <Text style={styles.amountText}>
          {/* Найдено товаров: 126 */}
        </Text>
        <PromoList />
      </View>
      <Navbar active="Catalogue" activeText="Catalogue" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingTop: 66,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 22,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    color: "#373737",
  },
  amountText: {
    marginBottom: 20,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(55, 55, 55, 0.5)",
  }
});