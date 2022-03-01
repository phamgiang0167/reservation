import React, { Component } from 'react'
import { connect } from "react-redux"
import courses from "../../../data/courses"
import CourseItem from "../../Molecules/CourseItem/CourseItem"
import { actClearCourse } from '../../../store/actions/CourseAction'
import SectionTitle from '../../Atoms/Section_title/SectionTitle'
import BtnClrItem from '../../Atoms/ButtonClearItem/BtnClrItem'
import { actClearSlots } from '../../../store/actions/SlotsAction'
import { actClearDate } from "../../../store/actions/DateAction"
import { actClearTime } from "../../../store/actions/TimeAction"
import {actClearSeat} from "../../../store/actions/SeatAction"
class Course extends Component {
    listCourses = courses
    renderCourseList = (coursePicked, status) => {

        if (Object.keys(coursePicked).length !== 0 && status === true) {
            return (
                <CourseItem course={coursePicked} status={status} />
            )
        }
        return this.listCourses?.map((item, index) => {
            return <CourseItem
                course={item}
                key={index}
                status={status}
            />
        })
    }
    render() {
        const { courseReducer, clearCourse, clearSlots, clearDate, clearTime, clearSeat} = this.props
        return (

            <section className='course__wrapper'>
                <SectionTitle>
                    Please select a
                    <span> course</span>
                    <BtnClrItem
                        style={{ float: "right" }}
                        clearCourse={clearCourse}
                        clearSlots={clearSlots}
                        clearTime={clearTime}
                        clearDate={clearDate}
                        clearSeat={clearSeat}
                    >
                        Change
                    </BtnClrItem>
                </SectionTitle>

                {this.renderCourseList(courseReducer.coursePicked, courseReducer.status)}

            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        courseReducer: state.courseReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCourse: () => dispatch(actClearCourse()),
        clearSlots: () => dispatch(actClearSlots()),
        clearDate: () => dispatch(actClearDate()),
        clearTime: () => dispatch(actClearTime()),
        clearSeat: () => dispatch(actClearSeat())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);