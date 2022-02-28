import React, { Component } from 'react'

export default class HomeStep extends Component {
    render() {
        const {step} = this.props
        return (
            <div className='home__step'>
                <div className={"step step-1" + `${step == '1' ? " active" : ""}`}>Reservation details selection</div>
                <div className={"step step-2" + `${step == '2' ? " active" : ""}`}>Confirmation of reservation details</div>
                <div className={"step step-3" + `${step == '3' ? " active" : ""}`}>Booking is done</div>
            </div>
        )
    }
}
