// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import playerSaga from './playerSaga';
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(playerSaga);

export default store;