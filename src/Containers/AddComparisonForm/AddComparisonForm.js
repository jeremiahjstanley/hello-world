import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { countries } from '../../helper/countryMetrics';
import { addComparisonLocation } from '../../actions';
import CountryInputField from '../CountryInputField/CountryInputField';

export class AddComparisonForm extends Component {

  handleChange = (event) => {
    const input = event.target.value;
    const additionalLocation = countries.find(country => input === country.name);
    this.setState({additionalLocation})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const additionalLocation = this.state.additionalLocation;
    const { location, dataSet, dataBase} = this.props;
    this.state.additionalLocation ? this.props.addComparisonLocation(additionalLocation) : null;
    this.props.history.push('/stats');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='enter a country'
          onChange={this.handleChange}
        /> 
        <button>Add</button>
     </form>
    )
  };
};

export const mapStateToProps = (state) => ({
  location: state.location.alpha_3,
  dataBase: state.dataBase.database_code,
  dataSet: state.dataSet.dataset_code
});

export const mapDispatchToProps = (dispatch) => ({
  addComparisonLocation: (location) => dispatch(addComparisonLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComparisonForm);