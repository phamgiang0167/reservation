import {SELECT_DATE, CLEAR_DATE} from "../constants/DateConstant"
const inititalState = {
    status: false,
    date: new Date()
}

const dateReducer = (state=inititalState, {type, payload}) => {
    switch(type){
        case SELECT_DATE:
            return {...state, status: true, date: payload}
        case CLEAR_DATE:
            return {...inititalState}
        default:
            return {...state}
    }
}

export default dateReducer