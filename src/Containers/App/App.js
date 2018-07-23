import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import AddComparisonForm from '../AddComparisonForm/AddComparisonForm'
import ControlledForm from '../ControlledForm/ControlledForm'
import StatisticsContainer from '../StatisticsContainer/StatisticsContainer'
import './App.css';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello, World</h1>
        </header>
        <Route exact path='/' component={ControlledForm}/>
        { this.props.hasErrored ? <p>Sorry! There was an error loading your result.</p> : ''}
        <Route path='/stats' component={StatisticsContainer}/>
        <Route path='/stats/compare' component={AddComparisonForm}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hasErrored: state.hasErrored,
})

export default withRouter(connect(mapStateToProps)(App));

