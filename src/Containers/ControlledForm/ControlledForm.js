import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInitialLocation } from '../../thunks/setInitialLocation'

export class ControlledForm extends Component {
  constructor() {
    super()

    this.state = {
      initialLocation: ''
    }
  }

  handleChange = (event) => {
    const initialLocation = event.target.value;
    this.setState({ initialLocation });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.selectInitialLocation(this.state.initialLocation);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <input
         value={this.state.initialLocation}
         type='text'
         placeholder='enter a country'
         onChange={this.handleChange}
       /> 
       <button>
         Search
       </button>
     </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  selectInitialLocation: (initialLocation) => dispatch(setInitialLocation(initialLocation))
})

export default connect(null, mapDispatchToProps)(ControlledForm);