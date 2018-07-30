import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setLocation } from '../../actions';
import { countries } from '../../helper/countryMetrics';
import { fetchGovernanceIndicators } from '../../thunks/fetchGovernanceIndicators';
import { fetchDevelopmentIndicators } from '../../thunks/fetchDevelopmentIndicators';

export class AddComparisonForm extends Component {
  constructor() {
    super()

    this.state = {
    };

  };

  handleChange = (event) => {
    const input = event.target.value;
    const additionalLocation = countries.find(country => input === country.name);
    this.setState({additionalLocation, input});
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

  countryTypeAhead = () => {
    const suggestions = countries.filter(country => {
      const regex = new RegExp(this.state.input, 'gi');
      return country.name.match(regex) || country.alpha_3.match(regex);
    });
    return suggestions.splice(0, 4).map((country, index) => {
        return <option key={index}>{country.name}</option>
    });
  };

  render() {

    return (

      <div className='change-form-container'>
        <Link to='/stats' className='back-button'>◀ <span>back</span></Link>
        <form onSubmit={this.handleSubmit} className='change-form'>
          <input
            type='text'
            placeholder='enter a country'
            onChange={this.handleChange}
            list="countries"
          />
          <datalist id="countries">
            { this.countryTypeAhead() }
          </datalist>
          <button 
            disabled={!this.state.additionalLocation}
            className='change-form-button'
          >Add</button>
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
  fetchGovernanceIndicators: (locations, dataBase, dataSet) => dispatch(fetchGovernanceIndicators(locations, dataBase, dataSet)),
  selectLocation: (location) => dispatch(setLocation(location))
});

AddComparisonForm.propTypes = {
  dataBase: PropTypes.string.isRequired,
  dataSet: PropTypes.string.isRequired,
  location: PropTypes.array.isRequired,
  fetchDevelopmentIndicators: PropTypes.func.isRequired,
  fetchGovernanceIndicators: PropTypes.func.isRequired,
  selectLocation: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddComparisonForm));
