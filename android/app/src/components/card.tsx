import React, { FC, useState, useEffect } from 'react';
import {
    SectionList,
    StyleSheet,
    View,
} from 'react-native';
import { Card, Button} from "react-native-paper"
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalNavigatorParamsList } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { fetchListOfPokemons } from '../redux/slice/slice';
import { RouteProp } from '@react-navigation/native';

export interface navi {
    navigation: StackNavigationProp<ModalNavigatorParamsList,'Details'>
    route: RouteProp<ModalNavigatorParamsList, 'Home'>
}

const Cards: FC<navi> = ({ navigation,route }) => {
    
    const returnmessage= useSelector((state: RootState) => state.pokemon.pokemonDetails)
    const [details, setDetails] = useState<any>([])
    const dispatch = useDispatch();
    //let detail:object=({})
    //console.log(detail)
    //console.log(route.params?.total)
    //console.log(route.params?.total)
    const DATA = [{
        title: "Pokemon",
        data: details
    }]
    useEffect(() => {
        dispatch(fetchListOfPokemons(route.params?.total))
    }, [])

    useEffect(()=>{
        setDetails(returnmessage)
    },[returnmessage])
    
   //console.log(details)

    const Rm = ({ data }: { data: any }) => {
        
        let number: String = ""
        const num = data.url.split('https://pokeapi.co/api/v2/pokemon/')[1].split('/')
        if (num[0].length === 1) {
            number = '0' + '0' + num[0]
        } else if (num[0].length === 2) {
            number = '0' + num[0]
        } else if (num[0].length[0] === 3) {
            number = num[0]
        }
        
        return (
            
            <View style={styles.op}>
                <Card>
                    <Card.Title title={data.name} subtitle="Pokemon" />
                    <Card.Cover style={styles.img} source={{ uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png` }} />
                    <Card.Actions>
                        <Button onPress={()=>navigation.navigate('Details',{imageurl:`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`,dataurl:data.url})}>View</Button>
                    </Card.Actions>
                </Card>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <SectionList
                    sections={DATA}
                    renderItem={({ item }) => <Rm data={item} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1
    },
    op: {
        padding: 20
    },
    img: {
        height: 340,
    },
    button: {
        textAlign: 'center'
    }
})

// const mapStateToProps = (state) => ({
//     detail:state.Data_reducer
// })

// const mapDispatchToProps = (dispatch) => {
    
//     return bindActionCreators({fetchProductsBegin},dispatch)
// }
export default Cards