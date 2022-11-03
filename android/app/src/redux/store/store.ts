import {configureStore} from '@reduxjs/toolkit'
import root_reducer from '../reducers/index';
import rootsaga from '../slice/saga'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import pokemonSlice from '../slice/slice'

let sagaMiddleware=createSagaMiddleware();

export const store=configureStore({
    reducer: {
        pokemon:pokemonSlice,
    },
    middleware:[sagaMiddleware,logger],
    devTools:true,
});
sagaMiddleware.run(rootsaga);
export type RootState = ReturnType<typeof store.getState>

