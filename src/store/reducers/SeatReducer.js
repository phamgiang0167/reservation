import {CLEAR_SEAT, SELECT_SEAT} from "../constants/SeatConstant"
const inititalState = {
    status: false,
    seat: null
}

const seatReducer = (state=inititalState, {type, payload}) => {
    switch(type){
        case SELECT_SEAT:
            return {...state, status: true, seat: payload}
        case CLEAR_SEAT:
            return {...inititalState}
        default:
            return {...state}
    }
}

export default seatReducer