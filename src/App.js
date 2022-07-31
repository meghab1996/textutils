
import logo from './logo.svg';
import Navbar from "./Components/Navbar";
import './App.css';
import TextForm from './Components/TextForm'
import React, { useState} from 'react'

// import About from './Components/About';

let name = "Medusa"
function App() {
  const toggleMode = ()=>{
    if(mode==='light'){
      setdarkMode('dark')
      document.body.style.backgroundColor = '#222251'
      setTextMode("Enable Light Mode")
    }
    else{
      setdarkMode('light')
      document.body.style.backgroundColor = 'white'
      setTextMode("Enable Dark Mode")
      
    }
  }

  

  const [mode, setdarkMode] = useState('light');  // Whether dark mode is enabled or not
  const [textMode,setTextMode] = useState("Enable Dark Mode")
  return (
    <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} textMode={textMode} />
   <div className="container my-3" >
      <TextForm heading="Enter the text to analyse" mode={mode}/>
      {/* <About/>  */}
   </div>
    </>
  );
}

export default App;
