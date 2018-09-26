import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchGovernanceIndicators } from '../../thunks/fetchGovernanceIndicators';
import { fetchDevelopmentIndicators } from '../../thunks/fetchDevelopmentIndicators';
import { submitDataBase, submitDataSet } from '../../actions';
import DataBaseSelectField from '../DataBaseSelectField/DataBaseSelectField';
import DataSetSelectField from '../DataSetSelectField/DataSetSelectField';

export class ChangeDataBaseForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { location, dataSet, dataBase} = this.props;
    console.log(dataSet)
    this.props.submitDataBase(dataBase);
    this.props.submitDataSet(dataSet);
    ((dataBase.database_code === 'WWGI') ? 
      this.props.fetchGovernanceIndicators(location, dataSet.dataset_code, dataBase.database_code) : 
      this.props.fetchDevelopmentIndicators(location, dataSet.dataset_code, dataBase.database_code));
    this.props.history.push('/stats');
  };

  render() {

    return (

      <div className='change-form-container'>
        <Link to='/stats' className='back-button'>◀ <span>back</span></Link>
        <form onSubmit={this.handleSubmit} className='change-form'>
          <div className='change-database'>
          <DataBaseSelectField/>
          <DataSetSelectField/>
          </div>
          <button className='change-form-button change-database-button'>Change</button>
       </form>
     </div>

    );
  };
};

export const mapStateToProps = (state) => ({
  dataBase: state.selectedDataBase,
  dataSet: state.selectedDataSet,
  location: state.location
});

export const mapDispatchToProps = (dispatch) => ({
  fetchDevelopmentIndicators: (locations, dataBase, dataSet) => dispatch(fetchDevelopmentIndicators(locations, dataBase, dataSet)),
  fetchGovernanceIndicators: (locations, dataBase, dataSet) => dispatch(fetchGovernanceIndicators(locations, dataBase, dataSet)),
  submitDataBase: (dataBase) => dispatch(submitDataBase(dataBase)),
  submitDataSet: (dataBase) => dispatch(submitDataSet(dataBase))
});

ChangeDataBaseForm.propTypes = {
  dataBase: PropTypes.object,
  dataSet: PropTypes.object,
  location: PropTypes.array,
  fetchDevelopmentIndicators: PropTypes.func,
  fetchGovernanceIndicators: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangeDataBaseForm));
