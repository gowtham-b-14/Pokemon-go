import { FETCH_PRODUCTS_BEGIN} from "../actions/action";

const IS={
    items:[]
}

export default function Data_reducer(state=IS,action){
    //console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiii",action.payload)
    switch(action.type)
    {
        case "FETCH_PRODUCTS_SUCCESS":
            return {...state, items : action.payload};

        default:return state;
    }                      
}
