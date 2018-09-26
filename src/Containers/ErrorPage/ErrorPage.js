import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { madeSearch, hasErrored } from '../../actions';

export const  ErrorPage = ({makeSearch, hasErrored}) => {

  const resetApplication = () => {
    makeSearch(false);
    hasErrored(false);
  };

	return (

	    <div className='error-text'>
	    	<h1>We've got bad news</h1>
        <h2>...and we're really sorry</h2>
	      <p className='explanation-paragraph'>
          This project was made possible by public data from the 
          World Bank, and unfortunately that data comes with some 
          challenges and some holes. So, please try and make another
          selection, we hope this wont discourage you from using Hello
          World. 
	      </p>
        <div className='graph-link start-over'>
          <Link  onClick={() => { resetApplication() }}  to='/'>Start Over?</Link>
        </div>
	    </div>
         
	);
};

export const mapDispatchToProps = (dispatch) => ({
  makeSearch: (status) => dispatch(madeSearch(status)),
  hasErrored: (status) => dispatch(hasErrored(status)),
});

ErrorPage.propTypes = {
  makeSearch: PropTypes.func,
  hasErrored: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(ErrorPage));