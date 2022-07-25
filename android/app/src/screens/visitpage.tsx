import React, { FC,useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalNavigatorParamsList } from '../types/types';



export interface navi {
    navigation: StackNavigationProp<ModalNavigatorParamsList, 'Visitpage'>
}

const Visitpage :FC <navi>= ({ navigation }) => {

    const Signin = () => {
        navigation.navigate("Signuppage")
    }
    const Login = () => {
        navigation.navigate('Loginpage')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://i.pinimg.com/736x/6a/74/e2/6a74e2883c27713ece3948ecd383d08e.jpg" }} style={{ flex: 1 }}>
                <View>
                    <Text style={styles.text}> PoKéMoN </Text>
                    <Icon name="pokeball" size={70} color="red" style={styles.icon} />
                    <Text style={styles.text1}>Welcome</Text>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => Login()}
                    >
                        <Text style={styles.buttontext}>Login ❤️</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Signin()}
                    >
                        <Text style={styles.buttontext2}>Create Account ?</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        alignItems: "center",
        padding: 10,
        height: 50,
        width: "90%",
        marginLeft: 20,
        borderRadius: 9999,
        backgroundColor: "#1DB954",
        borderColor: '#1DB954',
        bottom: -310
    },
    buttontext: {
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        fontSize: 20,
        padding: 40
    },
    buttontext2: {
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
    icon: {
        marginTop: 125,
        marginLeft: 160,

    },
    text: {
        color:"#ffcb05",
        position: "absolute",
        top: 55,
        left: 80,
        fontSize: 50,
        textShadowColor:"blue",
        fontFamily:"Pokemon Solid",
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 20
    },
    text1: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        left: 130,
        top: 10,
        alignContent: "center",
        
    },
    button2: {
        alignItems: "center",

    }
})

export default Visitpage 