import React, { Component } from 'react';

const checked = require('../media/checked.svg');
const unchecked = require('../media/unchecked.svg');

export default class CheckedInput extends Component {
  render() {
    return (
      <div>
        <div>
          <div>Terms of Service</div>
          <div onClick={()=>this.props.setCheck(this.props.checkNum)}>
            {this.props.checked ? <img src={checked} alt="checked" /> : <img src={unchecked} alt="unchecked" />}
          </div>
          <div>I have read and I do accept terms of services</div>
        </div>
      </div>
    );
  }
}
