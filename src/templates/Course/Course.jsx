import React, { Component } from 'react'
import { connect } from "react-redux"
import courses from "../../data/courses"
import CourseItem from "../../components/CourseItem/CourseItem"
import { actClearCourse } from '../../store/actions/CourseAction'
import SectionTitle from '../../components/Section_title/SectionTitle'
import BtnClrCourse from '../../components/Button/ButtonClearCourse/BtnClrCourse'
import { actClearSlots } from '../../store/actions/SlotsAction'
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
        const { courseReducer, clearCourse, clearSlots } = this.props
        return (

            <section className='course__wrapper'>
                <SectionTitle>
                    Please select a
                    <span> course</span>
                    <BtnClrCourse style={{float: "right"}} clearCourse={clearCourse} clearSlots={clearSlots}>Change</BtnClrCourse>
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
        clearSlots: () => dispatch(actClearSlots())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);