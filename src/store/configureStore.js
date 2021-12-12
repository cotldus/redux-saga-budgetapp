import {combineReducers, createStore, applyMiddleware } from 'redux';
import txnReducer from '../reducers/txn.reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import modalReducer from '../reducers/modal.reducer';
import createSagaMiddleware from 'redux-saga'
import { initSagas } from '../sagas' // because it is called index, no need to say anything

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]
const reducer = combineReducers({
    transactions: txnReducer,
    modal: modalReducer,
})


export default function configureStore() {
    const store = createStore(
        reducer, 
        composeWithDevTools(
            applyMiddleware(...middlewares)
        ), 
    );

    initSagas(sagaMiddleware) // start sagas automatically
    return store
}
