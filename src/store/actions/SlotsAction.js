import {SELECT_SLOTS, CLEAR_SLOTS} from "../constants/SlotsConstant"

export const actSelectSlots = (num) => ({
    type: SELECT_SLOTS,
    payload: num
})

export const actClearSlots = () => ({
    type: CLEAR_SLOTS
})