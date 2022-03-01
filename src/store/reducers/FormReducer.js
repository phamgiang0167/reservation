import {CHANGE_VALUE, CHANGE_VISIT, CLEAR_VALUE} from "../constants/FormConstant"
const inititalState = {
    name : {
        status: false,
        value: ""
    },
    phone: {
        status: false,
        value: ""
    },
    email: {
        status: false,
        value: ""
    },
    isFirstVisit: true
}

const formReducer = (state=inititalState, {type, payload}) => {
    switch(type){
        case CHANGE_VALUE:
            return {...state, [payload.type]: payload.value}
        case CLEAR_VALUE:
            return {...state, [payload.type]: payload.value}
        default:
            return {...state}
    }
}

export default formReducer