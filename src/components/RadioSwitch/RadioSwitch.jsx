import React, { Component } from 'react'

export default class RadioSwitch extends Component {
    handleCheckedRadio = (value) => {
        this.props.setField(this.props.type, value)
    }
    render() {
        const {checkedStatus} = this.props
        return (
            <table className="radio-group">
                <tr>
                    <td>
                        <input type="radio" name="visit" id="visit-yes" value="yes"
                            onClick={() => this.handleCheckedRadio(true)}
                            checked={checkedStatus}
                        />
                        <label for="visit-yes">Yes</label>
                    </td>
                    <td>
                        <input type="radio" name="visit" id="visit-no" value="no" 
                            onClick={() => this.handleCheckedRadio(false)}
                            checked={!checkedStatus}/>
                        <label for="visit-no" >No</label>
                    </td>
                </tr>
            </table>
        )
    }
    
}
