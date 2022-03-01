import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav__container">
          <div className="nav__name">
              {this.props.children}
          </div>
      </div>
    )
  }
}
