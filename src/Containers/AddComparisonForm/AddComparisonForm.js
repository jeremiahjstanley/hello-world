import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setLocation } from '../../actions';
import { countries } from '../../helper/countryMetrics';
import { fetchGovernanceIndicators } from '../../thunks/fetchGovernanceIndicators';
import { fetchDevelopmentIndicators } from '../../thunks/fetchDevelopmentIndicators';

export class AddComparisonForm extends Component {
  constructor() {
    super()

    this.state = {
    };
  }

  handleChange = (event) => {
    const input = event.target.value;
    const additionalLocation = countries.find(country => input === country.name);
    this.setState({additionalLocation});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { location, dataSet, dataBase} = this.props;
    if (this.state.additionalLocation) {
      const locations = [...location, this.state.additionalLocation];
      this.props.selectLocation(locations);
      ((dataBase === 'WWGI') ? 
        this.props.fetchGovernanceIndicators(locations, dataSet, dataBase) : 
        this.props.fetchDevelopmentIndicators(locations, dataSet, dataBase));
      this.props.history.push('/stats');
    }
  };

  render() {
    return (
      <div className='change-form-container'>
        <Link to='/stats' className='back-button'>◀ back</Link>
        <form onSubmit={this.handleSubmit} className='change-form'>
          <input
            type='text'
            placeholder='enter a country'
            onChange={this.handleChange}
          /> 
          <button 
            disabled={!this.state.additionalLocation}
            className='change-form-button'
          >Add</button>
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
  selectLocation: (location) => dispatch(setLocation(location)),
  fetchGovernanceIndicators: (locations, dataBase, dataSet) => dispatch(fetchGovernanceIndicators(locations, dataBase, dataSet)),
  fetchDevelopmentIndicators: (locations, dataBase, dataSet) => dispatch(fetchDevelopmentIndicators(locations, dataBase, dataSet))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddComparisonForm));
