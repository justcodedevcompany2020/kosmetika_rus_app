import * as React from "react"
import { Image, View } from "react-native";
import Svg, { Rect, Mask, Path, G } from "react-native-svg"

function AvatarEditIcon(props) {

  return <View style={{ backgroundColor: "#9AC6AD", width: 25, height: 25, borderRadius: 30, position: 'absolute', right: 0, top: 65, justifyContent: 'center', alignItems: 'center' }}>
    <Image style={{ width: 13, height: 13, }} source={require('../../assets/Mask.png')} />
  </View>

};

export default AvatarEditIcon;
