import { call, takeLatest, put} from 'redux-saga/effects'
import txnTypes from '../actions/txn.actions'
import axios from 'axios';

/* 
We want to use takeLatest so that when the user wants to make changes while 
the form is submitting,

we want the previous submission to be cancelled and the new submission to 
take place 

takeLatest: takes request, forks, cancels if new request comes in

*/
export function* createTxnSaga() {
    yield takeLatest(txnTypes.ADD_TRANSACTION, addTxnToDB)


}

function* addTxnToDB({payload}){
    yield call(createTxn, payload)
    yield put( {type: txnTypes.ADD_TRANSACTION_RESULT, payload})
}

async function createTxn({id, description, value, isExpense }) {
    const url = "http://localhost:4000/transactions/"
    await axios.post(url, {id, description, value, isExpense})
}
