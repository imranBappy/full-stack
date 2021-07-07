const init = {
    transition:[], length: 0
}
const tractionReducer = (state = init, action) =>{
    switch (action.type) {
        case 'SET_TRANSACTION': return {
            transition: action.payload.transaction,
            length: action.payload.length
        }
        default: return state
    }
}
export default tractionReducer