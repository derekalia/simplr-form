import React, { Component } from 'react';

export default class FormField extends Component {
  
  render() {
    return (
      <div>
        <form>
          <label>
            <div>
              <div>{this.props.title}</div>
              <div>{this.props.subtitle}</div>
            </div>
            <div><input style={{border:'solid 1px red'}}
            type={this.props.inputType} 
            placeholder={this.props.placeholder} 
            value={this.props.value} 
            onChange={(e)=>this.props.setValue(e,this.props.field)}/></div>
          </label>
        </form>
      </div>
    );
  }
}
