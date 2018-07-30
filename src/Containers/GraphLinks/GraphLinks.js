import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './GraphLinks.css'


export const GraphLinks = ({location, dataBase, dataSet}) => {

  return (

    <div className='graph-links'>

      <div className='graph-link'>
        <Link to='/stats/compare'>
          See how {location.map(location => location.name).join(', ')} stacks up against...
        </Link>
      </div>

      <div className='graph-link'>
        <Link to='/stats/change_data_base'>
          Okay, that's {dataBase.name}, but what about?
        </Link>
      </div>

      <div className='graph-link'>
        <Link to='/stats/change_data_set'>
          {dataSet.name} was cool right, explore other metrics?
        </Link>
      </div>

    </div>

  );
};

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase,
  dataSet: state.dataSet,
  location: state.location
});

GraphLinks.propTypes = {
  dataBase: PropTypes.object.isRequired,
  dataSet: PropTypes.object.isRequired,
  location: PropTypes.array.isRequired,
};

export default withRouter(connect(mapStateToProps)(GraphLinks));