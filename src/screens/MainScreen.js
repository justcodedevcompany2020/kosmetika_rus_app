import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Navbar } from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import { HeroSlide } from "../components/HeroSlide";
import { Bestsellers } from "../components/Bestsellers";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { ClearLogin, ClearOrderStatus, GetAuthUser, GetBaners, GetBasketAction, GetPadborkiWhiteProducts, GetStoryes } from "../services/action/action";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SetToken } from "../services/action/successAction";
import { ClearConfirmCode } from "../services/action/errorAction";

export const MainScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [token, setToken] = useState()

  useEffect(() => {
    dispatch(ClearConfirmCode())
    dispatch(ClearLogin())
  }, [])
  const [search, setSearch] = useState('')

  const [loading, setLoadng] = useState(true)

  const GetUser = async () => {
    let token = await AsyncStorage.getItem('token')
    setLoadng(true)
    if (token) {
      setToken(token)
      dispatch(SetToken(token))
      dispatch(GetBaners('first', token))
      dispatch(GetBasketAction(token))
      dispatch(GetAuthUser(token))
      dispatch(GetPadborkiWhiteProducts(token))
      dispatch(ClearOrderStatus())
    }
  }

  useEffect(() => {
    GetUser()

    // const unsubscribe = navigation.addListener('focus', async () => {
    //   GetUser()
    // });
    // return unsubscribe;
  }, []);

  const getBaner = useSelector((st) => st.getBaner)
  const getPadborki = useSelector((st) => st.getPadborki)
  const handleKeyPress = () => {
    navigation.navigate("CatalogTab", {
      screen: "Category", params: {
        search: search
      },
    })
  };

  useEffect(() => {
    setLoadng(getPadborki.loading)
  }, [getPadborki])

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
        <ScrollView
          width="100%"
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
          horizontal={false}
        >
          <View style={styles.mainContainer}>
            <View style={{ paddingHorizontal: 20 }}>
              <SearchInput
                handleKeyPress={(e) => handleKeyPress(e)}
                onChangeText={(e) => setSearch(e)}
                style={{ marginBottom: 11 }} title="Что вы ищите?" />


              {getBaner?.data?.data?.length &&
                <Swiper
                  style={{ height: 250 }}

                  showsPagination={true}
                  dot={
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 24,
                        backgroundColor: "rgba(105, 105, 105, 0.13)",
                        marginHorizontal: 6,
                      }}
                    ></View>
                  }
                  activeDot={
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#373737",
                        borderRadius: 24,
                        marginHorizontal: 6,
                      }}
                    ></View>
                  }
                >
                  {getBaner?.data?.data?.map((elm, i) => {
                    return <TouchableOpacity
                      key={i}
                      style={{ width: '100%' }}
                      onPress={() => navigation.navigate("CatalogTab", {
                        screen: "Category", params: {
                          podborka_id: elm.podborki.id,
                          categoryName: elm.podborki.name
                        },
                      })}
                    >
                      <HeroSlide image={elm.file} />
                    </TouchableOpacity>
                  })}
                </Swiper>}
            </View>
            {
              loading ?
                <ActivityIndicator size='large' color="#dbc3a0" /> :

                getPadborki.data.map((elm, i) => {
                  return <Bestsellers
                    id={elm.id}
                    name={elm.name}
                    product={elm.products}
                    main={'main'}
                    key={i}
                    image={elm.image}
                    style={{ marginBottom: 30 }}
                  />
                })
            }
          </View>
        </ScrollView>
      </LinearGradient>
      <Navbar navigation={navigation} active="Main" activeText="Main" />
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  mainContainer: {
    flex: 1,
    //paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 120,
    width: "100%",
  },
});
