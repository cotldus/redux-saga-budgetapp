import {delay, put, take, call, fork, takeEvery, cancelled, cancel, takeLatest} from 'redux-saga/effects'

/* 

call allows you to call a function
take allows you to call an action
put allows you to put data into actions/ dispatch actions?
dispatch vs put?
cancel removes fork when user does not need the information anymore, e.g. when user navigates away from the card loading an image
cancelled checks if fork is cancelled 

*/

export function* testDispatch() {
    let index = 0;
    yield put({ type: "TEST_MESSAGE_4", payload:index})
}

// 1-5 except 4
export function* testDispatch2() {
    let index = 0;
    while(true) {
        yield delay(3000);
        yield put({ type: "TEST_MESSAGE_5", payload:index})
        index++;    
    }
}

export function* testSaga() {
    while(true){
        console.log('Starting Saga...')
        const state = yield take("TEST_MESSAGE")
        const a = yield call(double, 2)
        console.log(a)
        const b = yield double(3)

        console.log(b)
        console.log("End of Saga...", state)
    }
    
}


// TakeEvery lets you take an action and process each yield with a function
function* testSagaTakeEveryProcess({payload}) {
    console.log(`Starting Process for index ${payload}`)
    yield delay(3000)
    console.log(`Ending Process for index ${payload}`)
}

export function* testSagaTakeEvery(){
    const { payload } = yield takeEvery('TEST_MESSAGE_3', testSagaTakeEveryProcess)
    console.log(`Finished TaskEvery for index ${payload}`);
}



function double(num) {
    return num*2
}

export function* count(){
    yield 1
    yield 2
    yield 3
    yield 4
    return 5 // to switch done to true
    // anything next it undefined
}


// Fork lets you execute a function in parallel
function* doNothing() {
    console.log("What are you doing?")
    yield delay(500);
    console.log("I'm doing nothing")
}

export function* testSagaFork() {
    while(true){
        yield take("TEST_MESSAGE_2")
        yield delay(1000)
        yield fork(doNothing)
        yield fork(doNothing)
        yield fork(doNothing)
    }
    
}

function* infinitSaga() {
    console.log('starting infinite Saga')
    let index = 0    
    while (true){
        index++;
        try {
            console.log(`inside infinite loop ${index}`)
        yield delay(1000)
        } 
        catch (error){
            console.error("An error has ocurred:", error)
        }
        finally {
            console.log(`The fork was canceled? ${index}`, yield cancelled())

        }
    }
}

export function* testSagaCancelled() {
    yield take('TEST_MESSAGE_4')
    const handleCancel = yield fork(infinitSaga)
    yield delay(5000)
    yield cancel(handleCancel);
}

export function* testSagaTakeLatest() {
    yield takeLatest('TEST_MESSAGE_5', infinitSaga) 
    // takeLatest: every time it is called, it executes a fork and cancels the previous fork. 
    // essentially if the user refreshes a page, it will stop the previous fork and reload the page from step 1 of the fork

}