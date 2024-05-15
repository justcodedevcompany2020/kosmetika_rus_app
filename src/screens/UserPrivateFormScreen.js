import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput, Button, TouchableOpacity } from "react-native";
import { Navbar } from "../components/Navbar";
import { MainButton } from "../components/MainButton";
import { UserPrivateForm } from "../components/UserPrivateForm";
import ReturnIcon from "../icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { UpdateData } from "../services/action/action";

import { format } from 'date-fns';
import DateTimePicker from "@react-native-community/datetimepicker";

export const UserPrivateFormScreen = (props) => {
  const navigation = useNavigation();
  const getUser = useSelector((st) => st.getUser)
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const dispatch = useDispatch()
  const { token } = useSelector((st) => st.static)



  useEffect(() => {
    setName(getUser.data?.user?.name)
    setEmail(getUser.data?.user?.email)
    setSurname(getUser.data?.user?.surname)
    if (getUser.data?.user?.date_of_birth?.split("-")[2]) {
      setBirthday(`${getUser.data?.user?.date_of_birth?.split("-")[2]}-${getUser.data?.user?.date_of_birth?.split("-")[1]}-${getUser.data?.user?.date_of_birth?.split("-")[0]}`)
    }
  }, [getUser?.data?.user])


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const handleDateChange = (event, date) => {
    setSelectedDate(date);
    setBirthday(format(event.nativeEvent.timestamp, 'dd-MM-yyyy')?.split("-").join("."))
    setShowPicker(false)
    setShowPicker(Platform.OS === 'ios');
  };


  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
  }
  const update = () => {
    let error = ''
    if (email) {
      if (!ValidateEmail(email)) {
        error = 'email  is not valid'
      }
    }
    if (error === '') {
      if (email) {

        dispatch(UpdateData({
          name,
          email,
          date_of_birth: birthday,
          surname
        },
          token
        ))
      }
      else {
        dispatch(UpdateData({
          name,
          date_of_birth: birthday,
          surname
        },
          token
        ))
      }
    }
  }
  const handleConfirm = () => {
    // Handle the selected date here
    Alert.alert('Selected Date', format(selectedDate, 'dd.MM.yyyy'));
    // Close the picker
    setShowPicker(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
          <View style={styles.mainContainer}>
            <View>
              <Text style={styles.title}>Личные данные</Text>
              <Text style={styles.descr}>Номер телефона</Text>
              <Text style={styles.tel}>+ {getUser.data.user?.phone}</Text>
              {/* <UserPrivateForm /> */}
              <TextInput
                placeholder="Имя"
                value={name}
                style={styles.input}
                placeholderTextColor="rgba(55, 55, 55, 0.5)"
                keyboardType="default"
                inputMode="text"
                cursorColor="#9AC6AD"
                onChangeText={(text) => setName(text)}

              />
              <TextInput
                value={surname}
                placeholder="Фамилия"
                style={styles.input}
                placeholderTextColor="rgba(55, 55, 55, 0.5)"
                keyboardType="default"
                inputMode="text"
                cursorColor="#9AC6AD"
                onChangeText={(text) => setSurname(text)}

              />
              <TextInput
                value={email}
                placeholder="E-mail"
                style={styles.input}
                placeholderTextColor="rgba(55, 55, 55, 0.5)"
                keyboardType="email-address"
                inputMode="email"
                cursorColor="#9AC6AD"
                onChangeText={(text) => setEmail(text)}

              />
              <TouchableOpacity style={[styles.input, { justifyContent: 'center', }]} onPress={() => setShowPicker(true)}>


                <Text>{birthday ? birthday : 'Дата рождения'}</Text>
              </TouchableOpacity>
              <View>
                <View>
                  {showPicker && (
                    <DateTimePicker
                      value={selectedDate}
                      mode="date"
                      display="default"
                      onChange={handleDateChange}
                    />
                  )}
                </View>
              </View>
              <ReturnIcon
                style={{ top: -3 }}
                onPress={() => navigation.goBack()}
              />
            </View>
            <MainButton title="Сохранить" onPress={() => {
              update()
              navigation.goBack()
            }
            } />
          </View>
        </LinearGradient>
      </ScrollView>
      <Navbar active="Profile" activeText="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 120,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 47,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 24,
    color: "#373737",
    textAlign: "center",
  },
  descr: {
    marginBottom: 8,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    color: "#71727A",
  },
  tel: {
    marginBottom: 26,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    color: "#373737",
    textAlign: "center",
  },
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
