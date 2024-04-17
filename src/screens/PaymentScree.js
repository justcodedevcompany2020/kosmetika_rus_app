import React from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Linking,
} from "react-native";
import { Navbar } from "../components/Navbar";
import ArrowIcon from "../icons/ArrowIcon";
import ReturnIcon from "../icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export const PaymentScree = (props) => {
    const openLink = () => {
        Linking.openURL('https://docs.google.com/document/d/1ckFf2uoO565ULPbZ-Z_D95NGSnbA7O1g/edit');
    };
    const navigation = useNavigation();
    return (
        <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.mainContainer}>
                    <View style={styles.containerTop}>
                        <Text style={styles.title}>Информация</Text>
                        <ReturnIcon
                            style={{ left: 0, top: -3 }}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 100 }}>
                    <View>
                        <Text style={{ fontWeight: 900, fontSize: 15 }}>ОПЛАТА И ДОСТАВКА
                        </Text>
                        <Text style={{ fontSize: 13 }}>Стоимость доставки для Юридических лиц платная.
                        </Text>
                    </View>

                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontWeight: 900, fontSize: 13 }}>Условия доставки по Москве:
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>Доставка заказов осуществляется курьером после подтверждения заказа в течение дня или на следующий день.
                            С понедельника по пятницу доставка заказов по Москве производится с 10:00 до 19:00.
                            В субботу и воскресенье доставка по Москве осуществляется по предварительному согласованию.

                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Самовывоз по предварительному звонку, в будние дни с 10:00  до 17:30 часов из офиса
                            по адресу: г. Москва, ул. Сущёвский вал, д.5, стр.2, ком 7, метро Савёловская, выход 4 или 5.


                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Стоимость доставки курьером заказов по Москве от 3 000 руб. – бесплатно
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Стоимость доставки курьером заказов по Москве до 3 000 руб. – 250 руб.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Стоимость доставки курьером заказов по Москве за МКАД – 400 руб.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Стоимость доставки до пункта выдачи СДЭК по Москве от 1 500 руб – бесплатно
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Стоимость доставки заказов до пункта выдачи СДЭК по Москве  до 1 500 руб. – 150 руб.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: 900 }}>
                            Доставка по России:
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Доставка заказов осуществляется курьерской службой СДЭК или Почтой России. Выберите удобный для Вас адрес пункта выдачи заказов www.cdek.ru и укажите его при оформлении заказа.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Сроки доставки в регионы рассчитываются индивидуально, среднее время доставки — 2-10 дней
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Стоимость доставки заказов до пункта выдачи СДЭК / Почты России по России от 5 000 руб. – бесплатно.

                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Стоимость доставки заказов до пункта выдачи СДЭК / Почты России до 5 000 руб. – рассчитывается согласно тарифам транспортной компании.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>

                            СДЭК: Центральная часть РФ – 250 руб
                            Южная, Северная часть РФ, Приволжье и Урал – 350 руб
                            Сибирь и Дальний Восток - 450 руб

                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Почта России: Центральная часть РФ – 400 руб
                            Южная, Северная часть РФ, Приволжье и Урал – 500 руб
                            Сибирь и Дальний Восток - 600 руб
                            + комиссия банка за наложенный перевод.

                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Обращаем ваше внимание: доставка заказов Почтой России в другие города и прочие населенные пункты России возможна только после внесения полной предоплаты по QR коду СБП.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: 900 }}>
                            Оплата онлайн или оплата банковской картой онлайн на сайте

                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Для выбора оплаты заказа с помощью банковской карты, на соответствующей странице необходимо нажать кнопку «Оплата заказа банковской картой». Оплата происходит через ПАО «Сбербанк России» и возможна с использованием банковских карт (Visa, Mastercard, МИР) платежных систем.
                            Описание процесса передачи данных/информация о SSL-шифровании:
                            Для оплаты заказа вы будете перенаправлены на страницу платежного шлюза ПАО «Сбербанк России» для дальнейшего ввода реквизитов вашей карты. Пожалуйста, приготовьте вашу карту заранее. Соединение с платежным шлюзом и передача информации осуществляются в защищенном режиме, с использованием протокола шифрования SSL.

                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: 900 }}>
                            Оплата при получении

                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            банковским переводом (наложенным платежом) при получении заказа в пункте выдачи СДЭК
                            наличными курьеру или оплата по QR СБП, если ваш заказ оформлен по Москве
                            наличными или банковской картой при самовывозе из офиса, расположенного по адресу:
                            г. Москва, ул. Сущёвский вал, д.5, стр.2
                            безналичная оплата для юридических лиц
                        </Text>
                    </View>

                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: 900 }}>
                            Дополнительная информация


                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            Товар резервируется на 7 дней. Если в указанный срок оплата не поступает на расчётный счёт магазина — заказ аннулируется.
                            Чтобы ускорить обработку заказа, после перевода денег сообщите нам об этом по эл. почте: zao@plazan.ru или по телефонам: 8 (495) 212-14-64, 8 (903) 773-83-38.

                        </Text>
                    </View>

                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: 900 }}>
                            ВАЖНО!


                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontSize: 13 }}>
                            При получении заказа внимательно осматривайте его. Претензии по внешнему виду принимаются только в присутствии курьера.
                            Напоминаем, что в соответствии с Постановление Правительства РФ от 19.01.1998 N 55 (ред. от 30.05.2018) косметические товары возврату и обмену не подлежат.
                        </Text>
                    </View>



                </View>





            </ScrollView>

            <Navbar active="Profile" activeText="Profile" />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    containerTop: {
        position: "relative",
        width: "100%",
        marginBottom: 47,
    },
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
    },
    scroll: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 20,
    },
    mainContainer: {
        position: "relative",
        width: "100%",
        alignItems: "center",
        paddingTop: 30,
    },
    title: {
        fontFamily: "MontserratBold",
        fontSize: 18,
        lineHeight: 22,
        color: "#373737",
        textAlign: "center",
    },
    infoItem: {
        marginBottom: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    infoItemText: {
        fontFamily: "MontserratRegular",
        fontSize: 15,
        lineHeight: 20,
        color: "#373737",
    },

});
