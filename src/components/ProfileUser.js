import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AvatarEditIcon from "../icons/AvatarEditIcon";

export const ProfileUser = (props, { userName }) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.avatarFrame}>
        <Image
          style={styles.profilePhoto}
          source={{ uri: `https://basrarusbackend.justcode.am/uploads/${props.userAvatar}` }}
        />
        <AvatarEditIcon style={{ position: "absolute", top: 65, right: 0 }} />
      </View>
      <Text style={styles.profilePhone}>+{props.phone}</Text>
      <Text style={styles.profileName}>{props.name} {props.surname} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePhoto: {
    width: 92,
    height: 92,
    borderRadius: 92
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePhone: {
    marginBottom: 4,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#373737",
    marginTop: 13,
  },
  profileName: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    color: "#71727A",
  },
  avatarFrame: {
    width: 93,
    height: 93,
    borderRadius: 100,
  },
});
