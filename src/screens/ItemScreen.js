import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import ReturnIcon from "../icons/ReturnIcon";
import { MainButton } from "../components/MainButton";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import AccIcon from "../icons/AccIcon";
import { Navbar } from "../components/Navbar";
import Swiper from "react-native-swiper";
import RatingBigIcon from "../icons/RatingIcon";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { AddToBasketAction, GetSinglProduct, RemoveFromBasketAction } from "../services/action/action";
import { Stare2 } from "../icons/stare2";

export const ItemScreen = (props) => {
  const navigation = useNavigation();
  const [rotation, setRotation] = useState(180);
  const [product, setProduct] = useState({});

  const productId = props.route.params.productId;
  const screen = props.route.params.screen;
  const getSinglProduct = useSelector((st) => st.getSinglProduct)
  const { token } = useSelector((st) => st.static)
  const [addTobasket, setAddTobasket] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (getSinglProduct.data.data) {
      setProduct(getSinglProduct.data.data)
    }
    if (getSinglProduct.data?.data?.basket_auth_user.length == 0) {
      setAddTobasket(getSinglProduct.data?.data?.basket_auth_user.length > 0)
    }
  }, [getSinglProduct]);



  useEffect(() => {
    dispatch(GetSinglProduct({ product_id: productId }, token))
  }, [productId])


  const AddRevoeBasket = () => {
    if (addTobasket == 0) {
      setAddTobasket(true)
      dispatch(AddToBasketAction({ product_id: productId }, token))
    }
    else {
      setAddTobasket(false)
      dispatch(RemoveFromBasketAction({ product_id: productId }, token))
    }
  }

  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.inner}>
          {product?.photos?.length > 0 && <Swiper
            index={1}
            style={{
              height: 320,
              paddingTop: 20,
              borderBottomWidth: 1,
              borderStyle: "solid",
              borderBottomColor: "rgba(55, 55, 55, 0.15)",
            }}
            showsPagination={true}
            dot={
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 24,
                  backgroundColor: "rgba(219, 195, 160, 0.25)",
                  marginHorizontal: 6,
                }}
              ></View>
            }
            activeDot={
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: "#DBC3A0",
                  borderRadius: 24,
                  marginHorizontal: 6,
                }}
              ></View>
            }
          >
            {product?.photos?.map((elm, i) => {
              return <View key={i} style={styles.slide1}>
                <Image
                  style={styles.slidePic}
                  source={{ uri: `https://basrarusbackend.justcode.am/uploads/${elm.photo}` }}
                ></Image>
              </View>
            })
            }

          </Swiper>}
          <ReturnIcon
            style={styles.retunIcon}
            onPress={() => {
              if (screen == 'main') {
                navigation.navigate("Main")
              }
              else {
                navigation.goBack()
              }
            }

            }
          />
          {product.hit_status != 0 && <LinearGradient
            colors={["#DBC3A0", "#DBC3A0"]}
            style={styles.hitBlock}
          >
            {<Text style={styles.hitBlockText}>Хит</Text>}
          </LinearGradient>}
          <View style={styles.mainContainer}>
            <Text style={styles.title}>{product.name}</Text>
            {getSinglProduct.data?.rate?.length != 0 ?
              <View style={styles.rateContainer}>
                <RatingBigIcon />
                <RatingBigIcon />
                <RatingBigIcon />
                <RatingBigIcon />
                <RatingBigIcon />
                <Text style={{ marginHorizontal: 10 }}>{
                  getSinglProduct.data?.data?.rate?.length == 0 ? 5 : getSinglProduct.data.data?.rate_avg_star?.slice(0, 3)
                }</Text>
                <TouchableOpacity>
                  <Text onPress={() => navigation.navigate('OdzivScreen', { productId })} style={styles.reviewText}>{getSinglProduct?.data?.comments?.length} отзывов</Text>
                </TouchableOpacity>
              </View> : <View style={[styles.rateContainer, { gap: 3 }]}>
                <Stare2 />
                <Stare2 />
                <Stare2 />
                <Stare2 />
                <Stare2 />
                <Text onPress={() => navigation.navigate('OdzivScreen', { productId })} style={[styles.reviewText]}>Пока нет отзывов</Text>
              </View>
            }
            <View style={styles.paramContainer}>
              <Text style={styles.paramText}>Артикул: </Text>
              <Text style={[styles.paramText, { marginRight: 8 }]}>
                {product.vendor_code}
              </Text>
              <Text style={[styles.paramText, { marginRight: 8 }]}>|</Text>
              <Text style={styles.paramText}>Объем: </Text>
              <Text style={styles.paramText}>{product.volume} мл</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.currentPrice}>{Math.round(product.price - (product.price * product.discount / 100))} ₽</Text>
              <Text style={styles.prevPrice}>{product.price} ₽</Text>
              {product.discount > 0 && <View style={styles.discount}>
                <Text style={styles.discountText}>{product.discount} %</Text>
              </View>}
            </View>
            <Collapse
              style={{ marginBottom: 20 }}
              onPress={() => setRotation(rotation + 180)}
            >
              <CollapseHeader style={styles.accHead}>
                <View>
                  <Text style={styles.accTitle}>Описание</Text>
                </View>
                <AccIcon
                  style={{ transform: [{ rotate: `${rotation}deg` }] }}
                />
              </CollapseHeader>
              <CollapseBody style={styles.accBody}>
                <Text style={styles.accText}>
                  {product.characteristics}
                </Text>
              </CollapseBody>
            </Collapse>
            <Collapse
              style={{ marginBottom: 20 }}
              onToggle={() => setRotation(rotation + 180)}
            >
              <CollapseHeader style={styles.accHead}>
                <View>
                  <Text style={styles.accTitle}>Применение</Text>
                </View>
                <AccIcon
                  style={{ transform: [{ rotate: `${rotation}deg` }] }}
                />
              </CollapseHeader>
              <CollapseBody style={styles.accBody}>
                <Text style={styles.accText}>{product.description}</Text>
              </CollapseBody>
            </Collapse>
            <Collapse
              style={{ marginBottom: 20 }}
              onToggle={() => setRotation(rotation + 180)}
            >
              <CollapseHeader style={styles.accHead}>
                <View>
                  <Text style={styles.accTitle}>Состав</Text>
                </View>
                <AccIcon
                  style={{ transform: [{ rotate: `${rotation}deg` }] }}
                />
              </CollapseHeader>
              <CollapseBody style={styles.accBody}>
                <Text style={styles.accText}>{product.compound}</Text>
              </CollapseBody>
            </Collapse>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <MainButton
              basket={addTobasket}
              title={
                !addTobasket ? `В корзину  ${Math.round(product.price - (product.price * product.discount / 100))} ₽` :
                  `в корзине ✓`
              }
              onPress={() =>
                AddRevoeBasket()
              }
            />
          </View>
        </View>
      </ScrollView>
      <Navbar
        navigation={navigation}
        active="Catalogue"
        activeText="Catalogue"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexGrow: 1,
    alignItems: "center",
  },
  inner: {
    paddingBottom: 120,
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 29,
  },
  slide1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  slide2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  slide3: {
    flexDirection: "row",
    justifyContent: "center",
  },
  slide4: {
    flexDirection: "row",
    justifyContent: "center",
  },
  slide5: {
    flexDirection: "row",
    justifyContent: "center",
  },
  slidePic: {
    left: 10,
    width: 275,
    height: 275,
  },
  title: {
    marginBottom: 10,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 20,
    color: "#373737",
  },
  rateContainer: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 17,
    color: "#71727A",
  },
  paramContainer: {
    marginBottom: 14,
    flexDirection: "row",
  },
  paramText: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 17,
    color: "#71727A",
  },

  priceContainer: {
    marginBottom: 22,
    flexDirection: "row",
    alignItems: "center",
  },
  currentPrice: {
    marginRight: 15,
    fontFamily: "MontserratMedium",
    fontSize: 24,
    color: "#373737",
  },
  prevPrice: {
    marginRight: 8,
    fontFamily: "MontserratRegular",
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "#71727A",
    opacity: 0.5,
  },
  discount: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#DBC3A0",
    borderRadius: 10,
  },
  discountText: {
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 18,
    color: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  accHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accTitle: {
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 17,
    color: "#373737",
  },
  accText: {
    fontFamily: "MontserratRegular",
    fontSize: 13,
    lineHeight: 16,
    color: "#373737",
  },
  accBody: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "rgba(55, 55, 55, 0.15)",
  },

  retunIcon: {
    left: 10,
    top: 10,
    zIndex: 10,
  },
  hitBlock: {
    position: "absolute",
    top: 22,
    right: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 34,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  hitBlockText: {
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 20,
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
});
