import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReturnIcon from "../icons/ReturnIcon";
import { MainButton } from "../components/MainButton";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { SortAction } from '../services/action/action'


export const SortScreen = (props) => {
  const navigation = useNavigation();
  const [type, setType] = useState("raiting");
  const Sort = useSelector((st) => st.sort)
  useEffect(() => {
    if (Sort.type) {
      setType(Sort.type)
    }
  }, [Sort.type])
  const dispatch = useDispatch()
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={{ left: 0, zIndex: 10 }}
            onPress={() => navigation.goBack()}
          >
            <ReturnIcon />
          </TouchableOpacity>
          <Text style={{ ...styles.title }}>Сортировать</Text>
          <View style={styles.sortContainer}>
            <TouchableOpacity
              style={styles.input}
              type={"raiting"}
              onPress={() => setType("raiting")}
            >
              <LinearGradient
                colors={
                  type == "raiting"
                    ? ["#C2ECD4", "#9AC6AD"]
                    : ["#f7f7f7", "#f7f7f7"]
                }
                style={
                  type == "raiting" ? styles.select : styles.selectDisabled
                }
              ></LinearGradient>
              <Text
                style={
                  type == "raiting"
                    ? styles.selectTextActive
                    : styles.selectText
                }
              >
                По рейтингу
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.input}
              type={"popular"}
              onPress={() => setType("popular")}
            >
              <LinearGradient
                colors={
                  type == "popular"
                    ? ["#C2ECD4", "#9AC6AD"]
                    : ["#f7f7f7", "#f7f7f7"]
                }
                style={
                  type == "popular" ? styles.select : styles.selectDisabled
                }
              ></LinearGradient>
              <Text
                style={
                  type == "popular"
                    ? styles.selectTextActive
                    : styles.selectText
                }
              >
                По популярности
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.input}
              type={"discount"}
              onPress={() => setType("discount")}
            >
              <LinearGradient
                colors={
                  type == "discount"
                    ? ["#C2ECD4", "#9AC6AD"]
                    : ["#f7f7f7", "#f7f7f7"]
                }
                style={
                  type == "discount" ? styles.select : styles.selectDisabled
                }
              ></LinearGradient>
              <Text
                style={
                  type == "discount"
                    ? styles.selectTextActive
                    : styles.selectText
                }
              >
                По величине скидки
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <MainButton
          title="Применить"
          onPress={() => {
            dispatch(SortAction(type))
            navigation.goBack()
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingBottom: 40,
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  sortContainer: {
    flex: 1,
    width: "100%",
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 56,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    color: "#373737",
    position: "relative",
    top: 9,
  },
  input: {
    marginBottom: 36,
    flexDirection: "row",
  },
  select: {
    marginRight: 18,
    width: 16,
    height: 16,
    borderRadius: 100,
  },
  selectDisabled: {
    marginRight: 18,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#373737",
    borderRadius: 100,
  },
  selectText: {
    fontFamily: "MontserratRegular",
    fontSize: 18,
    lineHeight: 20,
    color: "#373737",
  },
  selectTextActive: {
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
    lineHeight: 20,
    color: "#373737",
  },
});
