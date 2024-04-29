import {
  StyleSheet,
  Image,

} from "react-native";

export const HeroSlide = (props) => {
  console.log(props)
  return (
    <Image
      source={{ uri: `https://basrarusbackend.justcode.am/uploads/${props.image}` }}
      style={styles.heroPic}
    />
  );
};

const styles = StyleSheet.create({
  heroPic: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    resizeMode: 'contain'
  },
});
