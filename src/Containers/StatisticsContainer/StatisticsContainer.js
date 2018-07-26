import React from 'react';
import { connect } from 'react-redux';
import GovernanceIndicatorsStatistics from '../GovernanceIndicatorsStatistics/GovernanceIndicatorsStatistics';
import './StatisticsContainer.css'


export const  StatisticsContainer = ({dataBase}) => {
	if (dataBase === 'WWGI') {
	  return (
	    <div>
	      <GovernanceIndicatorsStatistics/>
	    </div>
	  )
	} else
		return (
		    <div>
		      <h1>Development Indicator Stats</h1>
		    </div>
		)
}

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase.database_code,
});


export default connect(mapStateToProps)(StatisticsContainer);