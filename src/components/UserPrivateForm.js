import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import {} from "react-native";

export const UserPrivateForm = () => {
  return (
    <View>
      <TextInput
        placeholder="Имя"
        style={styles.input}
        placeholderTextColor="rgba(55, 55, 55, 0.5)"
        keyboardType="default"
        inputMode="text"
        cursorColor="#9AC6AD"
      />
      <TextInput
        placeholder="Фамилия"
        style={styles.input}
        placeholderTextColor="rgba(55, 55, 55, 0.5)"
        keyboardType="default"
        inputMode="text"
        cursorColor="#9AC6AD"
      />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        placeholderTextColor="rgba(55, 55, 55, 0.5)"
        keyboardType="email-address"
        inputMode="email"
        cursorColor="#9AC6AD"
      />
      <TextInput
        placeholder="Дата рождения"
        style={styles.input}
        placeholderTextColor="rgba(55, 55, 55, 0.5)"
        keyboardType="default"
        inputMode="text"
        cursorColor="#9AC6AD"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    height: 60,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.15)",
    borderRadius: 10,
    fontFamily: "MontserratRegular",
    fontSize: 15,
    backgroundColor: "#fff",
  },
});
