import React from 'react';
import './Loader.css';
import helloworld from '../../css-resources/helloworld.svg';

export const Loader = () => {

  return (

    <div className='loader'>
      <img src={helloworld} className='load-icon'/>
      <p className='loading-feedback'>
        loading your result
      </p>
    </div>

  );
};

export default Loader;