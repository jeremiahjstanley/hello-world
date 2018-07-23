import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDataSet } from '../../actions';
import { dataMetrics } from '../../helper/dataMetrics';

export class DataSetSelectField extends Component {
  constructor() {
    super()

    this.state = {
      dataSet: dataMetrics[0].datasets[0]
    }
  }

  componentDidMount() {
    this.props.selectDataSet(this.state.dataSet)
  }

  selectMetric = (event) => {
    const dataSet = this.props.dataSet.find(metric => event.target.value === metric.name);
    this.props.selectDataSet({...dataSet})
  }

  render() {
    // const options = this.props.dataSet.map((metric, index) => (
    //   <option key={index}>
    //     { metric.name }
    //   </option>
    // ))
    const options = 'cat'
    return (
      <select onChange={this.selectMetric}>
        { options }
      </select>
    )
  };
}

export const mapStateToProps = (state) => ({
  dataSet: state.dataBase.datasets 
})

export const mapDispatchToProps = (dispatch) => ({
  selectDataSet: (dataSet) => dispatch(setDataSet(dataSet))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataSetSelectField);


