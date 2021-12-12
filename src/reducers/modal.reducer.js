import modalTypes from '../actions/modal.action';

const modalReducer = (state = {isOpen: false, id:null}, action)=> {
    
    switch (action.type) {
        case modalTypes.OPEN_MODAL:
            return {...state, isOpen:true, id: action.payload.id};
        case modalTypes.CLOSE_MODAL:
            return {...state, isOpen:false, id: null}
        
        default:
            return state;
    }
    
};

export default modalReducer;