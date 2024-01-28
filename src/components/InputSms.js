import React, {useState} from "react";
import { StyleSheet, TextInput } from "react-native"

export const InputSms = (props) => {
  const [borderColor, setBorderColor] = useState("#C5C6CC");
  const [borderWidth, setBorderWidth] = useState(1);

  function handleFocused() {
    setBorderColor("#9AC6AD");
    setBorderWidth(2);
    props.onFocus ? props.onFocus() : "";
  }

  function handleBlur() {
    setBorderColor("#9AC6AD");
  }
  return(
    <TextInput
      autoFocus={props.autoFocus}
      maxLength={props.maxLength}
      keyboardType={props.keyboardType}
      cursorColor={"#9AC6AD"}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      onPress={props.onPress}
      onFocus={handleFocused}
      onBlur={handleBlur}
      ref={props.innerRef}
      multiline={props.multiline}
      textAlignVertical={props.align}
      style={[ props.style, 
        styles.input,
        {
          backgroundColor: props.backgroundColor,
          textAlign: props.textAlign,
          borderColor,
          borderWidth,
          paddingTop: props.paddingTop,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 58,
    height: 58,
    paddingHorizontal: 21,
    paddingVertical: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#C5C6CC",
    borderRadius: 12,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    color: "#9AC6AD",
  }
})