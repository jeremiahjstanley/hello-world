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
    const { location, dataSets, dataBase} = this.props;
    const code = dataSets[0].dataset_code
    if (this.state.additionalLocation) {
      const locations = [...location, this.state.additionalLocation];
      this.props.selectLocation(locations);
      ((dataBase === 'WWGI') ? 
        this.props.fetchGovernanceIndicators(locations, code, dataBase.database_code) : 
        this.props.fetchDevelopmentIndicators(locations, code, dataBase.database_code));
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
  dataBase: state.submittedDataBase,
  dataSets: state.submittedDataSet,
  location: state.location
});

export const mapDispatchToProps = (dispatch) => ({
  fetchDevelopmentIndicators: (locations, dataSets, dataBase) => dispatch(fetchDevelopmentIndicators(locations, dataSets, dataBase)),
  fetchGovernanceIndicators: (locations, dataSets, dataBase) => dispatch(fetchGovernanceIndicators(locations, dataSets, dataBase)),
  selectLocation: (location) => dispatch(setLocation(location))
});

AddComparisonForm.propTypes = {
  dataBase: PropTypes.object,
  dataSets: PropTypes.array,
  location: PropTypes.array,
  fetchDevelopmentIndicators: PropTypes.func,
  fetchGovernanceIndicators: PropTypes.func,
  selectLocation: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddComparisonForm));
