import React, { Component } from 'react';
import "./quantiryPicker.css"

class QuantiryPicker extends Component{
state = {

};

render(){
    return(
     <div className="quantiryPicker-page">   
        <button className="btn btn-sm btn-primary plus">+</button> 
        <label className="quantiry-value">5</label>
        <button className="btn btn-sm btn-primary minus">-</button>
    </div>
        );
    }


}

export default QuantiryPicker
