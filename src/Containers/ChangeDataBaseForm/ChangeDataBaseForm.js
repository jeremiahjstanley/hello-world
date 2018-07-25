import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from '../../thunks/fetchLocation';
import { DataBaseSelectField } from '../DataBaseSelectField/DataBaseSelectField';
import { DataSetSelectField } from '../DataSetSelectField/DataSetSelectField';

export class ChangeDataBaseForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { location, dataSet, dataBase} = this.props;
    this.props.fetchLocation(location, dataSet, dataBase);
    this.props.history.push('/stats');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <DataBaseSelectField/>
        <DataSetSelectField/>
        <button>Change</button>
     </form>
    )
  };
};

export const mapStateToProps = (state) => ({
  location: state.location,
  dataBase: state.dataBase.database_code,
  dataSet: state.dataSet.dataset_code,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchLocation: (locations, dataBase, dataSet) => dispatch(fetchLocation(locations, dataBase, dataSet))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeDataBaseForm);