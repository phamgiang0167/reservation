import {CLEAR_TIME, SELECT_TIME} from "../constants/TimeConstant"
export const actClearTime = () => ({
    type: CLEAR_TIME
})

export const actSelectTime = (time) => ({
    type: SELECT_TIME,
    payload: time
})