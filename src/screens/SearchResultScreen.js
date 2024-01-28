import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { PromoList } from "../components/PromoList";
import { SearchInput } from "../components/SearchInput";
import { FilterContainer } from "../components/FilterContainer";
import { useNavigation } from "@react-navigation/native";

export const SearchResulrScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <ReturnIcon
            onPress={() => navigation.goBack()}
            style={{ left: 10, top: 10, zIndex: 10 }}
          />
          <Text style={styles.title}>Результаты поиска</Text>
          <SearchInput style={{ marginBottom: 12 }} title="крем для лица" />
          <FilterContainer style={{ marginBottom: 23 }} />
          <Text style={styles.amountText}>Найдено товаров: 126</Text>
          <PromoList />
        </View>
      </ScrollView>
      <Navbar active="Catalogue" activeText="Catalogue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  mainContainer: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 120,
  },
  title: {
    marginBottom: 21,
    fontFamily: "MontserratBold",
    fontSize: 18,
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
  },
});
