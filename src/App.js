import logo from './logo.svg';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform'
import About from './About';
import Alertt from './Alertt';
// import { Link } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('navbar-gradient')
  const tooglemode=()=>{
if(mode==='navbar-gradient'){
  setmode('dark-mode')
  document.body.style.backgroundColor='#343a40'
  showalert("dark mode is enable","success")
}
else{
  setmode('navbar-gradient')
  document.body.style.backgroundColor='white'
  showalert("dark mode is disable","success")
}
  }
  const bluemode=()=>{
    if(mode==='navbar-gradient'){
      setmode('blue-mode')
      document.body.style.backgroundColor='blue'
      showalert("blue mode is enable","success")
    }
    else{
      setmode('navbar-gradient')
      document.body.style.backgroundColor='white'
      showalert("blue mode is disable","success")
    }
      }
      const greemode=()=>{
        if(mode==='navbar-gradient'){
          setmode('green-mode')
          document.body.style.backgroundColor='green'
          showalert("dark mode is enable","success")
        }
        else{
          setmode('navbar-gradient')
          document.body.style.backgroundColor='white'
          showalert("dark mode is disable","success")
        }
          }
  const [alerttt, setalerttt] = useState(null)
  const showalert=(message,type)=>{
    setalerttt({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalerttt(null)
    }, 1500);
  }
  return (
    <div>
      {/* Navbar with mode toggles */}
      <Navbar mode={mode} tooglemode={tooglemode} blue={bluemode} green={greemode}></Navbar>

      {/* Alert message */}
      <Alertt alert={alerttt} />

    
      {/* Define Routes */}
        <Textform show={showalert} heading="Enter your text here" mode={mode} />
    
    
    {/* // <Navbar mode={mode} tooglemode={tooglemode} blue={bluemode} green={greemode}></Navbar>
    // <Alertt alert={alerttt}></Alertt>
    // <Textform show={showalert} heading="Enter your text here"  mode={mode}></Textform>
    // <About></About>  */}
    </div>
       
  );
}

export default App;
