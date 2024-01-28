import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Platform,
  UIManager,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { MainButton } from "../components/MainButton";
import ReturnIcon from "../icons/ReturnIcon";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import { LinearGradient } from "expo-linear-gradient";
import AccIcon from "../icons/AccIcon";
import { useNavigation } from "@react-navigation/native";

export const FiltersScreen = () => {
  const navigation = useNavigation();
  const [rotation, setRotation] = useState(180);
  const [skinType, setSkinType] = useState("dry");
  const [position, setPosition] = useState(30);

  function handleOnPress() {
    if (position == 0) {
      setPosition(position + 30);
    } else {
      setPosition(0);
    }
  }

  return (
    <LinearGradient
      colors={["#f7f7f7", "#fff"]}
      // position={[1, 0]}
      style={styles.container}
    >
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <View style={{ width: 74 }}>
              <ReturnIcon
                style={{ position: "relative", top: 0 }}
                onPress={() => navigation.goBack()}
              />
            </View>
            <Text style={{ ...styles.title, top: 1 }}>Фильтры</Text>
            <Pressable style={{ ...styles.topBtn, top: -1 }}>
              <Text style={styles.topBtnText}>Сбросить</Text>
            </Pressable>
          </View>
          <Collapse
            style={{ marginBottom: 36 }}
            onPress={() => setRotation(rotation + 180)}
          >
            <CollapseHeader style={styles.accHead}>
              <View>
                <Text style={styles.accTitle}>Категория</Text>
              </View>
              <AccIcon style={{ transform: [{ rotate: `${rotation}deg` }] }} />
            </CollapseHeader>
            <CollapseBody style={styles.accBody}>
              <Text>Here you can find a descripton of a category item</Text>
            </CollapseBody>
          </Collapse>
          <Collapse
            style={{ marginBottom: 36 }}
            onPress={() => setRotation(rotation + 180)}
          >
            <CollapseHeader style={styles.accHead}>
              <View>
                <Text style={styles.accTitle}>Возрастная группа</Text>
              </View>
              <AccIcon style={{ transform: [{ rotate: `${rotation}deg` }] }} />
            </CollapseHeader>
            <CollapseBody style={styles.accBody}>
              <Text>Here you can find a descripton of a category item</Text>
            </CollapseBody>
          </Collapse>
          <Collapse
            style={{ marginBottom: 36 }}
            onToggle={() => setRotation(rotation + 180)}
          >
            <CollapseHeader style={styles.accHead}>
              <View>
                <Text style={styles.accTitle}>Тип кожи</Text>
              </View>
              <AccIcon style={{ transform: [{ rotate: `${rotation}deg` }] }} />
            </CollapseHeader>
            <CollapseBody style={styles.accBody}>
              <TouchableOpacity
                style={styles.select}
                skinType="normal"
                onPress={() => setSkinType("normal")}
              >
                <LinearGradient
                  colors={
                    skinType == "normal"
                      ? ["#C2ECD4", "#9AC6AD"]
                      : ["#fff", "#f7f7f7"]
                  }
                  style={skinType == "normal" ? styles.btn : styles.btnDisabled}
                >
                  <Text
                    style={
                      skinType == "normal"
                        ? styles.btnText
                        : styles.btnTextDisabled
                    }
                  >
                    Нормальная
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.select}
                skinType="dry"
                onPress={() => setSkinType("dry")}
              >
                <LinearGradient
                  colors={
                    skinType == "dry"
                      ? ["#C2ECD4", "#9AC6AD"]
                      : ["#fff", "#f7f7f7"]
                  }
                  style={skinType == "dry" ? styles.btn : styles.btnDisabled}
                >
                  <Text
                    style={
                      skinType == "dry"
                        ? styles.btnText
                        : styles.btnTextDisabled
                    }
                  >
                    Сухая
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.select}
                skinType="wet"
                onPress={() => setSkinType("wet")}
              >
                <LinearGradient
                  colors={
                    skinType == "wet"
                      ? ["#C2ECD4", "#9AC6AD"]
                      : ["#fff", "#f7f7f7"]
                  }
                  style={skinType == "wet" ? styles.btn : styles.btnDisabled}
                >
                  <Text
                    style={
                      skinType == "wet"
                        ? styles.btnText
                        : styles.btnTextDisabled
                    }
                  >
                    Жирная
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.select}
                skinType="combined"
                onPress={() => setSkinType("combined")}
              >
                <LinearGradient
                  colors={
                    skinType == "combined"
                      ? ["#C2ECD4", "#9AC6AD"]
                      : ["#fff", "#f7f7f7"]
                  }
                  style={
                    skinType == "combined" ? styles.btn : styles.btnDisabled
                  }
                >
                  <Text
                    style={
                      skinType == "combined"
                        ? styles.btnText
                        : styles.btnTextDisabled
                    }
                  >
                    Комбинированная
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </CollapseBody>
          </Collapse>
          <View style={[styles.bottomContainer, { marginBottom: 36 }]}>
            <Text style={styles.accTitle}>В наличии</Text>
            <TouchableOpacity
              onPress={handleOnPress}
              style={{
                shadowColor: "gray",
                shadowOpacity: 0.3,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 0 },
              }}
            >
              <LinearGradient
                colors={
                  position == 0
                    ? ["#f7f7f7", "#c3c3c3"]
                    : ["#F7ECE8", "#E3C3B6"]
                }
                style={styles.checkbox}
              >
                <View
                  style={{
                    position: "absolute",
                    left: position,
                    top: 0,
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                    backgroundColor: "white",
                    marginLeft: 0,
                  }}
                ></View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <MainButton
          title="Показать 86 товаров"
          onPress={() => navigation.navigate("SearchResult")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  scroll: {
    paddingTop: 30,
    flex: 1,
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  topContainer: {
    marginBottom: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    color: "#373737",
  },
  topBtnText: {
    fontFamily: "MontserratLight",
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(55, 55, 55, 0.5)",
  },
  checkbox: {
    width: 60,
    height: 30,
    borderRadius: 100,
    position: "relative",
    backgroundColor: "teal",
  },
  checkboxCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "white",
  },
  accHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  accTitle: {
    fontFamily: "MontserratRegular",
    fontSize: 18,
    lineHeight: 20,
    color: "#373737",
  },
  accBody: {
    paddingTop: 36,
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  select: {
    alignItems: "flex-start",
    marginBottom: 10,
  },
  btn: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnDisabled: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.15)",
  },
  btnText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
    lineHeight: 20,
    color: "#fff",
  },
  btnTextDisabled: {
    fontFamily: "MontserratLight",
    fontSize: 18,
    lineHeight: 20,
    color: "#373737",
  },
});
