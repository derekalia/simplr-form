import React, { Component } from 'react';
import uncheckedError from '../media/uncheckedError.svg'
const checked = require('../media/checked.svg');
const unchecked = require('../media/unchecked.svg');

export default class CheckedInput extends Component {
  render() {

    const checkBox = () => {
      if(this.props.checked){
       return  <img src={checked} alt="checked" />
      }
      else if(this.props.error[this.props.checkNum]){
        return <img src={uncheckedError} alt="uncheckedError" />;
      }
      
        return <img src={unchecked} alt="unchecked" />
      }
    

    return (
      <div>
        <div>
          <div>Terms of Service</div>
          <div onClick={()=>this.props.setCheck(this.props.checkNum)}>
            {checkBox()}
          </div>
          <div>I have read and I do accept terms of services</div>
        </div>
      </div>
    );
  }
}
