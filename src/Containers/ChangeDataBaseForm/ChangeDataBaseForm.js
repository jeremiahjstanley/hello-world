import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchGovernanceIndicators } from '../../thunks/fetchGovernanceIndicators';
import { DataBaseSelectField } from '../DataBaseSelectField/DataBaseSelectField';
import { DataSetSelectField } from '../DataSetSelectField/DataSetSelectField';

export class ChangeDataBaseForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { location, dataSet, dataBase} = this.props;
    this.props.fetchGovernanceIndicators(location, dataSet, dataBase);
    this.props.history.push('/stats');
  };

  render() {
    return (
      <div className='change-form-container'>
        <Link to='/stats' className='back-button'>◀ back</Link>
        <form onSubmit={this.handleSubmit} className='change-form'>
          <DataBaseSelectField/>
          <DataSetSelectField/>
          <button className='change-form-button'>Change</button>
       </form>
     </div>
    )
  };
};

export const mapStateToProps = (state) => ({
  location: state.location,
  dataBase: state.dataBase.database_code,
  dataSet: state.dataSet.dataset_code,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchGovernanceIndicators: (locations, dataBase, dataSet) => dispatch(fetchGovernanceIndicators(locations, dataBase, dataSet))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangeDataBaseForm));