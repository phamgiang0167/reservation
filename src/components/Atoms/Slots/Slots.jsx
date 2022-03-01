import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actSelectSlots } from '../../../store/actions/SlotsAction'

class Slots extends Component {

    renderOpt = (num, step) => {
        let arr = []
        for (let i = 0; i < num; i += step) {
            arr.push(i + 1)
        }
        return arr?.map((item, index) => {
            return <option value={item} key={index} selected={this.props.slot == item}>{item} people</option>
        })
    }
    render() {
        const { selectSlots, slot } = this.props
        return (
            <select className='Slots' onChange={(e) => selectSlots(e.target.value)}>
                <option value={0} disabled selected={this.props.slot == 0 ? "true" : "false"}>Select slots</option>
                {this.renderOpt(10, 1)}
            </select>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectSlots: (num) =>{
            dispatch(actSelectSlots(num))
        } 
    }
}

const mapStateToProps = state => {
    return {
        slot: state.slotsReducer.slots
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Slots)