import React, { Component } from 'react'
import TimeItem from '../../Atoms/TimeItem/TimeItem'
import Carousel from 'react-elastic-carousel';
export default class Time extends Component {
    breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 550, itemsToShow: 6, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 8 },
        { width: 1150, itemsToShow: 9, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 10 },
        { width: 1750, itemsToShow: 11 },
    ]
    renderTimeItems = () => {
        let arr = []
        for (let i = 0, j = 0; i < 24; i++) {
            for (let k = 0; k < 2; k++) {
                arr.push(`${i}:${j === 0 ? "00" : "30"}`)
                if (j === 0)
                    j = 30
                else
                    j = 0
            }

        }
        return arr?.map((item, index) => {
            return <TimeItem time={item} key={index}/>
        })
    }
    render() {
        
        return (
            <Carousel
                breakPoints={this.breakPoints}
                itemsToScroll={1}
                disableArrowsOnEnd={false}
                className='owl-carousel'>
                {this.renderTimeItems()}
            </Carousel>
        )
    }
}
