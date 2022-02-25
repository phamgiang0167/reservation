import {SELECT_DATE, CLEAR_DATE} from "../constants/DateConstant"

export const actSelectDate = (date) =>({
    type: SELECT_DATE,
    payload: date
})

export const actClearDate = () => ({
    type: CLEAR_DATE
})