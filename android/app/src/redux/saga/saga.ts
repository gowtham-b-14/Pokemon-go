import {takeLatest,call,put,all} from 'redux-saga/effects'
import { FETCH_PRODUCTS_BEGIN} from "../actions/action";
import axios from 'axios';

function* actionWatcher(){
    yield takeLatest(FETCH_PRODUCTS_BEGIN, Data);
}

function* Data(){
    console.log("this is saga")
    try
    {
        let api:{ [k : string] : any}=yield axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
        .then((api: { [k : string] : any})=>{
            if(api.status===404){
                throw new Error("Error Found in API")
            }
            //console.log("jjjjjjjjjjjjjjj",api.data)
            return api.data.results
        });
        //console.log("llllllllllllllllllllllllll",api)
        yield put({type:"FETCH_PRODUCTS_SUCCESS",payload:api})
    }catch(error){
        yield put({type:"FETCH_PRODUCTS_FAILURE",payload:{error:error}});
    }
}

export default function* rootsaga(){
    yield all([
        actionWatcher(),
    ])
}