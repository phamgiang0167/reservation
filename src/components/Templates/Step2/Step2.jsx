import React, { Component } from 'react'
import BtnCf from '../../Atoms/ButtonConfirm/BtnCf'
import Bonus from '../../Atoms/Bonus/Bonus'
import Details from '../../Organisms/Details/Details'
import Form from "../../Organisms/Form/Form"
import { connect } from 'react-redux'

class Step2 extends Component {

  render() {
    const { handleChangeView, form } = this.props
    const {name, phone, email, isFirstVisit} = form
    let disabled = "disabled"
    if (name.status && phone.status && email.status) {
      disabled = ""
    }
    return (
      <div className='step2__wrapper'>
        <Details />
        <Bonus />
        <Form />
        <div className='step2__button'>
          <div className="step2__btn step2__button-1">
            <BtnCf
              style={{ backgroundColor: "#fff", color: "rgb(92, 85, 85)", borderColor: "rgb(216, 208, 208)", }}
              actionClick={handleChangeView} view={1}
            >
              Return to the previous screen
            </BtnCf>

          </div>
          <div className="step2__btn step2__button-2">
            <BtnCf actionClick={handleChangeView} view={3} disabled={disabled}>
              <p>I agree to the the terms and privacy policy</p>
              <p>Confirm with this reservation content</p>
            </BtnCf>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
    form: state.formReducer
})

export default connect(mapStateToProps)(Step2)