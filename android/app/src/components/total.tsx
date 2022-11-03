import React, { FC, useState, useEffect } from 'react';
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
    ImageBackground,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ModalNavigatorParamsList } from '../types/types';

export interface navi {
    navigation: StackNavigationProp<ModalNavigatorParamsList, 'Totalpage'>
}

const Total: FC<navi> = ({ navigation }) => {

    const [total, setTotal] = useState<string>("")


    return (
        <ImageBackground style={{ flex: 1 }} source={{ uri: "https://w0.peakpx.com/wallpaper/480/45/HD-wallpaper-pokemon-poker-anime.jpg" }}>
            <View style={styles.constainer1}>
                <View>
                    <Text style={styles.text}> Héllo TrAiNéR </Text>
                    <TextInput
                        style={styles.textbox1}
                        placeholder="Total"
                        keyboardType="number-pad"
                        onChangeText={setTotal}
                    />
                </View>
                <View>
                    <Text style={styles.text2}>Enter number of PoKéMoNs you want to train ... ⚔️</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { total: parseInt(total) })}>
                        <Text style={styles.buttontext}>Train</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    textbox1: {
        height: 50,
        left: 115,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        top: 170,
        width: "40%",
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    buttontext: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        color: "#ffcb05",
        position: "absolute",
        top: 55,
        left: 30,
        fontSize: 50,
        textShadowColor: "blue",
        fontFamily: "Pokemon Solid",
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20
    },
    text2: {
        color: "#ffcb05",
        textShadowColor: "blue",
        textAlign: "center",
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20,
        top: 480,
        fontSize: 20,
        margin: 3,
        fontWeight: "bold"
    },
    button: {
        alignItems: "center",
        padding: 10,
        height: 50,
        width: "90%",
        marginLeft: 20,
        borderRadius: 9999,
        backgroundColor: "#ffcb05",
        top: 520
    },
    constainer1: {
        flex: 1,
    },
})

export default Total