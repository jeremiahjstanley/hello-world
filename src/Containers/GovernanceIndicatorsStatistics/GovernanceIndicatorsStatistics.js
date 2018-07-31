import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { VictoryLine, VictoryBar, VictoryContainer, VictoryVoronoiContainer, VictoryGroup, VictoryScatter, VictoryChart, VictoryTooltip, VictoryTheme, VictoryAxis } from 'victory';
import { colors } from '../../helper/colors';
import Loader from '../Loader/Loader'

export class GovernanceIndicatorsStatistics extends Component {

  constructor() {
    super()

    this.state = {
      locationData: []
    };
  };

  static getDerivedStateFromProps(props, state) {
    if (props.locationData) {
      return {
        locationData: props.locationData
      };
    }
    return state;
  };
  
  render () {

    const legendItems = this.props.location.map((location, index ) => {
      return (
        <li className='legend-list-li' key={index}>
          {location.name} 
          <span className='legend-item' style={{color: colors[index]}}>⬤</span>
        </li>
      );
    })

    if (this.state.locationData.length && this.state.locationData[0].cleanPercentileRank) {

      const percentileRankChart = this.state.locationData.map((location, index) => {

        return ( 

          <VictoryGroup
            key={index}
            color={colors[index]}
            interpolation="natural"
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                pointerLength={20}
                style={{fontSize: 10, fontFamily: 'Avenir Next'}}
                flyoutStyle={{ stroke: 'black', fill: 'white'}}
              />
            }
            data={location.cleanPercentileRank}
          >
            <VictoryLine
              containerComponent={<VictoryContainer responsive={true}/>}
            />
            <VictoryScatter
              size={1}
            />
          </VictoryGroup>

          );
        });

      const numberOfSourcesChart = this.state.locationData.map((location, index) => {

        return (

            <VictoryBar
              containerComponent={<VictoryContainer responsive={true}/>}
              key={index}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  pointerLength={20}
                  style={{fontSize: 10, fontFamily: 'Avenir Next'}}
                  flyoutStyle={{ stroke: 'black', fill: 'white'}}
                />
              }
              style={{
                data: { fill: colors[index] },
                parent: { border: '1px solid #ccc'},
              }}
              data={location.cleanNumberOfSources}
            />

          );
        });

