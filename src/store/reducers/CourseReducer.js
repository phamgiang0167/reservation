import {CLEAR_COURSE, PICK_COURSE} from "../constants/CourseConstant"
const inititalState = {
    status: false,
    coursePicked: {}
}

const courseReducer = (state=inititalState, {type, payload}) => {
    switch(type){
        case PICK_COURSE:
            return {...state, status: true, coursePicked: payload}
        case CLEAR_COURSE: 
            return {...inititalState}
        default:
            return {...state}
    }
}

export default courseReducer