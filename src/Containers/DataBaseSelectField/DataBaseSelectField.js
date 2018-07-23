import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDataBase } from '../../actions';
import { dataMetrics } from '../../helper/dataMetrics';

export class DataBaseSelectField extends Component {
  constructor() {
    super()

    this.state = {
      dataBase: {name: dataMetrics[0].name, database_code: dataMetrics[0].database_code}
    }
  }

  componentDidMount() {
    this.props.selectDataBase(this.state.dataBase)
  }

  selectMetric = (event) => {
    const dataBase = dataMetrics.find(metric => event.target.value === metric.name);
    const dataStore = {name: dataBase.name, database_code: dataBase.database_code}
    this.props.selectDataBase(dataStore)
  }

  render() {

    const options = dataMetrics.map((metric, index) => (
      <option key={index}>
        { metric.name }
      </option>
    ))

    return (
      <select onChange={this.selectMetric}>
        { options }
      </select>
    )
  };
}

export const mapDispatchToProps = (dispatch) => ({
  selectDataBase: (dataBase) => dispatch(setDataBase(dataBase))
})

export default connect(null, mapDispatchToProps)(DataBaseSelectField);