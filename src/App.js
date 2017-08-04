import React, { Component } from 'react';
import logo from './media/logo.svg';
import FormField from './components/FormField';
import Select from 'react-select';
import CheckedInput from './components/CheckedInput';
import 'react-select/dist/react-select.css';
import styled from 'styled-components'






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

    if(Object.keys(errors).length === 0){
      alert('Registration successful!')
    }
    
  };



  render() {
    return (
      <AppContainer>
        <LogoContainer>
          <img style={{ width: '130px' }} src={logo} />
        </LogoContainer>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '60px',
            marginBottom: '60px'
          }}
        >
          <div style={{ flex: 1, marginBottom: '25px' }}>
            <div style={{ color: '#46B2E2', fontSize: '46px',fontWeight:'300' }}>LET’S GET STARTED</div>
          </div>
          <div style={{ margin: '5px' }}>
            <FormField
              title="Business Name"
              error={this.state.errors}
              setValue={this.setValue}
              value={this.state.name}
              field="name"
              placeholder="Enter name"
              inputType="text"
            />
          </div>
          <div style={{ margin: '5px' }}>
            <FormField
              title="Business Email"
              error={this.state.errors}
              setValue={this.setValue}
              field="email"
              value={this.state.email}
              placeholder="Enter email"
              inputType="text"
            />
          </div>
          <div style={{ margin: '5px' }}>
            <FormField
              title="Create a Username"
              error={this.state.errors}
              setValue={this.setValue}
              field="username"
              value={this.state.username}
              placeholder="Enter username"
              inputType="text"
            />
          </div>
          <div style={{ margin: '5px' }}>
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
          </div>
          <div style={{ margin: '5px' }}>
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
          </div>
          <div style={{ margin: '5px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '2px', alignItems: 'center' }}>
              <div style={{ fontSize: '20px', color: '#363636' }}>Type of Business</div>
            </div>

            <Select
              style={{
                border: !this.state.errors.type ? 'solid 1.5px #C9C9C9' : 'solid 1.5px #FF3D37',
                borderRadius: '0px',
                width: '455px',
                fontSize: '20px'
              }}
              error={this.state.errors}
              name="form-field-name"
              value={this.state.type}
              options={this.state.options}
              onChange={this.setType}
              placeholder="Select your business"
            />
            <div style={{ color: 'red', marginTop: '3px', fontSize: '16px',fontWeight:'300' }}>               
              {this.state.errors.type ? this.state.errors.type : <div>&nbsp;</div>}
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div style={{ marginTop: '5px' }}>
              <CheckedInput
                checked={this.state.checkedOne}
                setCheck={this.setCheck}
                checkNum="checkedOne"
                error={this.state.errors}
                title="Terms of Service"
              />
              <div style={{ color: 'red', marginTop: '3px', fontSize: '16px',fontWeight:'300' }}>               
              {this.state.errors.checkedOne ? this.state.errors.checkedOne : <div>&nbsp;</div>}              
            </div>
            </div>
            <div style={{ marginTop: '5px' }}>
              <CheckedInput
                checked={this.state.checkedTwo}
                setCheck={this.setCheck}
                checkNum="checkedTwo"
                error={this.state.errors}
                title="Privacy Policy"
              />
              <div style={{ color: 'red', marginTop: '3px', fontSize: '16px',fontWeight:'300' }}>                             
              {this.state.errors.checkedTwo ? this.state.errors.checkedTwo : <div>&nbsp;</div>}
            </div>
            </div>            
          </div>

          <div style={{ marginTop: '50px' }}>
            <button
              style={{
                width: '160px',
                height: '50px',
                fontSize: '20px',
                backgroundColor: '#3DB0E1',
                color: 'white',
                border: 'none'
              }}
              onClick={this.runChecks}
            >
              REGISTER
            </button>
          </div>
        </div>

        <div style={{ flex: 1 }} />
      </AppContainer>
    );
  }
}


const AppContainer = styled.div`
display: flex; 
flex-direction: column; 
align-items: center;
fontFamily: Lato;
`

const LogoContainer = styled.div`
flex: 1;
align-self: left;
margin-left: 20px;
margin-top: 20px;
@media (max-width: 700px) {
		align-self: center;
	}
`;
