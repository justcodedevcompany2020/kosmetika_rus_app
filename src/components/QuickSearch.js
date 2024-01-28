import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const QuickSearch = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Часто ищут</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>крем</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>сыворотка</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>маски</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    marginBottom: 20,
    fontFamily: "MontserratLight",
    fontSize: 16,
    lineHeight: 20,
    color: "rgba(55, 55, 55, 0.5)"
  },
  itemText: {
    marginBottom: 20,
    fontFamily: "MontserratRegular",
    fontSize: 18,
    lineHeight: 20,
    color: "#373737",
  }
});