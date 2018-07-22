import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInitialLocation } from '../../thunks/setInitialLocation';
import { dataMetrics } from '../../helper/dataMetrics';

export class ControlledForm extends Component {
  constructor() {
    super()

    this.state = {
      initialLocation: '',
      initialMetric: dataMetrics[0]
    }
  }

  handleChange = (event) => {
    const initialLocation = event.target.value;
    this.setState({ initialLocation });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const location = this.state.initialLocation;
    const dataSet = this.state.initialMetric.dataset_code;
    const dataBase = this.state.initialMetric.database_code;
    this.props.selectInitialLocation(location, dataSet, dataBase);
  }

  selectMetric = (event) => {
    const initialMetric = dataMetrics.find(metric => event.target.value === metric.name);
    this.setState({ initialMetric })
  }

  render() {

    const options = dataMetrics.map((metric, index) => (
      <option key={index}>
        {metric.name}
      </option>
    ))

    return (
      <form onSubmit={this.handleSubmit}>
       <input
         value={this.state.initialLocation}
         type='text'
         placeholder='enter a country'
         onChange={this.handleChange}
       /> 
       <select onChange={this.selectMetric}>
        { options }
       </select>
       <button>
         Search
       </button>
     </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  selectInitialLocation: (initialLocation, dataSet, dataBase) => dispatch(setInitialLocation(initialLocation, dataSet, dataBase))
})

export default connect(null, mapDispatchToProps)(ControlledForm);