import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode  === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743';
  }
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
}
  return (
    <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   {/* <About/>  */}

   <Textform heading="Enter the text to analyze below"  mode={mode}/>
   </div>
    </>
  );
}

export default App;
