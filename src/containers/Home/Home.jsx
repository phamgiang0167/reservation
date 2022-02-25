import React, { Component } from 'react';

import Banner from '../../components/Banner/Banner';
import HomeStep from '../../components/HomeSteps/HomeStep';
import Course from '../../templates/Course/Course';
import Seat from '../../templates/Seat/Seat';
import SlotAndDate from '../../templates/SlotAndDate/SlotAndDate';

class Home extends Component {
    render() {
        
        return (

            <section section className='home__wrapper' >
                <Banner>
                    Private room dining Rakuzo-RAKUZO-Sapporo station sqaure store
                </Banner>

                <div style={{marginBottom: "10px"}}></div>
                <HomeStep />
                <Course />
                <div style={{marginBottom: "10px"}}></div>
                <SlotAndDate />
                <div style={{marginBottom: "10px"}}></div>
                <Seat />
            </section >
        );
    }
}

export default Home;