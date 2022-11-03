import React, {FC, useState, useEffect, useMemo} from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios';
import {BarChart, LineChart, ProgressChart} from 'react-native-chart-kit';
import {StackNavigationProp} from '@react-navigation/stack';
import {ModalNavigatorParamsList} from '../types/types';
import {RouteProp} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MenuDrawer from 'react-native-side-drawer';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {ProgressChartData} from 'react-native-chart-kit/dist/ProgressChart';

export interface navi {
  navigation: StackNavigationProp<ModalNavigatorParamsList, 'Details'>;
  route: RouteProp<ModalNavigatorParamsList, 'Details'>;
}

const Details: FC<navi> = ({navigation, route}) => {
  const [apidata, setApidata] = useState<any[]>([]);
  const [details, setDetails] = useState<ProgressChartData>([]);
  const [weight, setWeight] = useState<number>(0);

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFFFFF',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba( 0,0,0, ${opacity})`,
    barPercentage: 0.7,
  };

  useEffect(() => {
    async function fetchapi() {
      await axios
        .get(`${route.params.dataurl}`)
        .then(response => {
          setApidata(response.data.stats);
          setWeight(response.data.weight);
        })
        .catch(error => console.log(error));
    }
    fetchapi();
  }, []);

  useEffect(() => {
    det(apidata);
  }, [apidata]);

  const det = apidata2 => {
    console.log(apidata2);
    let accuracy: number[] = [];
    for (let i = 0; i < apidata.length; i++) {
      let div = apidata2[i].base_stat;
      accuracy.push(div / 109);
    }
    var data = {
      labels: ['HP', 'Attack', 'Defence', 'S-ATK', 'S-DEF', 'Speed'],
      data: accuracy,
    };
    setDetails(data);
    console.log(accuracy);
  };

  return (
    <LinearGradient
      colors={['#ffcb05', '#ee1515']}
      style={styles.linearGradient}
      start={{x: -0.01, y: 0.6}}
      end={{x: 0.9, y: 1}}>
      <View>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{uri: `${route.params.imageurl}`}}
          />
        </View>
        <View style={styles.card}>
          <ScrollView style={{height: '100%', width: '100%'}}>
            <Text style={styles.text}> weight : </Text>
            <Text style={styles.weight}> {weight} </Text>
            <Image
              style={styles.img2}
              source={{
                uri: 'https://www.freepnglogos.com/uploads/pokemon-png/ash-pokemon-png-file-26.png',
              }}></Image>
            <Image
              style={styles.img3}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png',
              }}></Image>

            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                height: 250,
                width: '100%',
              }}>
              <ProgressChart
                style={styles.chart}
                data={details}
                width={Dimensions.get('window').width - 60}
                height={200}
                strokeWidth={10}
                radius={35}
                chartConfig={chartConfig}
                hideLegend={false}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 300,
  },
  img2: {
    width: 110,
    height: 209,
    top: 50,
    left:20
  },
  img3: {
    width: 250,
    height: 90,
    position: 'absolute',
    top: 170,
    left: 120,
  },
  chart: {
    marginVertical: 10,
    left: 10,
    position: 'absolute',
  },
  linearGradient: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    height: 390,
    borderRadius: 10,
    //padding: 5,
    margin: 10,
  },
  text: {
    color: 'red',
    top: 10,
    fontSize: 30,
    textAlign: 'center',
    //textShadowColor: "blue",
    fontFamily: 'Pokemon Solid',
    textShadowOffset: {width: 9, height: 3},
    textShadowRadius: 10,
  },
  weight: {
    color: '#ee8239',
    top: 64,
    fontSize: 30,
    textAlign: 'center',
    //textShadowColor: "blue",
    fontFamily: 'Pokemon Solid',
    textShadowOffset: {width: 9, height: 3},
    textShadowRadius: 10,
  },
});

export default Details;
