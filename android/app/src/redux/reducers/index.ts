import { combineReducers } from "redux";
import Data_reducer from '../reducers/reducer'

let root_reducer=combineReducers({
    Data_reducer
})

export default root_reducer;

export type State=ReturnType<typeof root_reducer>