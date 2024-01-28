import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavHomeIcon } from "../icons/NavHomeIcon";
import { NavCatalogueIcon } from "../icons/NavCatalogueIcon";
import { NavCartIcon } from "../icons/NavCartIcon";
import { NavProfileIcon } from "../icons/NavProfileIcon";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Navbar = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        <NavHomeIcon isActive={props.active == "Main"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("CatalogTab")}
      >
        <NavCatalogueIcon isActive={props.active == "Catalogue"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("OrderTab")}
      >
        <NavCartIcon isActive={props.active == "Cart"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("ProfileTab")}
      >
        <NavProfileIcon isActive={props.active == "Profile"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 29,
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: "#373737",
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  navItem: {
    alignItems: "center",
  },

  navIcon: {
    marginBottom: 8,
    width: 20,
    height: 20,
  },

  navText: {
    fontFamily: "MontserratMedium",
    fontSize: 10,
    lineHeight: 12,
    color: "rgba(255, 255, 255, 0.5)",
  },

  navTextActive: {
    fontFamily: "MontserratMedium",
    fontSize: 10,
    lineHeight: 12,
    color: "red",
  },
});
