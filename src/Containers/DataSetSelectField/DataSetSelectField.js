import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDataSet } from '../../actions';
import { dataMetrics } from '../../helper/dataMetrics';

export class DataSetSelectField extends Component {
  constructor() {
    super()

    this.state = {
      dataSet: {
        name: 'Voice and Accountability', 
        dataset_code: 'VA'
      }
    };
  }

  componentDidMount() {
    this.props.selectDataSet(this.state.dataSet);
  }

  selectMetric = (event) => {
    const dataSet = this.state.dataBase.datasets.find(dataset => event.target.value === dataset.name);
    this.props.selectDataSet({...dataSet});
  }

  handleUpdate = () => {
    const dataBase = dataMetrics.find(metric => this.props.dataBase === metric.name);
    this.setState({dataBase});    
  }

  render() {
    if (this.state.dataBase) {
      const options = this.state.dataBase.datasets.map((metric, index) => (
        <option key={index}>
          { metric.name }
        </option>
      ));
      return (
        <select onChange={this.selectMetric}>
          { options }
        </select>
      ) 
    } else
    return (
      <select onClick={this.handleUpdate}>
        <option>{this.state.dataSet.name}</option>
      </select>
    )
  };
}

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase.name
})

export const mapDispatchToProps = (dispatch) => ({
  selectDataSet: (dataSet) => dispatch(setDataSet(dataSet))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataSetSelectField);


