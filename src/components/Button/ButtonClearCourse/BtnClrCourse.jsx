import React, { Component } from 'react';

class BtnClrCourse extends Component {
    render() {
        const { style, clearCourse, clearSlots } = this.props
        return (
            <div
                className='btn-clear-course'
                style={style} 
                onClick={() =>{
                    clearCourse()
                    clearSlots()}
                }>
                {this.props.children}
            </div>
        );
    }
}

export default BtnClrCourse;