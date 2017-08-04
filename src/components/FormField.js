import React, { Component } from 'react';

export default class FormField extends Component {
  render() {    
    return (
      <div>
        <label>
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '2px', alignItems: 'center' }}>
            <div style={{ fontSize: '20px', color: '#363636' }}>{this.props.title}</div>
            <div style={{ fontSize: '15px', color: '#A9A9A9', marginLeft: '5px' }}>{this.props.subtitle}</div>
          </div>
          <div>
            <input
              style={{
                paddingLeft: '8px',
                width: '440px',
                height: '40px',
                fontSize: '20px',
                backgroundColor: '#F2F2F2',
                color: '#363636',
                border: this.props.error[this.props.field] ? 'solid 1.5px #FF3D37' : 'solid 1.5px #C9C9C9'
              }}
              type={this.props.inputType}
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={e => this.props.setValue(e, this.props.field)}
            />
          </div>
          <div style={{ color: 'red', marginTop: '3px', fontSize: '16px',fontWeight:'300' }}>
            {this.props.error[this.props.field] ? this.props.error[this.props.field] : <div>&nbsp;</div>}
          </div>
        </label>
      </div>
    );
  }
}
