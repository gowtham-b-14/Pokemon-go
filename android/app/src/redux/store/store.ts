import {configureStore} from '@reduxjs/toolkit'
import root_reducer from '../reducers/index';
import rootsaga from '../saga/saga'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

let sagaMiddleware=createSagaMiddleware();

export const store=configureStore({
    reducer: root_reducer,
    middleware:[sagaMiddleware,logger],
    devTools:true,
});
sagaMiddleware.run(rootsaga);
