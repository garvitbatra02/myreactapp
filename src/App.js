
import './App.css';
import Accordian from './components/Accordian';
import Navbar from "./components/Navbar"
import TextArea from './components/TextArea';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import Accordian from 
// let name="garvit";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert=(alerttext,alertmode)=>
  {
    setalert({
      alertmsg:alerttext,
      type:alertmode
    });
    setTimeout(()=>{
      setalert(null)
    }, 1500);
  }


  
  const changemode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#2a3050";
      showalert("Dark mode enabled successfully","success");
      document.title="textUtils-Darkmode";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showalert("light mode enabled successfully","success");
      document.title="textUtils-lightmode";

    }
  }





  return (
    <>
    <Router>
  <Navbar title="TextUtils" modeval={mode} func={changemode}  />
  <Alert alert={alert}/>
 
  {/* <Accordian/> */}

  <Routes>
          
          <Route exact path="/about" element={ <Accordian modeval={mode}/>}/>
         
       
          <Route exact path="/" element={<div className="container"><TextArea heading="Enter the text to analyze below" modeval={mode}  showalert={showalert}/></div>}/>
          
        
        </Routes>


 </Router>
  </>
  );
}

export default App;
