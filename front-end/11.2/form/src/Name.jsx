import React from "react";

class Name extends React.Component {
    render() {
        const { value, handleChange } = this.props
        let error = undefined
        if(value.length > 40) error = "Nome muito grande!"

        return (
            <label>Digite seu Nome:
                <input 
                type="text" 
                name="userName"
                value={value}
                onChange={handleChange}
                className="userName"
                />
                <span>{error ? error : ''}</span>
            </label>
            
        )
    }
}

export default Name