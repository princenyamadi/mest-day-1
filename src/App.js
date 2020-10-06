import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Component1';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import Component7 from './components/Component7';
import Component8 from './components/Component8';
import Component9 from './components/Component9';

function App() {
  return (
    <div>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
      <Component6/>
      <Component7/>
      <Component8 />
      <Component9 />
      
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
       
    //   </header>
    // </div>
  );
}

export default App;
