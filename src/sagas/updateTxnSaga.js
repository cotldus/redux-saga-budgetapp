import { takeLatest, call, put} from 'redux-saga/effects'
import txnTypes from '../actions/txn.actions'
import axios from 'axios';

export function* updateTxnSaga() {
    yield takeLatest(txnTypes.UPDATE_TRANSACTION, updateTxnToDB)
}

function* updateTxnToDB({payload}){
    const {id, transaction} = payload
    yield call(updateTxn, transaction)
    yield put( {type: txnTypes.UPDATE_TRANSACTION_RESULT, payload: {id, transaction}})
}

async function updateTxn({id, description, value, isExpense }) {
    const url = `http://localhost:4000/transactions/${id}`
    await axios.put(url, {id, description, value, isExpense})
}