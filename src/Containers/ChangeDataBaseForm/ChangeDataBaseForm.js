import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchGovernanceIndicators } from '../../thunks/fetchGovernanceIndicators';
import { fetchDevelopmentIndicators } from '../../thunks/fetchDevelopmentIndicators';
import DataBaseSelectField from '../DataBaseSelectField/DataBaseSelectField';
import DataSetSelectField from '../DataSetSelectField/DataSetSelectField';

export class ChangeDataBaseForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { location, dataSet, dataBase} = this.props;
    ((dataBase === 'WWGI') ? 
      this.props.fetchGovernanceIndicators(location, dataSet, dataBase) : 
      this.props.fetchDevelopmentIndicators(location, dataSet, dataBase));
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
  dataBase: state.dataBase.database_code,
  dataSet: state.dataSet.dataset_code,
  location: state.location
});

export const mapDispatchToProps = (dispatch) => ({
  fetchDevelopmentIndicators: (locations, dataBase, dataSet) => dispatch(fetchDevelopmentIndicators(locations, dataBase, dataSet)),
  fetchGovernanceIndicators: (locations, dataBase, dataSet) => dispatch(fetchGovernanceIndicators(locations, dataBase, dataSet))
});

ChangeDataBaseForm.propTypes = {
  dataBase: PropTypes.string,
  dataSet: PropTypes.string,
  location: PropTypes.array,
  fetchDevelopmentIndicators: PropTypes.func,
  fetchGovernanceIndicators: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangeDataBaseForm));
