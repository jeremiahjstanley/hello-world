import React, { Component } from 'react';

export class ControlledForm extends Component {
  constructor() {
    super()

    this.state = {
      country: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchData(this.state.country)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <input
         type='text'
         placeholder='enter a country'
         name='country'
         value={this.state.country}
         onChange={this.handleChange}
       /> 
       <button>
         Search
       </button>
     </form>
    )
  }
}

export default ControlledForm;