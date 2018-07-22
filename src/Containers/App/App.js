import React, { Component } from 'react';
import { connect } from 'react-redux'
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
        <ControlledForm />
        { this.props.hasErrored ? <p>Sorry! There was an error loading your result.</p> : ''}
        <StatisticsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hasErrored: state.hasErrored,
})

export default connect(mapStateToProps)(App);

