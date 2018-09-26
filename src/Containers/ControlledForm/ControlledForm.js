import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { countries } from '../../helper/countryMetrics';
import { fetchDevelopmentIndicators } from '../../thunks/fetchDevelopmentIndicators';
import { fetchGovernanceIndicators } from '../../thunks/fetchGovernanceIndicators';
import { setLocation, submitDataBase, submitDataSet, selectDataBase, clearDataSet, madeSearch } from '../../actions';
import DataBaseSelectField from '../DataBaseSelectField/DataBaseSelectField';
import DataSetSelectField from '../DataSetSelectField/DataSetSelectField';
import './ControlledForm.css';

export class ControlledForm extends Component {
  
  constructor() {
    super()

    this.state = {
      dataBase: {
        name: 'Worldwide Governance Indicators', 
        database_code: 'WWGI'
      },
    };
  };

  componentDidMount() {
    this.props.selectDataBase(this.state.dataBase);
    this.props.clearDataSet()
  };

  handleChange = (event) => {
    const input = event.target.value.toLowerCase();
    const location = countries.find(country => input === country.name.toLowerCase());
    this.setState({location, input});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const location = [this.state.location];
    const { dataSet, dataBase } = this.props;
    this.props.makeSearch(true);
    this.props.selectLocation(location);
    this.props.submitDataSet(dataSet);
    this.props.submitDataBase(dataBase);
    ((dataBase.database_code === 'WWGI') ? 
      this.props.fetchGovernanceIndicators(location, dataSet.dataset_code, dataBase.database_code):
      this.props.fetchDevelopmentIndicators(location, dataSet.dataset_code, dataBase.database_code));
    this.props.history.push('/stats');
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

      <form onSubmit={this.handleSubmit}>
        <div>
          <Link to='/why' className='explanation-button'>▼ <span>why?</span></Link>
          <p>I'm curious about...</p>
          <input
              type='text'
              placeholder='Enter a Country'
              onChange={this.handleChange}
              list="countries"
          /> 
          <datalist id="countries">
            { this.countryTypeAhead() }
          </datalist>
        </div>
        <div>
          <p>and their...</p>
          <DataBaseSelectField />
        </div>
        <div>
          <p>but specifically, </p>
          <DataSetSelectField />
        </div>
        <button disabled={!this.state.location || !this.props.dataSet}>
          Search
        </button>
     </form>

    );
  };
};

export const mapStateToProps = (state) => ({
  dataBase: state.selectedDataBase,
  dataSet: state.selectedDataSet
});

export const mapDispatchToProps = (dispatch) => ({
  clearDataSet: () => dispatch(clearDataSet()),
  fetchDevelopmentIndicators: (locations, dataBase, dataSet) => dispatch(fetchDevelopmentIndicators(locations, dataBase, dataSet)),
  fetchGovernanceIndicators: (location, dataSet, dataBase) => dispatch(fetchGovernanceIndicators(location, dataSet, dataBase)),
  makeSearch: (status) => dispatch(madeSearch(status)),
  selectDataBase: (dataBase) => dispatch(selectDataBase(dataBase)),
  selectLocation: (location) => dispatch(setLocation(location)),
  submitDataBase: (dataBase) => dispatch(submitDataBase(dataBase)),
  submitDataSet: (dataBase) => dispatch(submitDataSet(dataBase))
});

ControlledForm.propTypes = {
  dataBase: PropTypes.object,
  dataSet: PropTypes.object,
  fetchDevelopmentIndicators: PropTypes.func.isRequired,
  fetchGovernanceIndicators: PropTypes.func.isRequired,
  selectDataBase: PropTypes.func.isRequired,
  clearDataSet: PropTypes.func.isRequired,
  selectLocation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlledForm);