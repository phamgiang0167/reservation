import React, { Component } from 'react'

export default class BtnCf extends Component {
    render() {
        const {actionClick, style, view, disabled} = this.props
        return (
            <button className={'btn-cf ' + `${disabled}`} style={style} onClick={() => actionClick(view)} >
                {this.props.children}
            </button>
        )
    }
}
