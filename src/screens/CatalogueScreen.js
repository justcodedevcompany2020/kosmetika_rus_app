import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Navbar } from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from '../services/action/action'

export const CatalogueScreen = (props) => {
  const dispatch = useDispatch()
  const { token } = useSelector((st) => st.static)
  const getProducets = useSelector((st) => st.getProducets)
  const [search, setSearch] = useState('')
  useEffect(() => {
    dispatch(GetProducts(token))
  }, [])
  const navigation = useNavigation();
  function chunkArray(array, chunkSize = 4) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
  const handleKeyPress = ({ nativeEvent }) => {
    navigation.navigate("CatalogTab", {
      screen: "Category", params: {
        search: search
      },
    })
  };
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Каталог</Text>
          <SearchInput
            handleKeyPress={(e) => handleKeyPress(e)}
            onChangeText={(e) => setSearch(e)}
            style={{ marginBottom: 20 }} title="Что вы ищите?" />

          {
            chunkArray(getProducets?.data)?.map((elm, i) => {
              if (i % 2 == 0) {
                return <View style={{ marginBottom: 10 }}>
                  <View style={styles.scrollTopContainer}>
                    <TouchableOpacity
                      style={{ width: "48.5%" }}
                      onPress={() => navigation.navigate("Category", { id: elm[0]?.id, categoryName: elm[0]?.name })}
                    >
                      <LinearGradient
                        colors={["#EDDFCB", "#DBC3A0"]}
                        style={styles.bigItem}
                      >
                        <Text style={[styles.itemTitle, { marginBottom: 7 }]}>
                          {elm[0]?.name}
                        </Text>
                        <LinearGradient
                          colors={["#EDDFCB", "#DBC3A0"]}
                          locations={[1, 0.99]}
                          style={styles.itemBgTan}
                        ></LinearGradient>
                        <Image
                          source={{ uri: `https://basrarusbackend.justcode.am/uploads/${elm[0]?.photo}` }}

                          style={styles.categoryImg1}
                        />
                      </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.categoryTopRight}>
                      {elm[1]?.name && <TouchableOpacity onPress={() => navigation.navigate("Category", { id: elm[1]?.id, categoryName: elm[1]?.name })}>
                        <LinearGradient
                          colors={["#F7ECE8", "#E3C3B6"]}
                          style={styles.smallItem}
                        >
                          <Text style={styles.itemTitle}>{elm[1]?.name}</Text>
                          <LinearGradient
                            colors={["#F7ECE8", "#E3C3B6"]}
                            locations={[1, 0.99]}
                            style={styles.itemBgPink}
                          ></LinearGradient>
                          <Image
                            source={{ uri: `https://basrarusbackend.justcode.am/uploads/${elm[1]?.photo}` }}
                            style={styles.categoryImg2}
                          />
                        </LinearGradient>
                      </TouchableOpacity>}
                      {elm[2]?.name && <TouchableOpacity onPress={() => navigation.navigate("Category", { id: elm[2]?.id, categoryName: elm[2]?.name })}>
                        <LinearGradient
                          colors={["#D0EBD5", "#98CBA1"]}
                          style={[styles.smallItem, { marginBottom: 0 }]}
                        >
                          <Text style={styles.itemTitle}>
                            {elm[2]?.name}
                          </Text>
                          <LinearGradient
                            colors={["#9AC6AD", "#C2ECD4"]}
                            locations={[0, 0.01]}
                            style={styles.itemBgGreen}
                          ></LinearGradient>
                          <Image
                            source={{ uri: `https://basrarusbackend.justcode.am/uploads/${elm[2]?.photo}` }}
                            style={styles.categoryImg3}
                          />
                        </LinearGradient>
                      </TouchableOpacity>}
                    </View>

                  </View>
                  {elm[3]?.name && <TouchableOpacity key={i} onPress={() => navigation.navigate("Category", { id: elm[3]?.id, categoryName: elm[3]?.name })}>
                    <LinearGradient
                      colors={["#E6B8D6", "#F1DCEA"]}
                      style={styles.itemBottom}
                    >
                      <Text
                        style={[
                          styles.itemTitle,
                          { marginBottom: 5, textAlign: "left" },
                        ]}
                      >
                        {elm[3]?.name}
                      </Text>
                      <Text style={[styles.itemDescr, { textAlign: "left" }]}>
                      </Text>
                      <LinearGradient
                        colors={["#F1DCEA", "#E3C3B6"]}
                        locations={[0.99, 1]}
                        style={styles.itemBgPurple}
                      ></LinearGradient>
                      <Image
                        source={{ uri: `https://basrarusbackend.justcode.am/uploads/${elm[3]?.photo}` }}
                        style={styles.categoryImg4}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                  }
                </View>
              }
              else {
                return <View style={{ marginBottom: 10 }}>
                  <View style={styles.scrollTopContainer}>


                    <View style={styles.categoryTopRight}>
                      {elm[0]?.name && <TouchableOpacity onPress={() => navigation.navigate("Category", { id: elm[0]?.id, categoryName: elm[0]?.name })}>
                        <LinearGradient
                          colors={["#F7ECE8", "#E3C3B6"]}
                          style={styles.smallItem}
                        >
                          <Text style={styles.itemTitle}>{elm[0]?.name}</Text>
                          <LinearGradient
                            colors={["#F7ECE8", "#E3C3B6"]}
                            locations={[1, 0.99]}
                            style={styles.itemBgPink}
                          ></LinearGradient>
                          <Image
                            source={{ uri: `https://basrarusbackend.justcode.am/uploads/${elm[0]?.photo}` }}
                            style={styles.categoryImg2}
                          />
                        </LinearGradient>
                      </TouchableOpacity>}
                      {elm[1]?.name && <TouchableOpacity onPress={() => navigation.navigate("Category", { id: elm[1]?.id, categoryName: elm[1]?.name })}>
                        <LinearGradient
                          colors={["#D0EBD5", "#98CBA1"]}
                          style={[styles.smallItem, { marginBottom: 0 }]}
                        >
                          <Text style={styles.itemTitle}>
                            {elm[1]?.name}
                          </Text>
                          <LinearGradient
                            colors={["#9AC6AD", "#C2ECD4"]}
                            locations={[0, 0.01]}
                            style={styles.itemBgGreen}
                          ></LinearGradient>
                          <Image
                            source={{ uri: `https://basrarusbackend.justcode.am/uploads/${elm[1]?.photo}` }}
                            style={styles.categoryImg3}
                          />
                        </LinearGradient>
                      </TouchableOpacity>}
                    </View>
                    {elm[2]?.name && <TouchableOpacity
                      style={{ width: "48.5%" }}
                      onPress={() => navigation.navigate("Category", { id: elm[2]?.id, categoryName: elm[2]?.name })}
                    >
                      <LinearGradient
                        colors={["#EDDFCB", "#DBC3A0"]}
                        style={styles.bigItem}
                      >
                        <Text style={[styles.itemTitle, { marginBottom: 7 }]}>
                          {elm[2]?.name}
                        </Text>
                        <LinearGradient
                          colors={["#EDDFCB", "#DBC3A0"]}
                          locations={[1, 0.99]}
                          style={styles.itemBgTan}
                        ></LinearGradient>
                        <Image
                          source={{ uri: `https://basrarusbackend.justcode.am/uploads/${elm[2]?.photo}` }}

                          style={styles.categoryImg1}
                        />
                      </LinearGradient>
                    </TouchableOpacity>}
                  </View>
                  {elm[3]?.name && <TouchableOpacity key={i} onPress={() => navigation.navigate("Category", { id: elm[3]?.id, categoryName: elm[3]?.name })}>
                    <LinearGradient
                      colors={["#E6B8D6", "#F1DCEA"]}
                      style={styles.itemBottom}
                    >
                      <Text
                        style={[
                          styles.itemTitle,
                          { marginBottom: 5, textAlign: "left" },
                        ]}
                      >
                        {elm[3]?.name}
                      </Text>
                      <Text style={[styles.itemDescr, { textAlign: "left" }]}>
                      </Text>
                      <LinearGradient
                        colors={["#F1DCEA", "#E3C3B6"]}
                        locations={[0.99, 1]}
                        style={styles.itemBgPurple}
                      ></LinearGradient>
                      <Image
                        source={{ uri: `https://basrarusbackend.justcode.am/uploads/${elm[3]?.photo}` }}
                        style={styles.categoryImg4}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                  }
                </View>
              }

            })
          }
        </View>
      </ScrollView>
      <Navbar
        navigation={navigation}
        active="Catalogue"
        activeText="Catalogue"
      />
    </LinearGradient >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  title: {
    marginBottom: 21,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    color: "#373737",
  },
  scrollTopContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bigItem: {
    flexGrow: 1,
    width: "100%",
    // paddingHorizontal: 23,
    paddingTop: 287,
    paddingBottom: 48,
    borderRadius: 25,
    alignItems: "center",
  },
  categoryTopRight: {
    width: "49%",
  },
  smallItem: {
    marginBottom: 11,
    paddingTop: 150,
    paddingBottom: 17,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 33,
    // flexGrow: 1,
    flexDirection: 'column',
    borderRadius: 25,
    alignItems: "center",
  },
  categoryImg1: {
    position: "absolute",
    top: 75,
    width: 50,
    height: 188,
    //transform: [{ translateX: 25 }],
  },
  categoryImg2: {
    position: "absolute",
    top: 28,
    // left: "50%",
    transform: [{ translateX: 4 }],
    width: 50,
    height: 118,
  },
  categoryImg3: {
    position: "absolute",
    top: 15,
    left: "34%",
    width: 34,
    height: 139,
    transform: [{ translateX: 13 }],
  },
  itemTitle: {
    fontFamily: "MontserratBold",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  itemDescr: {
    fontFamily: "MontserratRegular",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "center",
    color: "#FFFFFF",
  },
  itemBottom: {
    paddingVertical: 36,
    justifyContent: 'center',
    paddingRight: 30,
    paddingLeft: 130,
    borderRadius: 25,
  },
  categoryImg4: {
    position: "absolute",

    // top: 8,
    left: 54,
    width: 35,
    height: 114,
  },

  itemBgTan: {
    position: "absolute",
    top: 115,
    left: "36%",
    width: 115,
    height: 115,
    borderRadius: 100,
    transform: [{ translateX: -35 }],
  },
  itemBgPink: {
    position: "absolute",
    top: 50,
    left: "34%",
    width: 80,
    height: 80,
    borderRadius: 100,
    transform: [{ translateX: -10 }],
  },
  itemBgGreen: {
    position: "absolute",
    top: 45,
    left: "34%",
    width: 80,
    height: 80,
    borderRadius: 100,
    transform: [{ translateX: -10 }],
  },
  itemBgPurple: {
    position: "absolute",
    left: 30,
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
