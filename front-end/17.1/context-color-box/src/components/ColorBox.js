// ./components/ColorBox.js
import React from 'react';
import '../styles/box.css';
import { MyContext } from '../utils/MyContext';

class ColorBox extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0,
        }
    }
  render() {
    const { index } = this.state;
    let newIndex = index
      return(
        <MyContext.Consumer>
            {(value) => (
                <button
                    type="button"
                    className="box"
                    style={ { backgroundColor: value[index] } }
                    onClick = { () => {
                        if(index < 2) {
                            this.setState({ index: newIndex+= 1});
                        }else {
                            this.setState({ index: 0 })
                        }
                    }}
                >
                    Click me to change my color!
                </button>
            )}
        
      </MyContext.Consumer>

    )
}
}

export default ColorBox;