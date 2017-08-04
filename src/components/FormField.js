import React, { Component } from 'react';

export default class FormField extends Component {


    render() {

        const err = !!this.props.error[this.props.field];
        console.log(`${this.props.field  } ${ err}`)
        return (
      <div>
        <form>
          <label>
            <div>
              <div>{this.props.title}</div>
              <div>{this.props.subtitle}</div>
            </div>
            <div>
              <input
                style={{ border: this.props.error[this.props.field] ? 'solid 1px red' : 'solid 1px black'}}
                type={this.props.inputType}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={e => this.props.setValue(e, this.props.field)}
              />              
            </div>
            <div style={{color:'red'}}>
                {this.props.error[this.props.field]}                
                </div>
          </label>
        </form>
      </div>
    );
  }
}
