import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { actSelectDate } from '../../store/actions/DateAction';
import { connect } from 'react-redux';
class Calendar extends Component {
    render() {
        const {selectDate, date} = this.props
        return (
            <div className='calendar'>
                <DatePicker
                    selected={date}
                    dateFormat={'MM/dd/yyyy'}
                    onChange={(date) => selectDate(date)}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectDate: (date) => dispatch(actSelectDate(date))
    }
}


const mapStateToProps = state => {
    return {
        date: state.dateReducer.date
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calendar)


