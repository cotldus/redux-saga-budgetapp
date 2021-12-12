import txnTypes from '../actions/txn.actions'


const txnReducer = (state = initialTransactions, action)=> {
    let newTransactions;
    switch (action.type) {
        case txnTypes.POPULATE_TXN:
            return action.payload;
        case txnTypes.ADD_TRANSACTION_RESULT:
            newTransactions = state.concat(action.payload);

            return newTransactions;
        
        case txnTypes.REMOVE_TRANSACTION_RESULT:
            newTransactions = state.filter(transaction => transaction.id !== action.payload.id)

            return newTransactions;
        
        // case txnTypes.GET_TXN_DETAILS: // placed here as the logic is same as update_transaction
            // newTransactions = [...state];
            // const index = newTransactions.findIndex(txn => txn.id === action.payload.id)
            // newTransactions[index] = {...newTransactions[index], ...action.payload.transaction}

            // return newTransactions;

        case txnTypes.UPDATE_TRANSACTION_RESULT:
            newTransactions = [...state];
            const index = newTransactions.findIndex(txn => txn.id === action.payload.id)
            newTransactions[index] = {...action.payload.transaction}

            return newTransactions;


        default:

            break;
    }
    
    return state;
};

export default txnReducer;

var initialTransactions = [];