import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDataSet, changeData } from '../../actions';
import { dataMetrics } from '../../helper/dataMetrics';

export class DataSetSelectField extends Component {
  
  constructor() {
    super()

    this.state = {
    };

  };

  selectMetric = (event) => {
    const dataSet = this.state.dataBase.datasets.find(dataset => event.target.value === dataset.name);
    this.props.selectDataSet({...dataSet});
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props)
    if (props.dataBase) {
      console.log(props)
      return {
        dataBase: dataMetrics.find(metric => props.dataBase === metric.name),
      };
    };
    return state
  };

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
      ); 

    } else

    return (

      <p className='loading-text'>Loading...</p>

    );
  };
}

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase.name
})

export const mapDispatchToProps = (dispatch) => ({
  changeDataSet: (bool) => dispatch(changeData(bool)),
  selectDataSet: (dataSet) => dispatch(setDataSet(dataSet))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataSetSelectField);


