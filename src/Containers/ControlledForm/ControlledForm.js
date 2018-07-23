import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setLocation, addComparisonLocation } from '../../actions';
import { countries } from '../../helper/countryMetrics';
import { fetchInitialLocation } from '../../thunks/fetchInitialLocation';
import CountryInputField from '../CountryInputField/CountryInputField';
import DataBaseSelectField from '../DataBaseSelectField/DataBaseSelectField';
import DataSetSelectField from '../DataSetSelectField/DataSetSelectField';

export class ControlledForm extends Component {

  handleChange = (event) => {
    const input = event.target.value;
    const location = countries.find(country => input === country.name);
    this.setState({location});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const location = this.state.location;
    const { dataSet, dataBase } = this.props;
    this.props.selectLocation(location);
    this.props.addComparisonLocation(location);
    this.props.fetchInitialLocation(location.alpha_3, dataSet, dataBase);
    this.props.history.push('/stats');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>I'm curious about...</p>
        <input
            type='text'
            placeholder='enter a country'
            onChange={this.handleChange}
         /> 
        <p>and their...</p>
        <DataBaseSelectField />
        <p>but specifically, </p>
        <DataSetSelectField />
        <button>Search</button>
     </form>
    )
  };
};

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase.database_code,
  dataSet: state.dataSet.dataset_code
});

export const mapDispatchToProps = (dispatch) => ({
  selectLocation: (location) => dispatch(setLocation(location)),
  addComparisonLocation: (location) => dispatch(addComparisonLocation(location)),
  fetchInitialLocation: (location, dataSet, dataBase) => dispatch(fetchInitialLocation(location, dataSet, dataBase))
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlledForm);