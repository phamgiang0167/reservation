import React, { Component } from 'react'
import {connect} from "react-redux"
import {actClearTime, actSelectTime} from "../../store/actions/TimeAction"
class TimeItem extends Component {
    state = {
        clicked: false
    }
    render() {
        const {time, clearTime, selectTime, timePicked} = this.props
        return (
            <div className={`timeItem__wrapper ${ timePicked === time? "clicked" : ""}`} 
                onClick={() => {
                    if(time === timePicked){
                        clearTime()
                    }else{
                        clearTime()
                        selectTime(time)
                    }
                }}
            >
                <div className="timeItem__time">
                    {time}
                </div>
                <div className="timeItem__button">
                    <i className="fa-solid fa-circle-dot"></i>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearTime: () => dispatch(actClearTime()),
        selectTime: (time) => dispatch(actSelectTime(time))
    }
}

const mapStateToProps = state => {
    return {
        timePicked: state.timeReducer.time
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TimeItem)