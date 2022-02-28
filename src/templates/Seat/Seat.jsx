import React, { Component } from 'react'
import SectionTitle from '../../components/Section_title/SectionTitle'
import { seats } from '../../data/seats'
import SeatItem from '../../components/SeatItem/SeatItem'
import { connect } from 'react-redux'
import Quote from '../../components/Quote/Quote'
class Seat extends Component {
    listSeats = seats
    renderSeats = (seat) => {
        return (
            seat.status ? 
                <SeatItem data={seat.seat}/> :
                this.listSeats.map((item, index) =>{
                    return <SeatItem key={index} data={item}/>
                })
        )
            
    }
    render() {
        const {statusCourse, statusSlot, statusDate, statusTime, seat} = this.props
        
        return (
            <div className='seat__wrapper'>
                <SectionTitle>
                    Please select a
                    <span> seat</span>
                </SectionTitle>
                {
                    statusCourse &&  statusSlot && statusDate && statusTime ?
                        this.renderSeats(seat) :
                        <Quote>
                            You can select the seats that can be reserved by selecting the number of people, the date of visit, the time, and the course
                        </Quote>
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
    seat: state.seatReducer
})

export default connect(mapStateToProps)(Seat)