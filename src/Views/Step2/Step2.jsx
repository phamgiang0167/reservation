import React, { Component } from 'react'
import BtnCf from '../../components/Button/ButtonConfirm/BtnCf'
import SectionGap from '../../components/SectionGap/SectionGap'
import Bonus from '../../templates/Bonus/Bonus'
import Details from '../../templates/Details/Details'
import Form from '../../templates/Form/Form'

export default class extends Component {
  
  render() {
    const { handleChangeView, state, setField} = this.props
    const { name, phone, email, isFirstVisit } = state
    let disabled = "disabled"
    if (name.status && phone.status && email.status) {
      disabled = ""
    }
    return (
      <div className='step2__wrapper'>
        <Details />
        <SectionGap />
        <Bonus />
        <SectionGap />
        <Form state={state} setField={setField} />
        <div className='step2__policy'>
          <p >If the contact information registerd at the time of reservation is invalid, the reservation may not be completed at the discretion of the shop</p>
          <p >Please check the <a href="">term of use, term</a> of <a href="">use</a>, and <a href="">privacy policy regarding the acquisition of PayPay bonus</a></p>
        </div>
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
