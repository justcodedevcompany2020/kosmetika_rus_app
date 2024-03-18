import { StyleSheet, Text, View } from "react-native";

export const Notavailable = () => {
    return <View style={[styles.linearGradient]}>
        <Text numberOfLines={1} style={styles.buttonText}>
            Нет в наличии
        </Text>
    </View>

}

const styles = StyleSheet.create({
    linearGradient: {
        backgroundColor: "rgb(191,191,191)",
        borderRadius: 10,
        paddingVertical: 13,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        textAlign: "center",
        fontFamily: "MontserratSemiBold",
        fontSize: 12,
        color: "#fff",
        marginLeft: 10,
    },
});