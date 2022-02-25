import React, { Component } from 'react'

export default class SectionTitle extends Component {
    render() {
        return (
            <div className="section__title">
                {this.props.children}
            </div>
        )
    }
}
