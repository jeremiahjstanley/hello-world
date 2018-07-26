import React from 'react';
import { Link } from 'react-router-dom';


export const  ExplanationText = () => {

	return (

	    <div>
	    	<Link to='/' className='explanation-button'>▲</Link>
	      <p className='explanation-paragraph'>
          The world is an awfully big place, and it seems to be 
          the focus of most conversations. It's the human condition 
          to wonder about what the day to day lives of other people 
          are like. Data gets a bad rap for being boring, but data 
          is fascinating, and I hope that Hello World can help 
          demystify data and help you understand the lump of 
          space rock hurdling through the cosmos that you 
          currently call home.
	      </p>
	    </div>
         
	);
};


export default ExplanationText;