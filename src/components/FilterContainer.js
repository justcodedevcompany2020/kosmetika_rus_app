import React from "react";
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import MoreIcon from "../icons/MoreIcon";
import { useNavigation } from "@react-navigation/native";

export const FilterContainer = (props) => {
  const navigation = useNavigation();
  return(
    <View style={[styles.filterContainer, props.style]}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Sort')}
        style={styles.filter}>
        <Text style={styles.filterText}>Сортировать</Text>
        <MoreIcon/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Filter')}
        style={styles.filter}>
        <Text style={styles.filterText}>Фильтр</Text>
        <MoreIcon/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filter: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: "49%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  filterText: {
    fontFamily: "MontserratMedium",
    fontSize: 12,
    lineHeight: 20,
    color: "#373737",
  }
})