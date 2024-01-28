import { LinearGradient } from "expo-linear-gradient";
import react from "react";
import { StyleSheet } from "react-native";
import PreloaderIcon from "../icons/PreloaderIcon";

export const LoadingScreen = ()=> {
  return(
    <LinearGradient colors={['#D0EBD5', '#98CBA1']} style={styles.container}>
      <PreloaderIcon />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }
})
