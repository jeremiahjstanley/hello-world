import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDataSet } from '../../actions';
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

    if (props.dataBase) {
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
          <option> -- </option>
          { options }
        </select>
      ); 

    } else

    return (

      <p className='loading-text'>Loading...</p>

    );
  };
};

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase.name
});

export const mapDispatchToProps = (dispatch) => ({
  selectDataSet: (dataSet) => dispatch(setDataSet(dataSet))
});

DataSetSelectField.propTypes = {
  dataBase: PropTypes.string,
  selectDataSet: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(DataSetSelectField);


