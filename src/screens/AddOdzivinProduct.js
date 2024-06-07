import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { GetSinglProduct } from "../services/action/action";
import Stars from 'react-native-stars';
import { EmptyStar } from "../icons/EmptyStar";
import { FullStar } from "../icons/FullStar";
import { MainButton } from "../components/MainButton";
let api = 'https://basrarusbackend.justcode.am/api/app'


export const AddOdzivinProduct = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { productId } = route.params;
    const { token } = useSelector((st) => st.static)
    const [product, setProduct] = useState({});
    const dispatch = useDispatch()
    const getSinglProduct = useSelector((st) => st.getSinglProduct)
    const [rate, setRate] = useState(0)
    const [message, setMessage] = useState('')
    useEffect(() => {
        dispatch(GetSinglProduct({ product_id: productId }, token))
    }, [productId])
    useEffect(() => {
        if (getSinglProduct.data) {
            setProduct(getSinglProduct.data)
        }

    }, [getSinglProduct]);

    const Addodziv = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                product_id: productId,
                star: rate,
                message: message
            }),
        };

        if (message && rate) {
            fetch(`${api}/add_comment`, requestOptions)
                .then(response => response.json())
                .then(r => {
                    if (r.status) {
                        navigation.navigate('ThanksScreen')
                    }

                })
                .catch(error => {
                });
        }

    }
    return (
        <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>

            <ScrollView style={styles.scroll}>
                <View style={styles.inner}>
                    {product?.photos?.length > 0 && <Swiper
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
                                // source={require("../img/itemPic.png")}
                                ></Image>
                            </View>
                        })
                        }
                    </Swiper>}
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.title}>{product.name}</Text>
                        <Stars
                            half={true}
                            default={0}
                            update={(val) => { setRate(val) }}
                            spacing={4}
                            starSize={40}
                            count={5}
                            fullStar={<FullStar />}
                            emptyStar={<EmptyStar />}
                            halfStar={<FullStar />}
                        />
                        <Text style={{ textAlign: 'center', marginVertical: 10, color: '#71727A' }}>Коснитесь для оценки</Text>

                        <TextInput
                            multiline={true}
                            onChangeText={(e) => setMessage(e)}
                            placeholder="Ваше мнение о товаре"
                            style={{ width: '100%', borderWidth: 1, borderColor: 'rgba(55,55,55,0.33)', marginTop: 30, borderRadius: 15, alignItems: 'flex-start', justifyContent: "flex-start", padding: 20 }} />
                        <View style={{ marginTop: 20 }}>
                            <MainButton onPress={() => Addodziv()} title="Оставить отзыв" />
                        </View>
                    </View>


                    <ReturnIcon
                        style={styles.retunIcon}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </ScrollView>
            <Navbar navigation={navigation} active="Catalogue" />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: "center",
        width: "100%",
        backgroundColor: "#f7f7f7",
        height: '100%',
    },
    retunIcon: {
        left: 10,
        top: 10,
        zIndex: 10,
    },
    mainContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "flex-start",
    },
    title: {
        marginBottom: 40,
        fontFamily: "MontserratBold",
        fontSize: 20,
        lineHeight: 24,
        color: "#373737",
        textAlign: 'center'
    },
    subTitle: {
        marginBottom: 10,
        fontFamily: "MontserratBold",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#373737",
    },
    descr: {
        marginBottom: 20,
        fontFamily: "MontserratRegular",
        fontSize: 15,
        lineHeight: 18,
        textAlign: "center",
        color: "#71727A",
    },
    subDescr: {
        marginBottom: 25,
        fontFamily: "MontserratLight",
        fontSize: 14,
        lineHeight: 17,
        textAlign: "center",
        color: "#71727A",
    },
    buttonContainer: {
        paddingHorizontal: 20,
        width: "100%",
    },
    slide1: {
        flexDirection: "row",
        justifyContent: "center",
    },
    scroll: {
        flex: 1,
        width: "100%",
    },
    inner: {
        paddingBottom: 120,
        padding: 30,
    },
    slidePic: {
        left: 10,
        width: 275,
        height: 275,
    },
});
