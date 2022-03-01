import React, { Component } from 'react'

export default class BtnPickItem extends Component {
    render() {
        const {style, onClickAction, data} = this.props
        return (
            <button className="btn-pick-item"
                style={style}
                onClick={() => {
                    onClickAction(data)
                }}
            >
                {this.props.children}
            </button>
        )
    }
}
