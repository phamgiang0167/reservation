import React, { Component, Fragment } from 'react'

import { connect} from "react-redux"
import Course from '../../Organisms/Course/Course'
import Seat from '../../Organisms/Seat/Seat'
import SlotAndDate from '../../Organisms/SlotAndDate/SlotAndDate'
import BtnCf from "../../Atoms/ButtonConfirm/BtnCf"
class Step1 extends Component {
    render() {
        const {statusCourse, statusSlot, statusDate, statusTime, seatStatus, handleChangeView} = this.props
        return (
            <div className='step1__wrapper'>
                <Course />
                <SlotAndDate />
                <Seat />
                {
                    statusCourse && statusSlot && statusDate && statusTime && seatStatus &&
                    (<dir style={{ display: "flex", justifyContent: "center" }}>
                        <BtnCf actionClick={handleChangeView} view={2}>Proceed to enter reservation</BtnCf>
                    </dir>)
                }

            </div>
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