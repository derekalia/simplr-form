import React from 'react';
import uncheckedError from '../media/uncheckedError.svg';
import styled from 'styled-components';

const checked = require('../media/checked.svg');
const unchecked = require('../media/unchecked.svg');

const CheckedInput = props => {
  const checkBox = () => {
    if (props.checked) {
      return <CheckImg src={checked} alt="checked" />;
    } else if (props.error[props.checkNum]) {
      return <CheckImg src={uncheckedError} alt="uncheckedError" />;
    }
    return <CheckImg src={unchecked} alt="unchecked" />;
  };
  return (
    <CheckInputContainer>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '4px', alignItems: 'center' }}>
        <div style={{ fontSize: '17px', color: '#363636' }}>{props.title}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div onClick={() => props.setCheck(props.checkNum)} style={{ display: 'grid' }}>
          {checkBox()}
        </div>
        <CheckText>
          I have read and I do accept <a href="/" style={{ color: '#4172A8' }}>{props.title.toLowerCase()}</a>
        </CheckText>
      </div>
    </CheckInputContainer>
  );
};

export default CheckedInput;

const CheckImg = styled.img`
width:24px;
`;
const CheckInputContainer = styled.div`
 width: 100%;
`;

const CheckText = styled.div`
color: #787878;
margin-left: 6px;
align-self: center;
`;

