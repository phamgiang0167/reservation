import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    return (
      <div className="quote">{this.props.children}</div>
    )
  }
}
