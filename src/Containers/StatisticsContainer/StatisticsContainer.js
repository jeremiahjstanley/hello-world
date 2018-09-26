import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { madeSearch, hasErrored } from '../../actions';
import GovernanceIndicatorsStatistics from '../GovernanceIndicatorsStatistics/GovernanceIndicatorsStatistics';
import DevelopmentIndicatorStatistics from '../DevelopmentIndicatorStatistics/DevelopmentIndicatorStatistics';
import './StatisticsContainer.css';


export const  StatisticsContainer = ({selectedDataBase, submittedDataBase, submittedDataSet, makeSearch, hasErrored}) => {

	const resetApplication = () => {
		makeSearch(false);
		hasErrored(false);
	};

	const governanceIndicatorsStatisticInstances = submittedDataSet.map((dataSet, index) => {
		return (
				<GovernanceIndicatorsStatistics dataSet={dataSet} key={index}/>
		);
	});

	const developmentIndicatorsStatisticInstances = submittedDataSet.map((dataSet, index) => {
		return (
				<DevelopmentIndicatorStatistics dataSet={dataSet} key={index}/>
		);
	});

	if (submittedDataBase === 'WWGI') {

	  return (
	    <div>
      	{ governanceIndicatorsStatisticInstances }
	      <div className='graph-link start-over'>
	      	<Link onClick={() => { resetApplication() }} to='/'>Start Over?</Link>
	      </div>
	    </div>
	  );

	} else

		return (
	    <div>
	      { developmentIndicatorsStatisticInstances}
	      <div className='graph-link start-over'>
	      	<Link onClick={() => { resetApplication() }} to='/'>Start Over?</Link>
	      </div>
	    </div>
		);
		
};

export const mapStateToProps = (state) => ({
  selectedDataBase: state.selectedDataBase.database_code,
  submittedDataBase: state.submittedDataBase.database_code,
  submittedDataSet: state.submittedDataSet,
});

export const mapDispatchToProps = (dispatch) => ({
  makeSearch: (status) => dispatch(madeSearch(status)),
  hasErrored: (status) => dispatch(hasErrored(status)),
});

StatisticsContainer.propTypes = {
  dataBase: PropTypes.string,
  makeSearch: PropTypes.func,
  hasErrored: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StatisticsContainer));


