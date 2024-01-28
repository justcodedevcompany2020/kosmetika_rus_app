import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CatalogueItem } from "./CatalogueItem";

export const Recomended = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.title}>Рекомендации</Text>
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
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
