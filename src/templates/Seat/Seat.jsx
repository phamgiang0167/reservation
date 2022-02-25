import React, { Component } from 'react'
import SectionTitle from '../../components/Section_title/SectionTitle'

export default class Seat extends Component {
    render() {
        return (
            <div className='seat__wrapper'>
                <SectionTitle>
                    Please select a
                    <span> seat</span>
                </SectionTitle>
            </div>
        )
    }
}
