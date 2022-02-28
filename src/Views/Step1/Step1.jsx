import React, { Component, Fragment } from 'react'
import Course from "../../templates/Course/Course"
import SlotAndDate from "../../templates/SlotAndDate/SlotAndDate"
import Seat from "../../templates/Seat/Seat"
import BtnCf from '../../components/Button/ButtonConfirm/BtnCf'
import { connect} from "react-redux"
class Step1 extends Component {
    render() {
        const {statusCourse, statusSlot, statusDate, statusTime, seatStatus, handleChangeView} = this.props
        return (
            <Fragment>
                <Course />
                <div style={{ marginBottom: "10px" }}></div>
                <SlotAndDate />
                <div style={{ marginBottom: "10px" }}></div>
                <Seat />
                <div style={{ marginBottom: "10px" }}></div>
                {
                    statusCourse && statusSlot && statusDate && statusTime && seatStatus &&
                    (<dir style={{ display: "flex", justifyContent: "center" }}>
                        <BtnCf actionClick={handleChangeView} view={2}>Proceed to enter reservation</BtnCf>
                    </dir>)
                }

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    statusCourse: state.courseReducer.status,
    statusSlot: state.slotsReducer.status,
    statusDate: state.dateReducer.status,
    statusTime: state.timeReducer.status,
    seatStatus: state.seatReducer.status
})

export default connect(mapStateToProps)(Step1)