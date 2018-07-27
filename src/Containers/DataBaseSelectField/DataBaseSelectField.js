import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDataBase } from '../../actions';
import { dataMetrics } from '../../helper/dataMetrics';

export class DataBaseSelectField extends Component {

  selectMetric = (event) => {
    const metric = dataMetrics.find(metric => event.target.value === metric.name);
    this.props.selectDataBase({name: metric.name, database_code: metric.database_code});
  };

  render() {

    const options = dataMetrics.map((metric, index) => (
      <option key={index}>
        { metric.name }
      </option>
    ));

    return (

      <select onChange={this.selectMetric}>
        { options }
      </select>

    );
  };
};

export const mapDispatchToProps = (dispatch) => ({
  selectDataBase: (dataBase) => dispatch(setDataBase(dataBase))
});

export default connect(null, mapDispatchToProps)(DataBaseSelectField);