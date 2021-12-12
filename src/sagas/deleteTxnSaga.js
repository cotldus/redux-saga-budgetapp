import {take, call, put} from 'redux-saga/effects'
import txnTypes from '../actions/txn.actions'
import axios from 'axios';

export function* deleteTxnSaga() {
    while(true) { // this ensures that if the function is called more than once, it will be ignored until the loop is fully executed until the end
        const {payload} = yield take(txnTypes.REMOVE_TRANSACTION);
        yield call(deleteTxn, payload.id);
        yield put({ type: 'REMOVE_TRANSACTION_RESULT', payload: { id: payload.id}})
    }
}

const deleteTxn = async (id) => {
    const url = "http://localhost:4000/transactions/";
    await axios.delete(url + id);
}