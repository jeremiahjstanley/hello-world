import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'; 
import './GraphLinks.css'


export const GraphLinks = ({location, dataBase, dataSet, locationData}) => {

  return (
    <div className='graph-links'>
      <Link to='/stats/compare'>
        See how {location.name} stacks up against...
      </Link>
      <Link to='/stats/change_data_base'>
        Okay, that's {dataBase.name}, but what about?
      </Link>
      <Link to='/stats/change_data_set'>
        {dataSet.name} was cool right, explore other metrics?
      </Link>
      <Link to='/'>
        Start Over?
      </Link>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  location: state.location,
  dataBase: state.dataBase,
  dataSet: state.dataSet,
});

export default withRouter(connect(mapStateToProps)(GraphLinks));