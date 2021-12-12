const types = {
    OPEN_MODAL: "OPEN_MODAL",
    CLOSE_MODAL: "CLOSE_MODAL"
}

export default types;

export const EDIT_MODAL_OPENED = id => {
    return { type: 'OPEN_MODAL', payload: {id}}
}

export const EDIT_MODAL_CLOSED = ()=> {
    return { type: 'CLOSE_MODAL'}
}