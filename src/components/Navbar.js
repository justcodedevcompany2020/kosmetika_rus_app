import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Keyboard } from "react-native";
import { NavHomeIcon } from "../icons/NavHomeIcon";
import { NavCatalogueIcon } from "../icons/NavCatalogueIcon";
import { NavCartIcon } from "../icons/NavCartIcon";
import { NavProfileIcon } from "../icons/NavProfileIcon";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { GetBasketAction } from "../services/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Navbar = (props) => {
  const navigation = useNavigation();
  const getBasket = useSelector((st) => st.getBasket)
  let [token, setToken] = useState('')
  const getToken = async () => {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      setToken(token)
    }
  }

  const dispatch = useDispatch()


  useEffect(() => {
    getToken()
  }, [])

  useEffect(() => {
    if (token) {
      dispatch(GetBasketAction(token, 1))
    }
  }, [token])


  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardOpen(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardOpen(false)
    );

    // Clean up listeners when component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  if (!isKeyboardOpen)
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
          <View style={{ position: 'relative' }}>
            <View style={{ position: 'absolute', right: 0, top: -10, backgroundColor: '#ff8000', width: 18, height: 18, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: "white", fontSize: 11 }}>{getBasket.data.data?.length}</Text>
            </View>
            <NavCartIcon isActive={props.active == "Cart"} />
          </View>
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
