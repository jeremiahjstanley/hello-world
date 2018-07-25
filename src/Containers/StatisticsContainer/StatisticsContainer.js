import React from 'react';
import { connect } from 'react-redux';
import GovernanceIndicatorsStatistics from '../GovernanceIndicatorsStatistics/GovernanceIndicatorsStatistics';
import './StatisticsContainer.css'


export const  StatisticsContainer = ({dataBase}) => {
  return (
    <div>
      <GovernanceIndicatorsStatistics/>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase,
});

// create switch statement for WWDI figures

export default connect(mapStateToProps)(StatisticsContainer);