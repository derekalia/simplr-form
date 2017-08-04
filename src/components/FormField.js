import React, { Component } from 'react';

export default class FormField extends Component {
  state = {
    title: ''
  };

  render() {
    return (
      <div>
        <form>
          <label>
            <div>
              <div>{this.props.title}</div>
              <div>{this.props.subtitle}</div>
            </div>
            <div><input type="text" name="name" /></div>
          </label>
        </form>
      </div>
    );
  }
}
