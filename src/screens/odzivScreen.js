import React, { useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { GetSinglProduct } from "../services/action/action";
import { useDispatch, useSelector } from "react-redux";
import RatingBigIcon from "../icons/RatingIcon";

import { LinearGradient } from "expo-linear-gradient";
import { MainButton } from "../components/MainButton";
import Stars from 'react-native-stars';
import { EmptyStar2 } from "../icons/EmptyStar2";


export const OdzivScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { productId } = route.params;
    const { token } = useSelector((st) => st.static)
    const dispatch = useDispatch()
    const getSinglProduct = useSelector((st) => st.getSinglProduct)
    useEffect(() => {
        dispatch(GetSinglProduct({ product_id: productId }, token))
    }, [productId])

    return (
        <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.mainContainer}>
                    <ReturnIcon
                        style={{ top: 0, left: 10 }}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.title}>Все отзывы {getSinglProduct?.data?.comments?.length}</Text>
                </View>
                <View style={styles.inner}>
                    <View>
                        <Text style={styles.title}>{getSinglProduct.data?.data?.name}</Text>
                        {getSinglProduct.data.data?.rate?.length != 0 ? <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Stars
                                half={false}
                                default={getSinglProduct.data.data?.rate?.length == 0 ? 5 : getSinglProduct.data.data?.rate_avg_star?.slice(0, 1)}
                                disabled={true}
                                spacing={1}
                                count={5}
                                fullStar={<RatingBigIcon />}
                                emptyStar={<EmptyStar2 />}
                                halfStar={<RatingBigIcon />}
                            />
                            <Text style={{ marginHorizontal: 10, fontWeight: "600" }}>{
                                getSinglProduct.data.data?.rate?.length == 0 ? 5 : getSinglProduct.data.data?.rate_avg_star?.slice(0, 3)
                            }</Text>
                        </View> :
                            <View>
                                <Text>Пока нет отзывов</Text>
                            </View>
                        }
                        {getSinglProduct?.data?.comments?.map((elm, i) => {
                            if (elm.status == 1)
                                return <View key={i} style={{ borderWidth: 1, borderColor: 'rgba(55,55,55,0.23)', width: '100%', padding: 20, marginBottom: 20, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <Text style={{ fontSize: 16, color: '#37377' }}>{elm.user.name}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Stars
                                                half={false}
                                                default={elm.star}
                                                disabled={true}
                                                spacing={1}
                                                count={5}
                                                fullStar={<RatingBigIcon />}
                                                emptyStar={<EmptyStar2 />}
                                                halfStar={<RatingBigIcon />}
                                            />
                                            <Text style={{ marginHorizontal: 3, fontWeight: "600" }}>{
                                                elm.star
                                            }</Text>
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#373737' }}>
                                        {elm.created_at.slice(0, 10)}
                                    </Text>
                                    <Text style={{ marginTop: 20, fontSize: 14, color: '#373737' }}>
                                        {elm.message}
                                    </Text>
                                </View>

                        })}
                    </View>

                </View>
            </ScrollView>
            {(!getSinglProduct.data.auth_user_comment) && <View style={{ position: 'absolute', bottom: 100, width: '50%' }}>
                <MainButton onPress={() => navigation.navigate('AddOdzivinProduct', { productId })} title="Оставить отзыв" />
            </View>}
            <Navbar navigation={navigation} active="Profile" />
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
        paddingBottom: 110,
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
    },
    subTitle: {
        marginBottom: 10,
        fontFamily: "MontserratBold",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#373737",
    },
    inner: {
        paddingBottom: 120,
        paddingHorizontal: 20
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
    scroll: {
        flex: 1,
        width: "100%",
    },
});
