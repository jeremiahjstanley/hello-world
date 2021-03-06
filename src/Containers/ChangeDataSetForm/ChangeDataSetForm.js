import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchGovernanceIndicators } from '../../thunks/fetchGovernanceIndicators';
import { fetchDevelopmentIndicators } from '../../thunks/fetchDevelopmentIndicators';
import DataSetSelectField from '../DataSetSelectField/DataSetSelectField';

export class ChangeDataSetForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { location, dataSet, dataBase} = this.props;
    ((dataBase === 'WWGI') ? 
      this.props.fetchGovernanceIndicators(location, dataSet, dataBase):
      this.props.fetchDevelopmentIndicators(location, dataSet, dataBase));
    this.props.history.push('/stats');
  };

  render() {

    return (

      <div className='change-form-container'>
        <Link to='/stats' className='back-button'>◀ <span>back</span></Link>
        <form onSubmit={this.handleSubmit} className='change-form'>
          <DataSetSelectField/>
          <button className='change-form-button'>Change</button>
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
  fetchGovernanceIndicators: (locations, dataBase, dataSet) => dispatch(fetchGovernanceIndicators(locations, dataBase, dataSet)),
  fetchDevelopmentIndicators: (locations, dataBase, dataSet) => dispatch(fetchDevelopmentIndicators(locations, dataBase, dataSet))
});

ChangeDataSetForm.propTypes = {
  dataBase: PropTypes.string,
  dataSet: PropTypes.string,
  location: PropTypes.array,
  fetchDevelopmentIndicators: PropTypes.func,
  fetchGovernanceIndicators: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangeDataSetForm));