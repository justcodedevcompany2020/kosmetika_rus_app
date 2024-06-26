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

export const Politics = (props) => {
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
                        <Text style={{ fontWeight: 900, fontSize: 13 }}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ ПЕРСОНАЛЬНЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЕЙ</Text>
                    </View>

                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>1. ОБЩИЕ ПОЛОЖЕНИЯ</Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>1.1 </Text> Настоящая политика конфиденциальности персональных данных пользователей (далее – Политика конфиденциальности) разработана в соответствии с требованиями Федерального закона от 27.07.2006 г. №152-ФЗ «О персональных данных» и определяет порядок, условия обработки персональных данных субъектов персональных данных, к которым относятся в том числе пользователи сайта интернет-магазина «PLAZAN» в сети «Интернет»: https://plazan.ru/ – (далее – Сайт) и устанавливает требования по обеспечению безопасности персональных данных Обществом с ограниченной ответственностью «ПЛАЗАН» (далее – Оператор).
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>1.2 </Text> Настоящая Политика конфиденциальности опубликована для неограниченного доступа неопределенного круга лиц в соответствии с частью 2 статьи 18.1 Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных».
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>1.3 </Text>
                            Правовыми основаниями обработки персональных данных является совокупность нормативных правовых и локальных актов, во исполнение которых и в соответствии с которыми Оператор осуществляет обработку персональных данных, в том числе:
                            – Гражданский кодекс Российской Федерации;
                            – Федеральный закон от 27.07.2006 г. №152-ФЗ «О персональных данных»;
                            – Закон Российской Федерации от 07.02.1992 № 2300-1 «О защите прав потребителей»;
                            – Постановление Правительства РФ от 01.11.2012 №1119 «Об утверждении требований к защите персональных данных при их обработке в информационных системах персональных данных»;
                            – Иные нормативные правовые акты, регулирующие отношения, связанные с деятельностью Оператора.
                            – Устав ООО «ПЛАЗАН» в действующей редакции.

                        </Text>
                    </View>




                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>2. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ
                        </Text>
                        <Text style={{ fontSize: 13 }}>В настоящей Политике конфиденциальности используются следующие термины</Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>2.1 </Text>


                            Оператор – Общество с ограниченной ответственностью «ПЛАЗАН» (ОГРН: 1217700414250, ИНН: 7743366015, КПП: 771501001, юридический адрес: 127018, город Москва, вн. тер. г. муниципальный округ Марьина Роща, ул. Сущёвский вал, дом 5, строение 2, ком.7) – осуществляющее обработку персональных данных, а также определяющее цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными, меры по обеспечению безопасности персональных данных.


                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>2.2 </Text>
                            Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому физическому лицу (субъекту персональных данных).
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>2.3 </Text>
                            Пользователь – физическое лицо, имеющее доступ к функционалу Сайта посредством сети «Интернет».


                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>2.4 </Text>
                            Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение Персональных данных.
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>2.5 </Text>
                            Конфиденциальность персональных данных – обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.
                        </Text>
                    </View>

                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>3. СОГЛАСИЕ ПОЛЬЗОВАТЕЛЯ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>3.1 </Text>
                            Пользователь, руководствуясь собственным волеизъявлением, дает согласие на обработку его персональных данных, а также технической информации, указанных в пунктах 4.3, 4.4 настоящей
                            Политики конфиденциальности, Оператором в целях, определенных в пункте 5.1 Политики конфиденциальности.
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>3.2 </Text>
                            Согласие Пользователя на обработку его персональных данных выражается в заполнении Пользователем регистрационных форм на Сайте в целях, предусмотренных пунктом 5.1. настоящей Политики конфиденциальности, и дальнейшем пользовании Сайтом.

                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>3.3 </Text>
                            . Согласие Пользователя действует со дня его выражения до дня отзыва согласия в письменной форме.

                        </Text>
                    </View>


                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>4. ИНФОРМАЦИЯ, ОБРАБАТЫВАЕМАЯ ОПЕРАТОРОМ

                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>4.1 </Text>
                            Оператор осуществляет обработку персональных данных Пользователей, а также технической информации, связанной с Пользователями, в целях, определенных Политикой конфиденциальности.
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>4.2 </Text>
                            Персональные данные Пользователя представляют собой информацию, которую Пользователь предоставляет Оператору при заполнении регистрационных форм на Сайте интернет-магазина «PLAZAN» и последующем использовании Сайта.


                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>4.3 </Text>
                            Оператор вправе обрабатывать следующие персональные данные Пользователя:
                            – фамилия, имя, отчество, пол, дата рождения, адрес места жительства (фактического места проживания, адрес доставки товаров), контактные телефоны, адрес электронной почты;
                            – платежные реквизиты, указанные Пользователем (банк-эмитент пластиковой карты, номер расчетного счета, номер корреспондентского счета, иные финансовые реквизиты, необходимые для осуществления
                            безналичных платежей в сети Интернет);
                            – техническая информация о поведении Пользователя на Сайте, указанная в п. 4.4. настоящей Политики конфиденциальности.
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>4.4 </Text>
                            Технической информацией, связанной с Пользователем, является информация, которая автоматически передается Оператору в процессе использования Сайта с помощью установленного на устройстве Пользователя программного обеспечения. К технической информации, связанной с Пользователем, в частности, относятся IP адрес, файлы cookies. Файлы cookies – это текстовые файлы, доступные Оператору, для обработки информации об активности Пользователя, включая информацию о том, какие страницы сайта посещал Пользователь и о времени, которое Пользователь провел на странице. Пользователь вправе отключить возможность использования файлов cookies в настройках браузера.
                        </Text>
                    </View>


                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>5.ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЕЙ
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>5.1 </Text>
                            Обработка персональных данных Пользователей осуществляется в целях:
                            – Идентификации Пользователя, зарегистрированного на сайте Интернет-магазина «PLAZAN», оформления заказа и (или) заключения Договора купли-продажи товара дистанционным способом.
                            – Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта интернет-магазина «PLAZAN», обработки запросов и заявок от Пользователя, предоставления клиентской и технической поддержки при возникновении проблем, связанных с использованием Сайта.
                            – Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.
                            – Создания учетной записи для совершения покупок дистанционным способом на сайте интернет-магазина «PLAZAN».
                            – Уведомления Пользователя Сайта интернет-магазина «PLAZAN» о состоянии Заказа.
                            – Обработки и получения платежей от Пользователя.
                            – Направления рекламных предложений Пользователям;
                            – Предоставления возможности пользования функционалом Сайта;
                            – Анализа поведения Пользователей на Сайте, в том числе с целью персонализации рекламных, маркетинговых и информационных предложений, направляемых Пользователю.

                        </Text>
                    </View>


                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>6. ПОРЯДОК И УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЕЙ


                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.1 </Text>
                            Обработка персональных данных Пользователя предполагает сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных Пользователей.

                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.2 </Text>
                            Обработка персональных данных Пользователей производится с соблюдением принципов законности, недопущения обработки персональных данных, несовместимой с целями обработки персональных данных.



                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.3 </Text>
                            В процессе обработки персональных данных пользователей Оператором предпринимаются необходимые и достаточные правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных.
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.4 </Text>
                            Персональные данные Пользователей хранятся на серверах, находящихся на территории РФ, в полном соответствии с правовыми и нормативно-техническими требованиями, установленными действующим законодательством Российской Федерации.
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.5 </Text>
                            . Оператор гарантирует и обеспечивает:
                            – конфиденциальность персональных данных Пользователей, обрабатываемых при предоставлении доступа к функционалу Сайта, за исключением случаев, прямо предусмотренных настоящей Политикой конфиденциальности или действующим законодательством Российской Федерации;
                            – использование персональных данных Пользователей в соответствии с целями, указанными в пункте 5.1. настоящей Политики конфиденциальности.

                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.6 </Text>
                            . Оператор вправе передать персональные данные Пользователя третьим лицам в следующих случаях:
                            – Наличия согласия Пользователя на передачу персональных данных, выраженного путем заполнения Пользователем регистрационных форм на Сайте и дальнейшего пользования Сайтом;
                            – Необходимости исполнения определенного договора или соглашения с Пользователем, оформленного на Сайте интернет-магазина «PLAZAN». Передача Оператором персональных данных Пользователя осуществляется, в частности, курьерским службам, организациям почтовой связи, операторам электросвязи, исключительно в целях доставки Пользователю Товара, купленного на Сайте интернет-магазина «PLAZAN».
                            – Исполнения требований уполномоченных органов государственной власти Российской Федерации по основаниям и в порядке, установленным законодательством Российской Федерации;
                            – В целях обеспечения правовой защиты Оператора при нарушении Пользователем настоящей Политики конфиденциальности.
                            – Проведения статистических и иных исследований на основе обезличенных данных.

                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.7 </Text>
                            Осуществление информационных, новостных и рекламных рассылок в адрес Пользователя производится Оператором при наличии согласия Пользователя на получение таких рассылок. При этом регистрация на Сайте означает согласие Пользователя на получение рекламных материалов по каналам связи с использованием любых сообщенных им Оператору при регистрации на Сайте персональных данных. Пользователь в любой момент вправе отказаться от рассылок, на которые он был подписан или иным образом давал свое согласие.

                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.8 </Text>
                            Срок обработки персональных данных Пользователя является неограниченным.
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.9 </Text>
                            Пользователь вправе:
                            – в любой момент отозвать согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора zao@plazan.ru пометкой «Отзыв согласия на обработку персональных данных»;
                            – в случае неточности персональных данных актуализировать свои персональные данные, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора zao@plazan.ru с пометкой «Актуализация персональных данных»;
                            – запрашивать информацию, касающуюся обработки его персональных данных, в том числе содержащую:
                            1) подтверждение факта обработки персональных данных Оператором;
                            2) правовые основания и цели обработки персональных данных;
                            3) цели и применяемые Оператором способы обработки персональных данных;
                            4) наименование и место нахождения Оператора, сведения о лицах (за исключением работников Оператора), которые имеют доступ к персональным данным или которым могут быть раскрыты персональные данные на основании договора с оператором или на основании федерального закона;
                            5) обрабатываемые персональные данные, относящиеся к соответствующему субъекту
                            персональных данных, источник их получения, если иной порядок представления таких данных не предусмотрен федеральным законом;
                            6) сроки обработки персональных данных, в том числе сроки их хранения;
                            7) порядок осуществления субъектом персональных данных прав, предусмотренных настоящим Федеральным законом;
                            8) информацию об осуществленной или о предполагаемой трансграничной передаче данных;
                            9) наименование или фамилию, имя, отчество и адрес лица, осуществляющего обработку персональных данных по поручению Оператора, если обработка поручена или будет поручена такому лицу;
                            10) иные сведения, предусмотренные настоящим Федеральным законом или другими федеральными законами.
                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.10 </Text>
                            Оператор обязан сообщить субъекту персональных данных или его представителю информацию об осуществляемой им обработке персональных данных такого субъекта по запросу последнего.

                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.11 </Text>
                            В случае подтверждения факта неточности персональных данных или неправомерности их обработки, персональные данные подлежат их актуализации Оператором.

                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.12 </Text>
                            При достижении целей обработки персональных данных, а также в случае отзыва субъектом персональных данных согласия на их обработку персональные данные подлежат уничтожению, если:
                            – иное не предусмотрено договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных;
                            – оператор не вправе осуществлять обработку без согласия субъекта персональных данных на основаниях, предусмотренных Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных» или иными федеральными законами;
                            – иное не предусмотрено иным соглашением между оператором и субъектом персональных данных.
                        </Text>
                    </View>


                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>6. РАЗРЕШЕНИЕ СПОРОВ


                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>6.1 </Text>
                            Споры, вытекающие из отношений, регулируемых настоящей Политикой конфиденциальности, разрешаются в порядке, установленном действующим законодательством Российской Федерации.

                        </Text>

                    </View>


                    <View style={{ marginVertical: 20, gap: 10 }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>7. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ


                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>7.1 </Text>
                            Оператор вправе вносить изменения в настоящую Политику конфиденциальности.

                        </Text>
                        <Text style={{ fontSize: 13 }} >
                            <Text style={{ fontWeight: 900, }}>7.2 </Text>
                            Новая редакция Политики конфиденциальности вступает в силу с момента ее размещения, если иное не предусмотрено новой редакцией Политики конфиденциальности.


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
