import React, { FC, useState, useEffect } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cards from '../components/card';
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalNavigatorParamsList } from '../types/types';
import { RouteProp } from "@react-navigation/native";

export interface navi {
    navigation: StackNavigationProp<ModalNavigatorParamsList, 'Details'>
    route: RouteProp<ModalNavigatorParamsList, 'Home'>
}

const Home: FC<navi> = ({ navigation ,route}) => {
    console.log("Home page opened")
    return (
        <LinearGradient
            colors={['#ffcb05', '#ee1515']}
            style={styles.linearGradient}
            start={{ x: -0.01, y: 0.6 }}
            end={{ x: 0.9, y: 1 }}
        >
            <Cards navigation={navigation} route={route}/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        height: "100%",
        justifyContent: 'center',
    },
    container: {
        flex: 1,
    },
    icon:{
        paddingTop:2,
        paddingBottom:2
    }
})
export default Home