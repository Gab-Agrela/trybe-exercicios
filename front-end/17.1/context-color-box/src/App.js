// ./App.js
import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import { MyContext } from './utils/MyContext';

class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={ ['blue', 'red', 'yellow'] } >
        <ColorBox />
      </MyContext.Provider> 
    );
  }
}

export default App;