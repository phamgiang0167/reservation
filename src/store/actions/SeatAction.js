import {SELECT_SEAT, CLEAR_SEAT} from "../constants/SeatConstant"

export const actSelectSeat = (seat) => ({
    type: SELECT_SEAT,
    payload: seat
})

export const actClearSeat = () => ({
    type: CLEAR_SEAT
})