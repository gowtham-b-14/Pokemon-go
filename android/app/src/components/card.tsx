import React, { FC, useState, useEffect } from 'react';
import {
    ImageBackground,
    ListRenderItem,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,

} from 'react-native';
import axios from "axios";
import { Card, Button, Title, Paragraph } from "react-native-paper"
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalNavigatorParamsList } from '../types/types';
import {fetchProductsBegin} from '../redux/actions/action';
import { bindActionCreators } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/reducers';

export interface navi {
    navigation: StackNavigationProp<ModalNavigatorParamsList,'Details'>
}

const Cards: FC<navi> = ({ navigation }) => {
    
    const returnmessage:{ [k : string] : any} = useSelector((state: State) => state.Data_reducer)
    const [details, setDetails] = useState<any>([])
    const dispatch = useDispatch();
    //let detail:object=({})
    //console.log(detail)
    const DATA = [{
        title: "Pokemon",
        data: details
    }]
    useEffect(() => {
        dispatch(fetchProductsBegin())
    }, [])

    useEffect(()=>{
        setDetails(returnmessage.items)
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