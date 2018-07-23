import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../../actions';
import { countries } from '../../helper/countryMetrics';

export class CountryInputField extends Component {

  handleChange = (event) => {
    const input = event.target.value;
    const location = countries.find(country => input === country.name);
    location ? this.props.selectLocation(location) : null;
  }

  render() {
    return (
      <input
         type='text'
         placeholder='enter a country'
         onChange={this.handleChange}
       /> 
    )
  };
}

export const mapDispatchToProps = (dispatch) => ({
  selectLocation: (location) => dispatch(setLocation(location))
})

export default connect(null, mapDispatchToProps)(CountryInputField);