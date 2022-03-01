import React, { Component } from 'react'
import Validate from './modules/validate'
export default class InputForm extends Component {
    state = {
        pass: null
    }
    handleValidation(e, type) {
        let data = e.target.value
        let validate = new Validate(type)
        if (validate.validateField(data)) {
            this.props.setField(type, {status: true, value: data})
            this.setState({ pass: true })
        } else {
            this.props.setField(type, {status: false, value: ""})
            this.setState({ pass: false })
        }
    }
    render() {
        const { title, hint, required, type } = this.props
        const { pass } = this.state
        return (
            <div className='inputForm'>
                <p>{title} <span>{required ? `(${required})` : ""}</span></p>
                <div className="inputForm__field">
                    {pass ? 
                        <div className="inputForm__field-icon success" style={{ backgroundImage: `url("./img/checked.png")` }}></div> :
                        <div className="inputForm__field-icon warning" style={{ backgroundImage: `url("./img/warning.png")` }}></div>   
                    }
                    <input type="text" placeholder={hint} onKeyUp={(e) => this.handleValidation(e, type)} />
                </div>
            </div>
        )
    }
}
