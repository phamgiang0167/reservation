import React, { Component } from 'react'

export default class BtnPickCourse extends Component {
    render() {
        const {style, pickCourse, data} = this.props
        return (
            <button className="btn-pick-course"
                style={style}
                onClick={() => {
                    pickCourse(data)
                }}
            >
                {this.props.children}
            </button>
        )
    }
}
