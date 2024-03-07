import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import RatingIcon from "../icons/RatingIcon";
import { CartButton } from "../components/СartButton";
import SummaryBgIcon from "../icons/SummaryBgIcon";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AddToBasketAction, RemoveFromBasketAction } from "../services/action/action";

export const CatalogueItem = ({
  rate,
  title,
  currentPrice,
  prevPrice,
  sale,
  style,
  image,
  isbasket,
  id,
  main
}) => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const { token } = useSelector((st) => st.static)
  const TruncatedText = (texts) => {
    let text = JSON.stringify(texts)
    const truncatedText = text.length > 5 ? `${text.substring(0, 5)}` : text;
    return truncatedText
  };
  if (!sale) {
    styles.saleBox = {
      flex: 0,
      position: "absolute",
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    };
  } else {
    styles.saleBox = {
      flex: 0,
      position: "absolute",
      top: 0,
      left: 0,
      paddingHorizontal: 8,
      paddingVertical: 11,
      backgroundColor: "#DBC3A0",
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
    };
  }
  const AddRevoeBasket = () => {
    if (basket) {
      dispatch(RemoveFromBasketAction({ product_id: id }, token))
    }
    else {
      dispatch(AddToBasketAction({ product_id: id }, token))
    }
    setBasket(!basket)

  }
  const truncateText = (text) => {
    if (text.length <= 45) {
      return text;
    } else {
      return text.substring(0, 45) + '...';
    }
  };

  const [basket, setBasket] = useState(isbasket)
  return (
    <TouchableOpacity
      style={[styles.item, style]}
      onPress={() => navigation.navigate("CatalogTab", {
        screen: "Item", params: {
          screen: main,
          productId: id
        },
      })}
    >
      {sale > 0 && <View style={styles.saleBox}>
        <Text style={styles.saleText}>{sale}%</Text>
      </View>}
      <View style={styles.rating}>
        <RatingIcon />
        <Text style={styles.ratingText}>{TruncatedText(rate)}</Text>
      </View>
      <View style={styles.centerContainer}>
        <SummaryBgIcon style={{ position: "absolute", top: "15%" }} />
        <Image
          style={styles.image}
          source={{ uri: `https://basrarusbackend.justcode.am/uploads/${image}` }}
        />
        <Text style={styles.title}>{truncateText(title)}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>{currentPrice} ₽</Text>
          {sale > 0 && <Text style={styles.prevPrice}>{prevPrice} ₽</Text>}
        </View>
      </View>
      <CartButton basket={basket} onPress={() => AddRevoeBasket()} title={basket ? 'Удалить из корзины' : ' В корзину'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ratingText: {
    fontFamily: "MontserratRegular",
  },
  item: {
    marginBottom: 11,
    marginRight: 11,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: 150,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.1)",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  saleBox: {
    flex: 0,
    position: "absolute",
    top: 0,
    left: 0,
    paddingHorizontal: 8,
    paddingVertical: 11,
    backgroundColor: "#DBC3A0",
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  saleBoxEmpty: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: "#fff",
  },
  saleText: {
    fontFamily: "MontserratExtraBold",
    fontSize: 14,
    lineHeight: 14,
    color: "#FFFFFF",
  },
  rating: {
    position: "absolute",
    top: 9,
    right: 10,
    flexDirection: "row",
  },
  centerContainer: {
    alignItems: "center",
  },
  image: {
    width: 58,
    height: 116,
    right: 3,
  },
  title: {
    marginBottom: 7,
    fontFamily: "MontserratRegular",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "center",
    color: "#373737",
    height: 25,
  },
  priceContainer: {
    marginBottom: 14,
    flexDirection: "row",
  },
  currentPrice: {
    marginRight: 7,
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    lineHeight: 15,
    textAlign: "center",
    color: "#373737",
  },
  prevPrice: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 15,
    textAlign: "center",
    textDecorationLine: "line-through",
    color: "#373737",
    opacity: 0.35,
  },
});
