import {CLEAR_TIME, SELECT_TIME} from "../constants/TimeConstant"
const inititalState = {
    status: false,
    time: null
}

const timeReducer = (state=inititalState, {type, payload}) => {
    switch(type){
        case CLEAR_TIME:
            return {...inititalState}
        case SELECT_TIME:
            return {...state, time: payload, status: true}
        default:
            return {...state}
    }
}

export default timeReducer