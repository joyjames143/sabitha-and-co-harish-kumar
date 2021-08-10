import React, { useState, useEffect } from 'react';
import './App.css';
import PreLoader from "./components/PreLoader"
import Final from './components/Final';

function App() {
  
  const [ initialLoader, setInitialLoader ] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setTimeout(setInitialLoader(false))
    })
    
    return () => clearTimeout(timeout);

  },[]);

  return (
    <div className="App">
      {

        initialLoader ? 
        <PreLoader  /> :
        <Final/>
      }
      
    </div>
  );
}

export default App;
