import { Text, View } from "react-native"
import { ThanksSvg } from "../icons/Thanks"
import { Navbar } from "../components/Navbar"
import { useNavigation } from "@react-navigation/native";
import CloseBtnIcon from "../icons/CloseBtnIcon";


export const ThanksScreen = () => {
    const navigation = useNavigation();

    return <View style={{ width: '100%', height: '100%', justifyContent: 'center', gap: 30, alignItems: 'center' }}>
        <CloseBtnIcon
            onPress={() => {
                navigation.navigate("Main");
            }}
        />
        <ThanksSvg />
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Спасибо за отзыв!</Text>
        <Text style={{
            paddingHorizontal: 80, textAlign: 'center', fontSize: 15, color: '#71727A'
        }}>Вы помогаете делать
            нашу продукцию ещё лучше.</Text>
        <Navbar navigation={navigation} active="Catalogue" />

    </View >
}