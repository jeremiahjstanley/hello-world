import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMultipleGovernanceIndicators } from '../../thunks/fetchMultipleGovernanceIndicators';
import { fetchMultipleDevelopmentIndicators } from '../../thunks/fetchMultipleDevelopmentIndicators';
import { addDataSet } from '../../actions';
import DataSetSelectField from '../DataSetSelectField/DataSetSelectField';

export class ChangeDataSetForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { location, submittedDataSets, selectedDataSet, dataBase} = this.props;
    const dataSets = [...submittedDataSets, selectedDataSet]
    this.props.addDataSet(selectedDataSet);
    ((dataBase.database_code === 'WWGI') ? 
      this.props.fetchMultipleGovernanceIndicators(location, dataSets, dataBase.database_code):
      this.props.fetchMultipleDevelopmentIndicators(location, dataSets, dataBase.database_code));
    this.props.history.push('/multiple_stats');
  };

  render() {

    return (

      <div className='change-form-container'>
        <Link to='/stats' className='back-button'>◀ <span>back</span></Link>
        <form onSubmit={this.handleSubmit} className='change-form'>
          <DataSetSelectField/>
          <button className='change-form-button'>Add</button>
       </form>
     </div>

    );
  };
};

export const mapStateToProps = (state) => ({
  dataBase: state.selectedDataBase,
  selectedDataSet: state.selectedDataSet,
  submittedDataSets: state.submittedDataSet,
  location: state.location
});

export const mapDispatchToProps = (dispatch) => ({
  fetchMultipleGovernanceIndicators: (locations, dataSets, dataBase,) => dispatch(fetchMultipleGovernanceIndicators(locations, dataSets, dataBase)),
  fetchMultipleDevelopmentIndicators: (locations, dataSets, dataBase) => dispatch(fetchMultipleDevelopmentIndicators(locations, dataSets, dataBase)),
  addDataSet: (dataBase) => dispatch(addDataSet(dataBase))
});

ChangeDataSetForm.propTypes = {
  dataBase: PropTypes.string,
  dataSet: PropTypes.string,
  location: PropTypes.array,
  fetchDevelopmentIndicators: PropTypes.func,
  fetchGovernanceIndicators: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangeDataSetForm));