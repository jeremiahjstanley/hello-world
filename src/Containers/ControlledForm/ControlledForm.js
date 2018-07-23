import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../../thunks/setLocation';
import CountryInputField from '../CountryInputField/CountryInputField';
import DataBaseSelectField from '../DataBaseSelectField/DataBaseSelectField';
import DataSetSelectField from '../DataSetSelectField/DataSetSelectField';

export class ControlledForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { location, dataSet, dataBase} = this.props;
    this.props.selectLocation(location, dataSet, dataBase);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CountryInputField />
        <DataBaseSelectField />
        <DataSetSelectField />
        <button>Search</button>
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
  selectLocation: (location, dataSet, dataBase) => dispatch(setLocation(location, dataSet, dataBase))
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlledForm);