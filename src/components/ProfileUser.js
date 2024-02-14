import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import AvatarEditIcon from "../icons/AvatarEditIcon";
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from "react-redux";
import { UpdateUserAvatar } from "../services/action/action";


export const ProfileUser = (props, { userName, token }) => {
  const dispatch = useDispatch()
  const changeImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(UpdateUserAvatar(result.assets[0].uri, props.token))
    }
  };
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.avatarFrame}>
        <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 100 }} onPress={() => changeImg()}>
          <Image
            style={styles.profilePhoto}
            source={{ uri: `https://basrarusbackend.justcode.am/uploads/${props.userAvatar}` }}
          />
        </TouchableOpacity>
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
