import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CatalogueItem } from "./CatalogueItem";

export const Bestsellers = (props) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.containerTop}>
        <Text style={styles.title}>{props.name}</Text>
        <TouchableOpacity

          style={styles.btn}
          onPress={() => navigation.navigate("CatalogTab", {
            screen: "Category", params: {
              podborka_id: props.id,
              categoryName: props.name
            },
          })}
        >
          <Text style={styles.btnText}>Смотреть все</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBottom}>
        <ScrollView
          style={{ ...styles.list, paddingHorizontal: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return <View style={{ height: "100%", width: 11 }} />;
          }}
        >
          {
            props.product.map((elm, i) => {
              return <CatalogueItem
                style={{}}
                id={elm.id}
                sale={elm.discount}
                main={props.main}
                isbasket={elm?.basket_auth_user?.length}
                image={elm.photos[0].photo}
                key={i}
                rate={elm.rate?.length == 0 ? 5 : elm.rate}
                title={elm.name}
                currentPrice={Math.round(elm.price - (elm.price * elm.discount / 100))}
                prevPrice={elm.price}
              />
            })}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
  container: {
    width: "100%",
  },
  containerTop: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  containerBottom: {
    width: "100%",
  },
  title: {
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
    lineHeight: 20,
    color: "#373737",
  },
  btnText: {
    fontFamily: "MontserratLight",
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(31, 32, 36, 0.5)",
  },
});
