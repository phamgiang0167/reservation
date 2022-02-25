import React, { Component } from 'react'

export default class HomeStep extends Component {
    render() {
        return (
            <div className='home__step'>
                <div className="step step-1">Reservation details selection</div>
                <div className="step step-2">Confirmation of reservation details</div>
                <div className="step step-3">Booking is done</div>
            </div>
        )
    }
}
