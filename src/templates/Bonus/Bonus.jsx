import React, { Component } from 'react'

export default class Bonus extends Component {
    render() {
        return (
            <div className='bonus__wrapper'>
                <h4>Earn PayPay Bonus</h4>
                <h4>In visit us <span>150 equivalent yen </span>(PayPay bonus) <span>acquision</span></h4>
                <ul>
                    <li>* If you have not linked with PayPay, you can link from the reseration completion screen</li>
                    <li>* The amount of PayPay bonus granted may vary depending on the conditions of your reservation. Please <a href="">see here</a> for details</li>
                    <li>* The maximum PayPay bonus you can get with Retty is equivalent to 3.000 yen per month</li>
                    <li>* PayPay Bonus cannot be withdrawn or transferred. Also avaiable at the PayPay official store</li>
                </ul>
            </div>
        )
    }
}
