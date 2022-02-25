import React, { Component } from 'react'
import {connect} from "react-redux"
import {actPickCourse} from "../../store/actions/CourseAction"
import BtnPickCourse from '../Button/ButtonPickCourse/BtnPickCourse'
class CourseItem extends Component {
    renderTags = (tags) => {
        return tags?.map((item, index) => {
            return (
                <div className="tag" key={index}>{item}</div>
            )
        } )
    }
    render() {
        const { course, pickCourse, status} = this.props
        const { image, tags, name, price } = course
        return (
            <div className='course__item'>
                <div className="course__image" style={{backgroundImage: `url(${image})`}}>

                </div>
                <div className="course__detail">
                    <div 
                        style={{display: `${status ? "none" : "block"}`}}
                        className="course__detail-tags"
                    >
                        {this.renderTags(tags)}
                    </div>
                    <div className="course__detail-name">
                        {name}
                    </div>
                    <div className="course__detail-price">
                        {price} yen (tax included)
                    </div>
                    <div
                        style={{display: `${status ? "none" : "block"}`}}
                        className='course__detail-view'
                    >
                            View course details
                    </div>
                </div>
                <BtnPickCourse
                    style={{display: `${status ? "none" : "block"}`}} 
                    pickCourse={pickCourse}
                    data={course}
                >
                    Choice
                </BtnPickCourse>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pickCourse: (course) => {
            dispatch(actPickCourse(course))
        }
    }
}


export default connect(null, mapDispatchToProps)(CourseItem)