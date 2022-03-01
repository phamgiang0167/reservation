import React, { Component } from 'react'

export default class TimeDetail extends Component {
  render() {
    return (
      <div className='time-detail__wrapper'>
          {this.props.children}
      </div>
    )
  }
}
