import React from 'react';
import { Error, InputHeader, InputTitle, InputSubtitle } from '../App';
import styled from 'styled-components';

const FormField = props => (
  <div>
    <InputHeader>
      <InputTitle>{props.title}</InputTitle>
      <InputSubtitle>{props.subtitle}</InputSubtitle>
    </InputHeader>

    <Input
      error={props.error}
      field={props.field}
      type={props.inputType}
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => props.setValue(e, props.field)}
    />

    <Error>
      {props.error[props.field] ? props.error[props.field] : <div>&nbsp;</div>}
    </Error>
  </div>
);

export default FormField;

const Input = styled.input`
padding-left: 8px;
width: 35vw;
height: 35px;
font-size: 20px;
background-color: #F2F2F2;
color: #363636;
border: ${props => (props.error[props.field] ? 'solid 1.5px #FF3D37' : 'solid 1.5px #C9C9C9')};
@media (max-width: 600px) {
		width:70vw;
	}
`;

