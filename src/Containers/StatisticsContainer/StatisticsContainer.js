import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import GovernanceIndicatorsStatistics from '../GovernanceIndicatorsStatistics/GovernanceIndicatorsStatistics';
import DevelopmentIndicatorStatistics from '../DevelopmentIndicatorStatistics/DevelopmentIndicatorStatistics';
import './StatisticsContainer.css';


export const  StatisticsContainer = ({dataBase}) => {

	if (dataBase === 'WWGI') {

	  return (
	    <div>
	      <GovernanceIndicatorsStatistics/>
		      <div className='graph-link start-over'>
		      	<Link to='/'>Start Over?</Link>
		      </div>
	    </div>
	  );

	} else

		return (
		    <div>
		      <DevelopmentIndicatorStatistics/>
		      <div className='graph-link start-over'>
		      	<Link to='/'>Start Over?</Link>
		      </div>
		    </div>
		);
		
};

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase.database_code,
});


export default withRouter(connect(mapStateToProps)(StatisticsContainer));