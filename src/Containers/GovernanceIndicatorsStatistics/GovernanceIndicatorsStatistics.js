import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader'
import { VictoryLine, VictoryContainer, VictoryBar, VictoryChart, VictoryTooltip, VictoryTheme, VictoryAxis } from 'victory';

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
    return state 
  };
  
  render () {

    if (this.state.locationData.length) {

      const percentileRankChart = this.state.locationData.map((location, index) => {
        return ( 
            <VictoryLine
              containerComponent={<VictoryContainer responsive={true}/>}
              labelComponent={<VictoryTooltip/>}
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"},
                fontSize: 8,
                axisLabel: {fontSize: 20, padding: 30, angle: 90},
                tickLabels: {fontSize: 15, padding: 5, angle: 90}
              }}
              data={location.cleanPercentileRank}
            />
          );
        });

      const numberOfSourcesChart = this.state.locationData.map((location, index) => {
        return ( 
            <VictoryBar
              containerComponent={<VictoryContainer responsive={true}/>}
              labelComponent={<VictoryTooltip/>}
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"},
                fontSize: 8,
                axisLabel: {fontSize: 20, padding: 30, angle: 90},
                tickLabels: {fontSize: 15, padding: 5, angle: 90}
              }}
              data={location.cleanNumberOfSources}
            />
        );
      });

      const standardErrorChart = this.state.locationData.map((location, index) => {
        return ( 
            <VictoryLine
              containerComponent={<VictoryContainer responsive={true}/>}
              labelComponent={<VictoryTooltip/>}
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"},
                fontSize: 8,
                axisLabel: {fontSize: 20, padding: 30, angle: 90},
                tickLabels: {fontSize: 15, padding: 5, angle: 90}
              }}
              data={location.cleanStandardError}
            />
        );
      });

      const estimatesChart = this.state.locationData.map((location, index) => {
        return ( 
            <VictoryLine
              containerComponent={<VictoryContainer responsive={true}/>}
              labelComponent={<VictoryTooltip/>}
              style={{

                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"},
                fontSize: 8,
                axisLabel: {fontSize: 20, padding: 30, angle: 90},
                tickLabels: {fontSize: 15, padding: 5, angle: 90}
              }}
              data={location.cleanEstimates}
            />
        );
      });

      return (

        <div className="statistics-container">

          <h1>{this.props.dataBase.name} - {this.props.dataSet.name}</h1>

          <VictoryChart
            animate={{ duration: 2000, easing: "bounce" }} 
            domain={{ y: [0, 100]}}
            height={300} 
            width={600}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              label={`percentile rank - ${this.props.location.map(location => location.name).join(',')}`}
              style={{
                  axisLabel: { padding: 30 }
              }}
              />
              <VictoryAxis dependentAxis
                label="percent"
                style={{
                  axisLabel: { padding: 40 }
                }}
          />
            { percentileRankChart }
          </VictoryChart>

          <VictoryChart
            animate={{ duration: 2000, easing: "bounce" }}
            height={300} 
            width={500}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              label={`number of sources - ${this.props.location.map(location => location.name).join(',')}`}
              style={{
                  axisLabel: { padding: 30 }
              }}
              />
              <VictoryAxis dependentAxis
                label="number of sources"
                style={{
                  axisLabel: { padding: 40 }
                }}
          />
            { numberOfSourcesChart }
          </VictoryChart>

          <VictoryChart
            animate={{ duration: 2000, easing: "bounce" }}
            height={300} 
            width={600}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              label={`standard error - ${this.props.location.map(location => location.name).join(',')}`}
              style={{
                  axisLabel: { padding: 30 }
              }}
              />
              <VictoryAxis dependentAxis
                label="standard errror"
                style={{
                  axisLabel: { padding: 40 }
                }}
          />
            { standardErrorChart }
          </VictoryChart>

          <VictoryChart 
            height={300} 
            width={600}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              label={`estimate accuracy - ${this.props.location.map(location => location.name).join(',')}`}
              style={{
                  axisLabel: { padding: 30 }
              }}
              />
              <VictoryAxis dependentAxis
                label="estimate accuracy"
                style={{
                  axisLabel: { padding: 40 }
                }}
           />
            { estimatesChart }
          </VictoryChart>

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

export default connect(mapStateToProps)(GovernanceIndicatorsStatistics);