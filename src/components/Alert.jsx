import React from 'react'

export default function Alert(props) {
    const capatalize=(word)=>{
        const newword=word[0].toUpperCase()+word.slice(1);
        return newword;
    }
  

    
    return (
        <div style={{height:"50px"}}>
        {props.alert &&<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatalize(props.alert.type)} :</strong> {props.alert.alertmsg}
        
      </div>} 
      </div>
    )
     
}
