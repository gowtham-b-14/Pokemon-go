import {takeLatest,call,put,all} from 'redux-saga/effects'
import { fetchProductsBegin } from './slice';
import axios from 'axios';

function* actionWatcher(){
    console.log("actionwatcher")
    //yield takeLatest("pokemon/howmanypokemons",Total)
    yield takeLatest("pokemon/fetchListOfPokemons", Data);
}
// let total
// function* Total(action){
//     total=action.payload
// }

function* Data(action){

    try
    {
        let api:{ [k : string] : any}=yield axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${action.payload}&offset=0`)
        .then((api: { [k : string] : any})=>{
            if(api.status===404){
                throw new Error("Error Found in API")
            }
            return api.data.results
        });
        yield put(fetchProductsBegin(api))
    }
    catch(error){
        console.log("Error while fetching list of pokemons",error)
    }
}

export default function* rootsaga(){
    yield all([
        actionWatcher(),
    ])
}