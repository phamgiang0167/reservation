import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputForm from '../../Atoms/InputForm/InputForm'
import RadioSwitch from '../../Molecules/RadioSwitch/RadioSwitch'
import {actChangeValue, actClearValue, actVisit} from "../../../store/actions/FormAction"
class Form extends Component {
    
    render() {
        const {setField, form} = this.props

        return (
            <div className='form'>
                <InputForm title={"name"} hint={"Enter your name"} required={"Please input in Katakana"} type={"name"} setField={setField} />
                <InputForm title={"cell phone"} hint={"Enter your phone"} required={"Enter 11 digits without hyphens"} type={"phone"} setField={setField}/>
                <InputForm title={"email address"} hint={"Enter your email"} type={"email"} setField={setField}/>
                <p>Please be careful not to enter the wrong email address</p>
                <p style={{ color: "black" }}>You may not receive the contact email due to the reception refusal settings. Please make settings so that you can receive emails from reserve@retty.me</p>
                <h5>Is that your first visit?<span>Any</span></h5>
                <RadioSwitch setField={setField} type={"isFirstVisit"} checkedStatus={form.isFirstVisit}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    setField: (type, value) => dispatch(actChangeValue(type, value))
})

const mapStateToProps = state => ({
    form: state.formReducer
})
export default connect(mapStateToProps,mapDispatchToProps)(Form)