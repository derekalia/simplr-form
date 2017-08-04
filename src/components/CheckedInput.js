import React, { Component } from 'react';
import uncheckedError from '../media/uncheckedError.svg';
const checked = require('../media/checked.svg');
const unchecked = require('../media/unchecked.svg');

export default class CheckedInput extends Component {
  render() {
    const checkBox = () => {
      if (this.props.checked) {
        return <img src={checked} alt="checked" style={{width:'24px'}}/>;
      } else if (this.props.error[this.props.checkNum]) {
        return <img  src={uncheckedError} alt="uncheckedError" style={{width:'24px'}}/>;
      }
      return <img src={unchecked} alt="unchecked" style={{width:'24px'}} />;
    };
    return (
      <div style={{ width: '455px' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '4px', alignItems: 'center' }}>
            <div style={{ fontSize: '17px', color: '#363636' }}>{this.props.title}</div>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <div onClick={() => this.props.setCheck(this.props.checkNum)} style={{display:'grid'}}>
              {checkBox()}
            </div>
            <div style={{color:'#787878', marginLeft:'6px',alignSelf:'center'}}>I have read and I do accept <a href='/' style={{color:'#4172A8'}}>{this.props.title.toLowerCase()}</a></div>
          </div>
        </div>
      </div>
    );
  }
}
