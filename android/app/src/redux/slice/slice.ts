import { createSlice } from "@reduxjs/toolkit";
import { BasicDetails } from "../../types/types";



const initialState:{
    pokemonDetails : BasicDetails
} =  {
    pokemonDetails : []
}
let pokemonSlice = createSlice({
    name : "pokemon",
    initialState,
    reducers : {
        // howmanypokemons:(state,action)=>{

        // },
        fetchListOfPokemons : (state,action) => {
            //console.log(action.payload)
        },
        fetchProductsBegin : (state, action) => {
            state.pokemonDetails = action.payload
        }
    }
})
export const {fetchListOfPokemons, fetchProductsBegin } = pokemonSlice.actions;
export default pokemonSlice.reducer;