      const standardErrorChart = this.state.locationData.map((location, index) => {

        return ( 

          <VictoryGroup
            key={index}
            color={colors[index]}
            interpolation="natural"
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                pointerLength={20}
                style={{fontSize: 10, fontFamily: 'Avenir Next'}}
                flyoutStyle={{ stroke: 'black', fill: 'white'}}
              />
            }
            data={location.cleanStandardError}
          >
            <VictoryLine
              containerComponent={<VictoryContainer responsive={true}/>}
            />
            <VictoryScatter
              size={1}
            />
          </VictoryGroup>

          );
        });

      const estimatesChart = this.state.locationData.map((location, index) => {

        return (

          <VictoryGroup
            key={index}
            color={colors[index]}
            interpolation="natural"
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                pointerLength={20}
                style={{fontSize: 10, fontFamily: 'Avenir Next'}}
                flyoutStyle={{ stroke: 'black', fill: 'white'}}
              />
            }
            data={location.cleanEstimates}
          >
            <VictoryLine
              containerComponent={<VictoryContainer responsive={true}/>}
            />
            <VictoryScatter
              size={1}
            />
          </VictoryGroup>

          );
        });

      return (

        <div className="statistics-container">

          <h1>{this.props.dataBase.name}</h1>
          <h2>{this.props.dataSet.name}</h2>

          <VictoryChart
            animate={{ duration: 2000, easing: 'bounce' }} 
            width={600}
            theme={VictoryTheme.grayscale}
            containerComponent={<VictoryVoronoiContainer />}
          >

            <VictoryAxis
              label={`Percentile Rank - ${this.props.location.map(location => location.name).join(', ')}`}
              style={{
                axisLabel: { fontSize: 10, fontFamily: 'Avenir Next', padding: 30 },
                tickLabels: {fontSize: 6, fontFamily: 'Avenir Next', padding: 10, angle: 90}
              }}
            />

            <VictoryAxis dependentAxis
              style={{
                axisLabel: {fontSize: 10, fontFamily: 'Avenir Next', padding: 40, angle: 90},
                tickLabels: {fontSize: 6, fontFamily: 'Avenir Next', padding: 10}
              }}
            />

            { percentileRankChart }

          </VictoryChart>

          <div className='legend'> 
            <h3>Legend</h3>
            <ul className='legend-list-ul'>
              { legendItems }
            </ul>
          </div>

          <VictoryChart
            animate={{ duration: 2000, easing: 'bounce' }} 
            width={600}
            theme={VictoryTheme.grayscale}
            containerComponent={<VictoryVoronoiContainer />}
          >

            <VictoryAxis
              label={`Number of Sources - ${this.props.location.map(location => location.name).join(', ')}`}
              style={{
                axisLabel: { fontSize: 10, fontFamily: 'Avenir Next', padding: 30 },
                tickLabels: {fontSize: 6, fontFamily: 'Avenir Next', padding: 10, angle: 90}
              }}
            />

            <VictoryAxis dependentAxis
              style={{
                axisLabel: {fontSize: 10, fontFamily: 'Avenir Next', padding: 40, angle: 90},
                tickLabels: {fontSize: 6, fontFamily: 'Avenir Next', padding: 10}
              }}
            />

            { numberOfSourcesChart }

          </VictoryChart>

          <VictoryChart
            animate={{ duration: 2000, easing: 'bounce' }} 
            width={600}
            theme={VictoryTheme.grayscale}
            containerComponent={<VictoryVoronoiContainer />}
          >

            <VictoryAxis
              label={`Standard Error - ${this.props.location.map(location => location.name).join(', ')}`}
              style={{
                axisLabel: { fontSize: 10, fontFamily: 'Avenir Next', padding: 30 },
                tickLabels: {fontSize: 6, fontFamily: 'Avenir Next', padding: 10, angle: 90}
              }}
            />

            <VictoryAxis dependentAxis
              style={{
                axisLabel: {fontSize: 10, fontFamily: 'Avenir Next', padding: 40, angle: 90},
                tickLabels: {fontSize: 6, fontFamily: 'Avenir Next', padding: 10}
              }}
            />

            { standardErrorChart }

          </VictoryChart>

          <VictoryChart
            animate={{ duration: 2000, easing: 'bounce' }} 
            width={600}
            theme={VictoryTheme.grayscale}
            containerComponent={<VictoryVoronoiContainer />}
          >

            <VictoryAxis
              label={`Estimates Confidence - ${this.props.location.map(location => location.name).join(', ')}`}
              style={{
                axisLabel: { fontSize: 10, fontFamily: 'Avenir Next', padding: 30 },
                tickLabels: {fontSize: 6, fontFamily: 'Avenir Next', padding: 10, angle: 90}
              }}
            />

            <VictoryAxis dependentAxis
              style={{
                axisLabel: {fontSize: 10, fontFamily: 'Avenir Next', padding: 40, angle: 90},
                tickLabels: {fontSize: 6, fontFamily: 'Avenir Next', padding: 10}
              }}
            />

            { estimatesChart }

          </VictoryChart>

        </div>
      );

  } else if (this.state.locationData.length) {

      return (
        
        <div>
          <p className='loading-feedback'>
            hit change to see your new metric
          </p>
        </div>

      );

  } else

      return (

        <div>
          <Loader/>
        </div>
        
      );
  };
};

export const mapStateToProps = (state) => ({
  dataBase: state.dataBase,
  dataSet: state.dataSet,
  location: state.location,
  locationData: state.locationData
});

GovernanceIndicatorsStatistics.propTypes = {
  dataBase: PropTypes.object,
  dataSet: PropTypes.object,
  location: PropTypes.array,
  locationData: PropTypes.array
};

export default connect(mapStateToProps)(GovernanceIndicatorsStatistics);