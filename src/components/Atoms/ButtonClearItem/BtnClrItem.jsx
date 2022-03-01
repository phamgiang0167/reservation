import React, { Component } from 'react';

class BtnClrItem extends Component {
    render() {
        const { style, clearCourse, clearSlots, clearTime, clearDate, clearSeat } = this.props
        return (
            <div
                className='btn-clear-item'
                style={style}
                onClick={() => {
                    Boolean(clearCourse) && clearCourse()
                    Boolean(clearSlots) && clearSlots()
                    Boolean(clearTime) && clearTime()
                    Boolean(clearDate) && clearDate()
                    Boolean(clearSeat) && clearSeat()
                }}>
                {this.props.children}
            </div>
        );
    }
}

export default BtnClrItem;