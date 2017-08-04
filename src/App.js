import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormField from './components/FormField';
import Select from 'react-select';
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
    ]
  };

  logChange = val => {
    console.log(`Selected: ${JSON.stringify(val)}`);
  };

  render() {
    return (
      <div>

        <div>LET’S GET STARTED</div>
        <FormField title="Business Name" error=''/>
        <FormField title="Business Email" error=''/>
        <FormField title="Create a Username" error=''/>
        <FormField title="Password" subtitle="6 characters | 1 uppercase | 1 lowercase | 1 digit" error=''/>
        <FormField title="Website" subtitle="(Optional)" error=''/>
        <FormField title="Type of Business" />

        {/* <select id="dropdown" ref={input => (this.menu = input)}>
          <option value="N/A">N/A</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select> */}

        <Select 
        name="form-field-name" 
        value="Select your business" 
        options={this.state.options} 
        onChange={this.logChange} 
        />

      </div>
    );
  }
}
