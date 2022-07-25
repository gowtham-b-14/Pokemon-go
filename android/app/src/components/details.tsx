import React, { FC, useState, useEffect } from 'react';
import {
    ImageBackground,
    ListRenderItem,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable

} from 'react-native';
import axios from "axios";
import {
    BarChart,
    LineChart,
    ProgressChart,

} from "react-native-chart-kit";
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalNavigatorParamsList } from '../types/types';
import { RouteProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MenuDrawer from 'react-native-side-drawer'

export interface navi {
    navigation: StackNavigationProp<ModalNavigatorParamsList, 'Details'>
    route: RouteProp<ModalNavigatorParamsList, 'Details'>
}


const Details: FC<navi> = ({ navigation, route }) => {

    const [apidata, setApidata] = useState<any[]>([])
    const [accuracy, setAccuracy] = useState<any[]>([])
    const [weight,setWeight]= useState<number>()
    

    const chartConfig = {
        backgroundGradientFrom: '#FFFFFF',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#FFFFFF',
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba( 255,255,0, ${opacity})`,
        barPercentage: 1,
    };
    const DATA = [{
        title: "Pokemon Data",
        data: apidata
    }]
    useEffect(() => {
        async function fetchapi() {
            await axios.get(`${route.params.dataurl}`)
                .then((response) => {
                    setApidata(
                        response.data.stats
                    ),setWeight(response.data.weight)
                })
                .catch((error) => console.log(error));
        }
        fetchapi()
    }, [])

    const Rm = ({ datas }: { datas: any }) => {
        if (accuracy.length < apidata.length) {
            let div = ((datas.base_stat) / 109)
            accuracy.push(div)
            
        }
        return (
            <View>
                <Text style={styles.text1}>{datas.stat.name} - <Text style={styles.text2}>{Math.round(datas.base_stat / 109 * 100)}%</Text></Text>
            </View>
        )
    }
    const details = {
        labels: ['HP', 'Attack', 'Defence', 'Sp-Attack', 'Sp-Defence', 'Speed'],
        data: accuracy
    }
    
    return (

        <LinearGradient
            colors={['#ffcb05', '#ee1515']}
            style={styles.linearGradient}
            start={{ x: -0.01, y: 0.6 }}
            end={{ x: 0.9, y: 1 }}
        >
            <View style={styles.container}>
                <View>
                    <Image style={styles.img} source={{ uri: route.params.imageurl }}></Image>
                    <Image style={styles.img2} source={{ uri: "https://icon-library.com/images/small-pokeball-icon/small-pokeball-icon-4.jpg" }}></Image>
                </View>
                
                
                    <SectionList
                        style={styles.sectionstyle}
                        sections={DATA}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <Rm datas={item} />}
                    />
                    <ProgressChart
                        style={styles.chart}
                        data={details}
                        width={415}
                        height={260}
                        strokeWidth={10}
                        radius={32}
                        chartConfig={chartConfig}
                        hideLegend={false}
                    />
                
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 7
    },
    img: {
        width: "100%",
        height: 350
    },
    img2: {
        width: "90%",
        height: 200,
        position: "absolute",
        left: 120,
        top:310
    },
    chart: {
        bottom: 0,
        left: -45
    },
    text1: {
        fontSize: 15,
        fontWeight: "bold",
        left: 20,
        color: "black",
    },
    text2: {
        color: "red",
    },
    linearGradient: {
        flex: 1,
        height: "100%",
        justifyContent: 'center'
    },
    sectionstyle: {
        flex: 2
    },
    button: {
        alignItems: "center",
        padding: 10,
        height: 50,
        width: "90%",
        marginTop: 305,
        margin: 12,
        borderRadius: 9999,
        backgroundColor: "black"

    },
    buttontext: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17
    },
})

export default Details