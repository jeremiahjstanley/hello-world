import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'; 
import GovernanceIndicatorsStatistics from '../GovernanceIndicatorsStatistics/GovernanceIndicatorsStatistics';
import './StatisticsContainer.css'


export const  StatisticsContainer = ({location, dataBase, dataSet, locationData}) => {
  return (
    <div>
      <h1>{dataBase.name} - {dataSet.name}</h1>
      <GovernanceIndicatorsStatistics/>
      <Link to='/stats/compare'>
        See how {location.name} stacks up against...
      </Link>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  location: state.location,
  dataBase: state.dataBase,
  dataSet: state.dataSet,
  locationData: state.locationData
});

export default withRouter(connect(mapStateToProps)(StatisticsContainer));