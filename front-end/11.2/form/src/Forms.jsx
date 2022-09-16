import React from "react";
import Name from "./Name";
class Form extends React.Component {
    constructor() {
        super() 
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            userName: ""
        }
    }

    handleChange({target}) {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checkbox : target.value
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <form action="">
                <fieldset>
                    <Name value={this.state.userName} handleChange={this.handleChange}/>

                </fieldset>
            </form>
        )
    }
}

export default Form