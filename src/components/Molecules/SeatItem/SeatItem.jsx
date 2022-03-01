import React, { Component } from 'react'
import { connect } from 'react-redux'
import BtnPickItem from "../../Atoms/ButtonPickItem/BtnPickItem"
import BtnClrItem from '../../Atoms/ButtonClearItem/BtnClrItem'
import { actSelectSeat, actClearSeat } from "../../../store/actions/SeatAction"
class SeatItem extends Component {
    render() {
        const { data, pickSeat, status, clearSeat, hideBtn } = this.props
        return (
            <div className='seatItem__wrapper'>
                <div
                    className="seatItem__image"
                    style={{ backgroundImage: data.image ? `url(${data.image})` : `url(./img/no-image.png)` }}
                >
                </div>
                <div className="seatItem__detail">
                    <div className="seatItem__detail-name">
                        {data.name}
                    </div>
                    <div className="seatItem__detail-fee">
                        Charge fee: {data.fee}
                    </div>
                </div>
                {   
                    hideBtn ? "" :
                    status ?
                    (<BtnClrItem clearSeat={clearSeat}>
                        Clear
                    </BtnClrItem>) :   
                    (<BtnPickItem onClickAction={pickSeat} data={data}>
                        Select
                    </BtnPickItem>) 
                }

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pickSeat: (seat) => dispatch(actSelectSeat(seat)),
        clearSeat: () => dispatch(actClearSeat())
    }
}

const mapStateToProps = state => {
    return {
        status: state.seatReducer.status
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeatItem)