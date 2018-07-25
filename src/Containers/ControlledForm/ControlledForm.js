import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../../actions';
import { countries } from '../../helper/countryMetrics';
import { fetchLocation } from '../../thunks/fetchLocation';
import DataBaseSelectField from '../DataBaseSelectField/DataBaseSelectField';
import DataSetSelectField from '../DataSetSelectField/DataSetSelectField';
import './ControlledForm.css';

export class ControlledForm extends Component {
  constructor() {
    super()

    this.state = {
      dataBase: {
        location: ''
      }
    };
  }

  handleChange = (event) => {
    const input = event.target.value;
    const location = countries.find(country => input === country.name);
    this.setState({location});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const location = [this.state.location];
    const { dataSet, dataBase } = this.props;
    this.props.selectLocation(location);
    this.props.fetchLocation(location, dataSet, dataBase);
    this.props.history.push('/stats');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>I'm curious about...</p>
          <input
              type='text'
              placeholder='Enter a Country'
              onChange={this.handleChange}
          /> 
        </div>
        <div>
          <p>and their...</p>
          <DataBaseSelectField />
        </div>
        <div>
          <p>but specifically, </p>
          <DataSetSelectField />
        </div>
        <button disabled={!this.state.location}>
          Search
        </button>
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
  fetchLocation: (location, dataSet, dataBase) => dispatch(fetchLocation(location, dataSet, dataBase))
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlledForm);