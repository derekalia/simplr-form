import React, { Component } from 'react';
import logo from './media/logo.svg';
import FormField from './components/FormField';
import Select from 'react-select';
import CheckedInput from './components/CheckedInput';
import 'react-select/dist/react-select.css';
import styled from 'styled-components';

export default class App extends Component {
  state = {
    name: '',
    email: '',
    username: '',
    password: '',
    website: '',
    type: '',
    options: [
      { value: 'Clothing', label: 'Clothing' },
      { value: 'Technology', label: 'Technology' },
      { value: 'Art', label: 'Art' },
      { value: 'Books', label: 'Books' },
      { value: 'Jewelry', label: 'Jewelry' },
      { value: 'Toys', label: 'Toys' },
      { value: 'Pet Accessories', label: 'Pet Accessories' }
    ],
    checkedOne: false,
    checkedTwo: false,
    errors: {}
  };

  setValue = (e, field) => {
    e.preventDefault();
    this.setState({ [field]: e.target.value });
  };
  setCheck = checkNum => {
    if (this.state[checkNum]) {
      this.setState({ [checkNum]: false });
    } else {
      this.setState({ [checkNum]: true });
    }
  };
  setType = obj => {
    if (obj) {
      this.setState({ type: obj.value });
    } else {
      this.setState({ type: '' });
    }
  };

  runChecks = () => {
    const errors = {};
    this.setState({ errors: {} });
    // name
    if (this.state.name.length === 0) {
      errors.name = 'Please enter a business name';
    }
    // email
    if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = 'Please enter a valid email address';
    }
    // username
    if (this.state.username.length === 0) {
      errors.username = 'Please enter a username';
    }
    // password
    if (this.state.password.length < 6) {
      errors.password = 'Password should have six characters';
    } else if (!/\d/.test(this.state.password)) {
      errors.password = 'Password should have a number';
    } else if (!/[A-Z]/.test(this.state.password)) {
      errors.password = 'Password should have a capital letter';
    } else if (!/[a-z]/.test(this.state.password)) {
      errors.password = 'Password should have a capital letter';
    }

    // biz type
    if (this.state.type.length === 0) {
      errors.type = 'Please select a type of business';
    }

    // checkboxes
    if (!this.state.checkedOne) {
      errors.checkedOne = 'Please check Terms of Service';
    }
    if (!this.state.checkedTwo) {
      errors.checkedTwo = 'Please check Privacy Policy';
    }

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      alert('Registration successful!');
    }
  };

  render() {
    return (
      <AppContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>

        <FormContainer>

          <Title>LET’S GET STARTED</Title>

          <FormItem>
            <FormField
              title="Business Name"
              error={this.state.errors}
              setValue={this.setValue}
              value={this.state.name}
              field="name"
              placeholder="Enter name"
              inputType="text"
            />
          </FormItem>

          <FormItem>
            <FormField
              title="Business Email"
              error={this.state.errors}
              setValue={this.setValue}
              field="email"
              value={this.state.email}
              placeholder="Enter email"
              inputType="text"
            />
          </FormItem>

          <FormItem>
            <FormField
              title="Create a Username"
              error={this.state.errors}
              setValue={this.setValue}
              field="username"
              value={this.state.username}
              placeholder="Enter username"
              inputType="text"
            />
          </FormItem>

          <FormItem>
            <FormField
              title="Password"
              subtitle="6 characters | 1 uppercase | 1 lowercase | 1 digit"
              error={this.state.errors}
              setValue={this.setValue}
              field="password"
              value={this.state.password}
              placeholder="Enter password"
              inputType="password"
            />
          </FormItem>

          <FormItem>
            <FormField
              title="Website"
              subtitle="(Optional)"
              error={this.state.errors}
              setValue={this.setValue}
              field="website"
              value={this.state.website}
              placeholder="Enter website"
              inputType="text"
            />
          </FormItem>

          <FormItem>
            <InputHeader>
              <InputTitle> Type of Business</InputTitle>
            </InputHeader>

            <SelectStyled          
              error={this.state.errors}              
              value={this.state.type}
              options={this.state.options}
              onChange={this.setType}
              field='type'
              placeholder="Select your business"
            />

            <Error>
              {this.state.errors.type ? this.state.errors.type : <div>&nbsp;</div>}
            </Error>
          </FormItem>

          <CheckboxContainer>
            <FormItem>
              <CheckedInput
                checked={this.state.checkedOne}
                setCheck={this.setCheck}
                checkNum="checkedOne"
                error={this.state.errors}
                title="Terms of Service"
              />
              <Error>
                {this.state.errors.checkedOne ? this.state.errors.checkedOne : <div>&nbsp;</div>}
              </Error>
            </FormItem>
            <FormItem>
              <CheckedInput
                checked={this.state.checkedTwo}
                setCheck={this.setCheck}
                checkNum="checkedTwo"
                error={this.state.errors}
                title="Privacy Policy"
              />
              <Error>
                {this.state.errors.checkedTwo ? this.state.errors.checkedTwo : <div>&nbsp;</div>}
              </Error>
            </FormItem>
          </CheckboxContainer>

          <div style={{ marginTop: '50px' }}>
            <RegistrationButton onClick={this.runChecks}>
              REGISTER
            </RegistrationButton>
          </div>
        </FormContainer>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
display: flex; 
flex-direction: column; 
align-items: center;
fontFamily: 'Lato';
`;

const LogoContainer = styled.div`
flex: 1;
align-self: left;
margin-left: 20px;
margin-top: 20px;
@media (max-width: 700px) {
		align-self: center;
	}
`;

const Logo = styled.img`
width: 25vh;
// width: 130px;
`

const FormContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;    
margin-bottom: 5vh;
`;

const Title = styled.div`
color: #46B2E2; 
font-size: 46px;
font-weight:300;
margin-bottom: 25px;
@media (max-width: 600px) {
		font-size:8vw;
	}
`;

const FormItem = styled.div`
  margin: 5px;
`;

export const InputHeader = styled.div`
  display: flex; 
  flex-direction: row;
  margin-bottom: 2px; 
  align-items: center;
  
  @media (max-width: 970px) {
  align-items: flex-start;
    flex-direction: column;
	}
`;
export const InputTitle = styled.div`
  font-size: 20px;color: #363636;margin-right: 5px;
`;

export const InputSubtitle = styled.div`
  font-size: 13px;
  color: #A9A9A9;
  @media (max-width: 600px) {
  align-items: flex-start;
    font-size: 12px; 
	}
  
`;

const SelectStyled = styled(Select)`
  border-radius: 0px;  
  border: ${props => (props.error[props.field] ? 'solid 1.5px #FF3D37' : 'solid 1.5px #C9C9C9')};    
  background-color:white;
  width: 36vw;
  font-size: 20px;
  @media (max-width: 600px) {
		width:73vw;
	}
`;

export const Error = styled.div`
  color: red; margin-top: 3px; font-size: 16px; font-weight: 300;
`;

const CheckboxContainer = styled.div`
  width:37vw;
  margin-top:25px;
    @media (max-width: 600px) {
		width:73vw;
	}
`;

const RegistrationButton = styled.button`
  width: 160px;
  height: 50px;
  font-size: 20px;
  background-color: #3DB0E1;
  color: white;
  border: none;
  &:hover{
    background-color: #1DA1D9;
  }
`;
