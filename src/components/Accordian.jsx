import React from 'react'
import { useState } from 'react';
export default function Accordian(props) {

// const [mystyle,changestyle]=useState({
//     color:"black",
//     backgroundColor:"white"
// })

// const [mode,modechange]=useState("Turn on dark mode");


// const togglestyle=()=>{
//     if(mystyle.color==='white'){
//         changestyle({ color:"black",
//         backgroundColor:"white"});
//         modechange("Turn on Dark mode");
//     }
//     else{
//         changestyle({ color:"white",
//         backgroundColor:"black"});
//         modechange("Turn on Light mode");

//     }
//     }

// if(props.modeval=="dark"){
//   changestyle({ color:"white",
//   backgroundColor:"rgb(178, 181, 189"});
// }
// else{
//   changestyle({ color:"black",
//   backgroundColor:"white"});
// }
 let mystyle={
   color:props.modeval==='dark'?'white':'black',
   backgroundColor:props.modeval==='dark'?'rgb(92 98 115)':'white'
 }
    return (
        <div className="container" style={mystyle}>
        <h1 className="container my-3">About our app</h1>
            <div className="accordion " id="accordionExample">
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button "style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body ">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button type="button" className="btn btn-primary my-4" onClick={togglestyle}>{mode}</button> */}
        </div>
    );
}
