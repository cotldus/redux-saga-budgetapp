import {take, call, put} from 'redux-saga/effects'
import txnTypes, { TXN_POPULATED } from '../actions/txn.actions'
import axios from 'axios';

export function* getAllTxn() {
    yield take(txnTypes.GET_TRANSACTIONS)
    console.log('I need to get the txns now.')
    const url = "http://localhost:4000/transactions/"
    const {data} = yield call(axios, url)
    yield put(TXN_POPULATED(data))
}


// export function* combineTxnDetails(id) {
//     const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
//     console.log(data);
//     yield put(TXN_DETAILS_RECEIVED(id, data)); // reminder to add this in actions and reducer
//   }

// Assuming amount and transactions are stored seperately, this will get the entry and then use fork to get the values for each entry
//   export function* getAllEntriesDetails() {
//     const { payload } = yield take(entriesTypes.POPULATE_TXN);
//     for (let index = 0; index < payload.length; index++) {
//       const entry = payload[index];
//       yield fork(combineTxnDetails, entry.id);
//     }
//   }