import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';
import './StatisticsContainer.css'


export class StatisticsContainer extends Component {


  render() {
    return (
      <div className="statistics-container">
        <LineChart width={900} height={300} data={this.props.initialLocation} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="Percentile Rank" stroke="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip/>
          <Legend />
        </LineChart>
        <div className="subordinate-graphs">
          <BarChart width={300} height={150} data={this.props.initialLocation}>
            <Bar dataKey="Number of Sources" fill='#8884d8'/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip/>
            <Legend />
          </BarChart>
          <LineChart width={300} height={150} data={this.props.initialLocation} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="Standard Error" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip/>
            <Legend />
          </LineChart>
          <LineChart width={300} height={150} data={this.props.initialLocation} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="Estimate" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip/>
            <Legend />
          </LineChart>
        </div>
      </div>
    )
  }

}

export const mapStateToProps = (state) => ({
  initialLocation: state.initialLocation
});

export default connect(mapStateToProps)(StatisticsContainer);