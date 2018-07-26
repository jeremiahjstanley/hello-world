import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader'
import { VictoryLine, VictoryContainer, VictoryBar, VictoryChart, VictoryTooltip, VictoryTheme, VictoryAxis } from 'victory';

export class DevelopmentIndicatorStatistics extends Component {
  
  constructor() {
    super()

    this.state = {
      locationData: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.locationData) {
      return {
        locationData: props.locationData
      };
    }
    return state 
  }
  
  render () {

    if (this.state.locationData.length) {

      const developmentChart = this.state.locationData.map((location, index) => {
        console.log('Location', location)
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
              data={location}
            />
          );
        });


      return (

        <div className="statistics-container">

          <h1>{this.props.dataBase.name} - {this.props.dataSet.name}</h1>

          <VictoryChart
            animate={{ duration: 2000, easing: "bounce" }} 
            width={600}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              label={`${this.props.dataSet.name} - ${this.props.location.map(location => location.name).join(',')}`}
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
            { developmentChart }
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

export default connect(mapStateToProps)(DevelopmentIndicatorStatistics);
