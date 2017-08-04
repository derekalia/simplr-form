import React, { Component } from 'react';
import logo from './media/logo.svg';
import FormField from './components/FormField';
import Select from 'react-select';
import CheckedInput from './components/CheckedInput';
import 'react-select/dist/react-select.css';

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

  setValue = (e,field) =>{        
    this.setState({[field]:e.target.value})
  }  
  setCheck = (checkNum) =>{        
    if(this.state[checkNum]){this.setState({[checkNum]: false });}
    else{this.setState({[checkNum]: true });}            
  }
  setType = (obj) => {    
    this.setState({ type: obj.value });
  }

  runChecks = () => {
    const errors = {}
// name
    if(this.state.name.length === 0){
      errors.name = "Please enter a business name"
    }
    // email
    if(!/\S+@\S+\.\S+/.test(this.state.email)){
      errors.email = "Please enter a valid email address"
    }
    // username
    if(this.state.username.length === 0){
      errors.name = "Please enter a username"
    }
// password
    if(this.state.password.length < 6){
      errors.password = "Password should have six characters"
    }
    else if(!/\d/.test(this.state.password)){
      errors.password = "Password should have a number"
    } 
    else if(!/[A-Z]/.test(this.state.password)){
      errors.password = "Password should have a capital letter"
    } 
    else if(!/[a-z]/.test(this.state.password)){
      errors.password = "Password should have a capital letter"
    } 
    
    if(this.state.type.length === 0){
      errors.name = "Please select a type of business"
    }
    if(!this.state.checkedOne){
      errors.checkedOne = "Please check Terms of Service"
    }
    if(!this.state.checkedTwo){
      errors.checkedTwo = "Please check Privacy Policy"
    }

    this.setState({errors})
  }

  render() {
    return (
      <div>
        <img src={logo} />
        <div>LET’S GET STARTED</div>
        <FormField 
        title="Business Name" 
        error="" 
        setValue={this.setValue}        
        value={this.state.name} 
        field='name'
        placeholder="Enter name"
        inputType="text"
        />        
        <FormField 
        title="Business Email" 
        error="" 
        setValue={this.setValue} 
        field='email'
        value={this.state.email} 
        placeholder="Enter email"
        inputType="text"
        />
        <FormField 
        title="Create a Username" 
        error="" 
        setValue={this.setValue} 
        field='username'
        value={this.state.username} 
        placeholder="Enter username"
        inputType="text"
        />
        <FormField 
        title="Password" 
        subtitle="6 characters | 1 uppercase | 1 lowercase | 1 digit" 
        error="" 
        setValue={this.setValue} 
        field='password'
        value={this.state.password} 
        placeholder="Enter password" 
        inputType="password"
        />
        <FormField 
        title="Website" subtitle="(Optional)" 
        error="" 
        setValue={this.setValue} 
        field='website'
        value={this.state.website} 
        placeholder="Enter website"
        inputType="text"
        />
        {/* <FormField 
        title="Type of Business"  
        setValue={this.setType} 
        value={this.state.type} 
        placeholder="Enter type"        
        /> */}
       
        <Select
          name="form-field-name"
          value={this.state.type}
          options={this.state.options}
          onChange={this.setType}
          placeholder="Select your business"
        />

        <CheckedInput checked={this.state.checkedOne} setCheck={this.setCheck} checkNum='checkedOne'/>
        <CheckedInput checked={this.state.checkedTwo} setCheck={this.setCheck} checkNum='checkedTwo' />


      <button onClick={this.runChecks}>REGISTER</button>


      </div>
    );
  }
}
