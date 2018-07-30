import React from 'react';
import { Link } from 'react-router-dom';

export const  ErrorPage = () => {

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
          <Link to='/'>Start Over?</Link>
        </div>
	    </div>
         
	);
};

export default ErrorPage;