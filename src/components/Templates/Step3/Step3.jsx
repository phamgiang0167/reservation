import React, { Component } from 'react'

export default class Step3 extends Component {
  render() {
    return (
      <div className='step3__wrapper'>
        <h3>Thank you for your reservation</h3>
        <p>We have sent a reservation complete email to your contact information.</p>
        <p>You can also check the reservation details from the reseration management page</p>
        <div className="step3__bonus">
          <p>If you finish as it is, you will not get the PayPay bonus</p>
          <p>If you link with PayPay from this page</p>
          <p>At the store <span>150 Equivalent to yen (PayPay bonus)</span>Can be earned</p>
          <button>PayPay integration</button>
        </div>
        <ul>
          <li>* PayPay bonus will be given about 7 days after your visit</li>
          <li>* The amount of PayPay bonus granted may vary depending on the conditions of your reservations. Please <a href="">see here</a> for details</li>
          <li>* PayPay Bonus cannot be withdrawn or tranferred. Also avaiable at the PayPay official</li>       
        </ul>
      </div>
    )
  }
}
