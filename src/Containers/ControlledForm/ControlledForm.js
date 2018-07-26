import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocation, setDataBase, setDataSet } from '../../actions';
import { countries } from '../../helper/countryMetrics';
import { fetchGovernanceIndicators } from '../../thunks/fetchGovernanceIndicators';
import { fetchDevelopmentIndicators } from '../../thunks/fetchDevelopmentIndicators';
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
      dataSet: {
        name: 'Voice and Accountability', 
        dataset_code: 'VA'
      }
    };
  }

  componentDidMount() {
    this.props.selectDataBase(this.state.dataBase);
    this.props.selectDataSet(this.state.dataSet);
  }

  handleChange = (event) => {
    const input = event.target.value.toLowerCase();
    const location = countries.find(country => input === country.name.toLowerCase());
    this.setState({location, input});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const location = [this.state.location];
    const { dataSet, dataBase } = this.props;
    this.props.selectLocation(location);
    ((dataBase === 'WWGI') ? 
      this.props.fetchGovernanceIndicators(location, dataSet, dataBase):
      this.props.fetchDevelopmentIndicators(location, dataSet, dataBase));
    this.props.history.push('/stats');
  };

  countryTypeAhead = () => {
    const suggestions = countries.filter(country => {
      const regex = new RegExp(this.state.input, 'gi');
      return country.name.match(regex) || country.alpha_3.match(regex);
    })
    return suggestions.splice(0, 4).map(country => {
        return <option>{country.name}</option>
    });
  }

  render() {


    return (
      <form onSubmit={this.handleSubmit}>
        <div>
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
        <button disabled={!this.state.location}>
          Search
        </button>
     </form>
    )
  };
};

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase.database_code,
  dataSet: state.dataSet.dataset_code
});

export const mapDispatchToProps = (dispatch) => ({
  selectDataBase: (dataBase) => dispatch(setDataBase(dataBase)),
  selectDataSet: (dataSet) => dispatch(setDataSet(dataSet)),
  selectLocation: (location) => dispatch(setLocation(location)),
  fetchGovernanceIndicators: (location, dataSet, dataBase) => dispatch(fetchGovernanceIndicators(location, dataSet, dataBase)),
  fetchDevelopmentIndicators: (locations, dataBase, dataSet) => dispatch(fetchDevelopmentIndicators(locations, dataBase, dataSet))
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlledForm);