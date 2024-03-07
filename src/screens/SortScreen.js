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
import { GetCategory, SortAction } from '../services/action/action'
import { Radio } from "../icons/Radio";


export const SortScreen = (props) => {
  const navigation = useNavigation();
  const [type, setType] = useState("raiting");
  const Sort = useSelector((st) => st.sort)
  const { getCategory } = useSelector((st) => st)

  useEffect(() => {
    if (Sort.type) {
      setType(Sort.type)
    }
  }, [Sort.type])
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(GetCategory(1))
  }, [])


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
              <Radio type={type != 'raiting'} />
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
            <TouchableOpacity
              style={styles.input}
              type={"discount"}
              onPress={() => setType("discount")}
            >
              <Radio type={type == 'raiting'} />

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
    paddingLeft: 20
  },
  selectTextActive: {
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
    lineHeight: 20,
    color: "#373737",
    paddingLeft: 20
  },
});
