import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Component1';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';

function App() {
  return (
    <div>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
       
    //   </header>
    // </div>
  );
}

export default App;
