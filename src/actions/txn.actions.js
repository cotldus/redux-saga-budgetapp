const types = {
    GET_TRANSACTIONS: "GET_TRANSACTIONS",
    POPULATE_TXN: "POPULATE_TXN",
    ADD_TRANSACTION: "ADD_TRANSACTION",
    REMOVE_TRANSACTION: "REMOVE_TRANSACTION",
    UPDATE_TRANSACTION: "UPDATE_TRANSACTION",
    REMOVE_TRANSACTION_RESULT: "REMOVE_TRANSACTION_RESULT",
    ADD_TRANSACTION_RESULT: "ADD_TRANSACTION_RESULT",
    UPDATE_TRANSACTION_RESULT: "UPDATE_TRANSACTION_RESULT"
    // GET_TXN_DETAILS: "GET_TXN_DETAILS"
}
export default types;

export const TXN_ADDED = payload => {
    return {type: types.ADD_TRANSACTION, payload}
}

export const TXN_REMOVED = id => {
    return {type: types.REMOVE_TRANSACTION, payload: {id}}
}

export const TXN_UPDATED = (id, transaction) => {
    return {type: types.UPDATE_TRANSACTION, payload: { id, transaction }}
}

export const TXN_RECEIVED = (id, transaction) => {
    return {type: types.GET_TRANSACTIONS, payload: { id, transaction }}
}

export const TXN_POPULATED = txn => {
    return { type: types.POPULATE_TXN, payload: txn }
}

// export const TXN_DETAILS_RECEIVED = (txnDetails, id) => {
//     return { type: types.GET_TXN_DETAILS, payload: {txnDetails, id}}
// }