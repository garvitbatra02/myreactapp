import React from 'react'
// import PropTypes from 'prop-types'
// import { useState } from 'react';
// import {link} from 'react-router-dom';
import {Link } from 'react-router-dom';
export default function Navbar(props) {

  



    return (
        <>
   <nav className={`navbar navbar-expand-lg navbar-${props.modeval} bg-${props.modeval}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
  
  
    <div className={`form-check form-switch mx-3 text-${props.modeval==="dark"?"light":"dark"}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.func}/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Turn on {props.modeval==="dark"?"light":"dark"}</label>
</div>
  </div>
</nav>

 </>
    );
}
// Navbar.propTypes={
//     title:PropTypes.string.isRequired,
    
// }
// Navbar.defaultProps={title:"set title here"}
