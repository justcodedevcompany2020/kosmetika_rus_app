import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Navbar } from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import { HeroSlide } from "../components/HeroSlide";
import { Bestsellers } from "../components/Bestsellers";
import { Recomended } from "../components/Recomended";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { ClearGetPadbord, ClearOrderStatus, GetBaners, GetPadborkiWhiteProducts, GetStoryes } from "../services/action/action";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MainScreen = () => {
  const navigation = useNavigation();
  const video = useRef(null);
  const [compilations, setCompilations] = useState([]);
  const dispatch = useDispatch()
  const [chatVisible, setChatVisible] = useState(false);

  const getStorys = useSelector((st) => st.getStoryes)
  const [storiesVisible, setStoriesVisible] = useState(false);
  const [firstBanner, setFirstBanner] = useState([])
  const [secondBanner, setSecondBanner] = useState([])

  const [showStoryes, setShowStoryes] = useState([])
  const [search, setSearch] = useState('')
  const [activeStory, setActiveStory] = useState(0)
  const [token, setToken] = useState('')


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      GetUser()
      setCompilations([])
    });
    return unsubscribe;
  }, [navigation]);

  const ShowStory = (i) => {
    setStoriesVisible(true)
    setShowStoryes(getStorys.data.data[i])
    setActiveStory(i)
  }



  const GetUser = async () => {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      setToken(token)
      dispatch(GetBaners('first', token))
      dispatch(GetPadborkiWhiteProducts(token))
      dispatch(ClearOrderStatus())
      dispatch(ClearGetPadbord())
    }
  }

  const getBaner = useSelector((st) => st.getBaner)
  const getPadborki = useSelector((st) => st.getPadborki)
  useEffect(() => {
    setCompilations(getPadborki.data)
  }, [getPadborki.data])
  // useEffect(() => {
  // }, [getBaner.firstData.data])
  useEffect(() => {
    setFirstBanner(getBaner.data.data)
    setSecondBanner(getBaner.data.data)
  }, [getBaner.data])

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
              <SearchInput style={{ marginBottom: 11 }} title="Что вы ищите?" />
              {getBaner?.data?.data?.length && <Swiper
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
                  return <View key={i} style={styles.slide1}>
                    <HeroSlide
                      image={elm.file}

                    />
                  </View>
                })}

                {/* <View style={styles.slide2}>
                  <HeroSlide />
                </View> */}

              </Swiper>}
            </View>
            {/* <Bestsellers style={{ marginBottom: 30 }} /> */}
            {getPadborki.data.map((elm, i) => {
              return <Bestsellers
                name={elm.name}
                product={elm.products}
                key={i}
                image={elm.image}
                style={{ marginBottom: 30 }}
              />
            })}
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
