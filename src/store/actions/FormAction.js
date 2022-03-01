import {CHANGE_VALUE, CLEAR_VALUE, CHANGE_VISIT} from "../constants/FormConstant"

export const actChangeValue = (type, value) =>({
    type: CHANGE_VALUE,
    payload: {type, value}
})

export const actVisit = (status) =>({
    type: CHANGE_VISIT,
    payload: status
})

export const actClearValue = () =>({
    type: CLEAR_VALUE
})


