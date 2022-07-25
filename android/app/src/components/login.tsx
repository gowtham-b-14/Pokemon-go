import React, {FC, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  SectionList,
  DrawerLayoutAndroidBase,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalNavigatorParamsList } from '../types/types';
import { RouteProp } from "@react-navigation/native";

export interface navi {
  navigation:StackNavigationProp<ModalNavigatorParamsList, 'Loginpage'>
  route:RouteProp<ModalNavigatorParamsList,'Loginpage'>
}

const Login :FC<navi>= ({ navigation,route}) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdetails, setUserDetails] = useState(null)
  const [eyeopen, setEyeopen] = useState(false)
  const [isusernamevalid, setUsernamevalid] = useState(false)
  const [ispasswordvalid, setPasswordValid] = useState(false)

  const usernames = (name) => {
    setUsernamevalid(name.length > 5);
    setEmail(name);
  }
  const passwords = (pass) => {
    setPasswordValid(pass.length >= 6);
    setPassword(pass);
  }
  //console.log(userdetails)
  const login=()=>{
    console.log(route.params)
    if(route.params===undefined){
      alert("please sign in to continue")
    }
    else if(route.params.email===email && route.params.password===password){
      ToastAndroid.show("Login successfully", ToastAndroid.LONG)
      navigation.navigate('Home')
    }else{
      alert("Invalid email or password.")
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Icon2 name="pokeball" size={70} color="#f0f0f0" style={styles.icon} />
        <Text style={styles.text}>WéLcOmé TrAINéR </Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.text1}>Email</Text>
        <TextInput
          style={styles.textbox1}
          onChangeText={usernames}
          placeholder="email"
          keyboardType="email-address"
        />
        {email.length > 0 && !isusernamevalid ? (
          <Text style={styles.error}>
            Invalid Email address
          </Text>
        ) : null}
        <Text style={styles.text1}>Password</Text>
        <TextInput
          style={styles.textbox1}
          onChangeText={passwords}
          placeholder="password"
          secureTextEntry={!eyeopen}
        />
        {password.length > 0 && !ispasswordvalid ? (
          <Text style={styles.error}>
            Invalid Password
          </Text>
        ) : null}
        <TouchableOpacity onPress={() => setEyeopen(!eyeopen)}><Icon2 name={(eyeopen) ? "eye" : "eye-off"} color="black" size={30} style={{ marginTop: "-12%", marginLeft: "87%" }} /></TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
         onPress={() => login()}
        >
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
        <Image style={{ height: "50%", width: "100%" }} source={{ uri: "https://i.pinimg.com/736x/6f/f3/2d/6ff32de2ab1621cddf0e74b74f04fae9--ash-final.jpg" }}></Image>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  error: {
    color: "red",
    marginLeft: 17,
    marginBottom: 8
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 15
  },
  image: {
    height: 200,
    width: "50%",
    borderRadius: 100,
    marginLeft: 90,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  container1: {
    marginTop: 30,
  },
  icon: {
    marginTop: 120,
    marginLeft: 160,
  },
  text: {
    color: "#ffcb05",
    position: "absolute",
    top: 64,
    left: 70,
    fontSize: 30,
    textAlign: "center",
    textShadowColor: "blue",
    fontFamily: "Pokemon Solid",
    textShadowOffset: { width: 9, height: 3 },
    textShadowRadius: 40
  },
  button: {
    alignItems: "center",
    borderColor: "white",
    padding: 10,
    height: 40,
    borderWidth: 1,
    width: 100,
    marginHorizontal: 150,
    borderRadius: 10,
    margin: 12

  },
  textbox1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,

  },
  buttontext: {
    color: "#ee1515",
    fontWeight: "bold"
  }
})

export default Login