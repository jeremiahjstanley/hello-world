import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { madeSearch, hasErrored } from '../../actions';
import MultipleGovernanceIndicatorsStatistics from '../MultipleGovernanceIndicatorsStatistics/MultipleGovernanceIndicatorsStatistics';
import MultipleDevelopmentIndicatorStatistics from '../MultipleDevelopmentIndicatorStatistics/MultipleDevelopmentIndicatorStatistics';
import '../StatisticsContainer/StatisticsContainer.css';


export const MultipleStatisticsContainer = ({selectedDataBase, submittedDataBase, submittedDataSet, makeSearch, hasErrored, locationData}) => {

	const resetApplication = () => {
		makeSearch(false);
		hasErrored(false);
	};

	const multipleGovernanceIndicatorsStatisticInstances = submittedDataSet.map((dataSet, index) => {
		return (
				<MultipleGovernanceIndicatorsStatistics locationData={locationData[index]} dataSet={dataSet} key={index}/>
		);
	});

	const multipleDevelopmentIndicatorsStatisticInstances = submittedDataSet.map((dataSet, index) => {
		return (
				<MultipleDevelopmentIndicatorStatistics locationData={locationData[index]} dataSet={dataSet} key={index}/>
		);
	});

	if (submittedDataBase === 'WWGI') {

	  return (
	    <div>
	    	<div className='multiple-statistic-container'>
	      	{ multipleGovernanceIndicatorsStatisticInstances }
	      </div>
		      <div className='graph-link start-over'>
		      	<Link onClick={() => { resetApplication() }} to='/'>Start Over?</Link>
		      </div>
	    </div>
	  );

	} else

		return (
		    <div>
		    	<div className='multiple-statistic-container'>
			      { multipleDevelopmentIndicatorsStatisticInstances }
		      </div>
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
  locationData: state.locationData
});

export const mapDispatchToProps = (dispatch) => ({
  makeSearch: (status) => dispatch(madeSearch(status)),
  hasErrored: (status) => dispatch(hasErrored(status)),
});

MultipleStatisticsContainer.propTypes = {
  dataBase: PropTypes.string,
  makeSearch: PropTypes.func,
  hasErrored: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MultipleStatisticsContainer));