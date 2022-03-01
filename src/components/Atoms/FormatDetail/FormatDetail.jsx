import React, { Component } from 'react'

export default class FormatDetail extends Component {
  render() {
    return (
      <div className='formatDetail__wrapper'>
          {this.props.children}
          </div>
    )
  }
}
