// import * as testSaga from './testSaga'
import * as txnSaga from './txnSaga'
import * as deleteTxnSaga from './deleteTxnSaga'
import * as createTxnSaga from './createTxnSaga'
import * as updateTxnSaga from './updateTxnSaga'

export function initSagas(sagaMiddleware){
    // Object.values(testSaga).forEach( // for each saga
    //     sagaMiddleware.run.bind(sagaMiddleware) // bind sagaMiddleware into inner scope
    //     )

    Object.values(txnSaga).forEach( // for each saga
        sagaMiddleware.run.bind(sagaMiddleware) // bind sagaMiddleware into inner scope
        )
    
    Object.values(deleteTxnSaga).forEach( // for each saga
        sagaMiddleware.run.bind(sagaMiddleware) // bind sagaMiddleware into inner scope
        )
    Object.values(createTxnSaga).forEach( // for each saga
        sagaMiddleware.run.bind(sagaMiddleware) // bind sagaMiddleware into inner scope
        )
    Object.values(updateTxnSaga).forEach( // for each saga
        sagaMiddleware.run.bind(sagaMiddleware) // bind sagaMiddleware into inner scope
        )
}