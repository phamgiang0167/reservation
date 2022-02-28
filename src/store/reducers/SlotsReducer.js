import {CLEAR_SLOTS, SELECT_SLOTS} from "../constants/SlotsConstant"
const inititalState = {
    status: false,
    slots: null
}

const slotsReducer = (state=inititalState, {type, payload}) => {
    switch(type){
        case SELECT_SLOTS:
            return {...state, status: true, slots: payload}
        case CLEAR_SLOTS:
            return {...inititalState}
        default:
            return {...state}
    }
}

export default slotsReducer