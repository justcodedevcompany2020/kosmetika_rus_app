import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import SearchIcon from "../icons/SearchIcon";

export const SearchInput = (props) => {
  return(
    <View style={[styles.searchContainer, props.style]}>
      <TextInput
        style={styles.input}
        placeholder={props.title}
        placeholderColor="rgba(55, 55, 55, 0.5)"
        inputMode="search"
      />
      <SearchIcon style={{position: "absolute", top: 17, left: 17,}}/>
    </View>
  );
};

let styles = StyleSheet.create({
  searchContainer: {
    position: "relative",
    width: "100%",
  },
  input: {
    paddingVertical: 15,
    paddingLeft: 51,
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.15)",
    borderRadius: 10,
    fontFamily: "MontserratRegular",
    fontSize: 16,
    lineHeight: 20,
  }
})