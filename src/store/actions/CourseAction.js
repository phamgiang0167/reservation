import {PICK_COURSE, CLEAR_COURSE} from "../constants/CourseConstant"

export const actPickCourse = (course) =>({
    type: PICK_COURSE,
    payload: course
})

export const actClearCourse = () => ({
    type: CLEAR_COURSE
})