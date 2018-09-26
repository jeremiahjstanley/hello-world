import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ExplanationText from '../ExplanationText/ExplanationText';
import ErrorPage from '../ErrorPage/ErrorPage';
import AddComparisonForm from '../AddComparisonForm/AddComparisonForm';
import GraphLinks from '../GraphLinks/GraphLinks';
import ControlledForm from '../ControlledForm/ControlledForm';
import ChangeDataBaseForm from '../ChangeDataBaseForm/ChangeDataBaseForm';
import ChangeDataSetForm from '../ChangeDataSetForm/ChangeDataSetForm';
import AddMetricForm from '../AddMetricForm/AddMetricForm';
import StatisticsContainer from '../StatisticsContainer/StatisticsContainer';
import MultipleStatisticsContainer from '../MultipleStatisticsContainer/MultipleStatisticsContainer';
import './App.css';

export class App extends Component {

  render() {

    return (
      
      <div className='App'>
        <header className='App-header'>
        <h1 className='App-title'>Hello, World</h1>
        </header>
        <Route path='/why' component={ExplanationText}/>
        <Route exact path='/' component={ControlledForm}/>
        <Route exact path='/404' component={ErrorPage}/>

        { this.props.hasErrored ? <Redirect to='/404'/> : ''}
        { this.props.madeSearch ? '' : <Redirect to='/'/>}

        <Route path='/stats/compare' component={AddComparisonForm}/>
        <Route path='/stats/change_data_base' component={ChangeDataBaseForm}/>
        <Route path='/stats/change_data_set' component={ChangeDataSetForm}/>
        <Route path='/multiple_stats/add_metric' component={AddMetricForm}/>
        <Route path={['/multiple_stats','/stats']} component={GraphLinks}/>
        <Route path='/stats' component={StatisticsContainer}/>
        <Route path='/multiple_stats' component={MultipleStatisticsContainer}/>
      </div>

    );
  };
};

export const mapStateToProps = (state) => ({
  hasErrored: state.hasErrored,
  madeSearch: state.madeSearch
});

App.propTypes = {
  hasErrored: PropTypes.bool,
  madeSearch: PropTypes.bool
};

export default withRouter(connect(mapStateToProps)(App));

