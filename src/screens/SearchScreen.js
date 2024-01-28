import React from "react";
import SearchIcon from "../icons/SearchIcon";
import ReturnIcon from "../icons/ReturnIcon";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { QuickSearch } from "../components/QuickSearch";
import { SearchInput } from "../components/SearchInput";
import { useNavigation } from "@react-navigation/native";

export const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#F7F7F7", "#FFFFFF"]}
      location={[1, 0]}
      style={styles.container}
    >
      <View style={styles.mainContainer}>
        <ReturnIcon
          style={{ top: -4, left: 10 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Поиск в каталоге</Text>
        <SearchInput style={{ marginBottom: 30 }} title="Что вы ищите?" />
        <QuickSearch />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 21,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 20,
    color: "#373737",
  },
});
