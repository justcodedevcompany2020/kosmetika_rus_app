import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CatalogueItem } from "./CatalogueItem";

export const Bestsellers = (props) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.containerTop}>
        <Text style={styles.title}>Хиты продаж</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Смотреть все</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBottom}>
        <ScrollView
          style={{ ...styles.list, paddingHorizontal: 20 }}
          horizontal={true}
          // scrollEnabled="true"
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return <View style={{ height: "100%", width: 11 }} />;
          }}
        >
          <CatalogueItem
            style={{}}
            rate="4.9"
            title="Крем лифтинг для лица с наносистемой"
            currentPrice="378"
            prevPrice="420"
          />
          <CatalogueItem
            style={{}}
            sale="20"
            rate="4.9"
            title="Крем лифтинг для лица с наносистемой"
            currentPrice="378"
            prevPrice="420"
          />
          <CatalogueItem
            style={{}}
            rate="4.9"
            title="Крем лифтинг для лица с наносистемой"
            currentPrice="378"
            prevPrice="420"
          />
          <CatalogueItem
            style={{}}
            sale="30"
            rate="4.9"
            title="Крем лифтинг для лица с наносистемой"
            currentPrice="378"
            prevPrice="420"
          />
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
  container: {
    width: "100%",
  },
  containerTop: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  containerBottom: {
    width: "100%",
  },
  title: {
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
    lineHeight: 20,
    color: "#373737",
  },
  btnText: {
    fontFamily: "MontserratLight",
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(31, 32, 36, 0.5)",
  },
});
