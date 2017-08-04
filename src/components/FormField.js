import React, { Component } from 'react';
import { Error, InputHeader, InputTitle, InputSubtitle } from '../App';
import styled from 'styled-components';

export default class FormField extends Component {
  render() {
    return (
      <div>
          
          <InputHeader>
            <InputTitle>{this.props.title}</InputTitle>
            <InputSubtitle>{this.props.subtitle}</InputSubtitle>
          </InputHeader>
          
          <Input
            error={this.props.error}
            field={this.props.field}
            type={this.props.inputType}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={e => this.props.setValue(e, this.props.field)}
          />

          <Error>
            {this.props.error[this.props.field] ? this.props.error[this.props.field] : <div>&nbsp;</div>}
          </Error>        
      </div>
    );
  }
}

const Input = styled.input`
padding-left: 8px;
width: 30vw;
height: 2.7vw;
font-size: 20px;
background-color: #F2F2F2;
color: #363636;
border: ${props => (props.error[props.field] ? 'solid 1.5px #FF3D37' : 'solid 1.5px #C9C9C9')}
`;
