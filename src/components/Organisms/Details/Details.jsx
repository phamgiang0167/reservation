import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseItem from '../../Molecules/CourseItem/CourseItem'
import FormatDetail from '../../Atoms/FormatDetail/FormatDetail'
import SeatItem from '../../Molecules/SeatItem/SeatItem'
import TimeDetail from '../../Atoms/TimeDetail/TimeDetail'

class Details extends Component {
    renderDate = (date) => {
        const day = ["Monday", "Tuesday", "Wednesday", "thursday", "friday", "saturday", "sunday"]
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        return day[date.getDay() - 1] + ", " + month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    }
    render() {
        const { date, slots, time, course, seat } = this.props
        return (
            <div className='details__wrapper'>
                <p style={{ padding: "20px 0" }}>Please check the reservation details</p>
                <TimeDetail>
                    <p>Private room dining Rakuzo-RAKUZO-Sapporo station store</p>
                    <h3>{this.renderDate(date)} {slots} people, {time}</h3>
                </TimeDetail>
                <FormatDetail>
                    <p>Reseration format</p>
                    <p>Book immediately</p>
                    <p>* The reservation format is immediate reservation. The reseration will be confirmed when the reservation is completed on the WEB</p>
                </FormatDetail>
                <CourseItem course={course} hideBtn={true}/>
                <SeatItem data={seat} hideBtn={true}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        date: state.dateReducer.date,
        slots: state.slotsReducer.slots,
        time: state.timeReducer.time,
        course: state.courseReducer.coursePicked,
        seat: state.seatReducer.seat
    }
}

export default connect(mapStateToProps)(Details)
