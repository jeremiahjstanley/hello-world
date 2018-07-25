import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader'
import { bar, Line } from 'react-chartjs-2'

export class GovernanceIndicatorsStatistics extends Component {
  
  render () {
    if (this.props.estimates) {
      return (
        <div className="statistics-container">
          <h1>{this.props.dataBase.name} - {this.dataSet.name}</h1>
          <Line
            data={this.props.percentileRank.data}
            legend={this.props.percentileRank.legend}
          />
        </div>
      )
  } else
      return (
        <div>
          <Loader/>
        </div>
      )
  }
}

export const mapStateToProps = (state) => ({
  location: state.location,
  dataBase: state.dataBase,
  dataSet: state.dataSet,
  estimates: state.locationData.cleanEstimates,
  numberOfSources: state.locationData.cleanNumberOfSources,
  percentileRank: state.locationData.cleanPercentileRank,
  standardError: state.locationData.cleanStandardError
});

export default connect(mapStateToProps)(GovernanceIndicatorsStatistics);