import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryLine, VictoryContainer, VictoryVoronoiContainer, VictoryChart, VictoryTooltip, VictoryTheme, VictoryAxis } from 'victory';
import { colors } from '../../helper/colors';
import Loader from '../Loader/Loader'


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
   
        return ( 
            <VictoryLine
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
                data: { stroke: colors[index] },
                parent: { border: '1px solid #ccc'},
              }}
              data={location}
            />
          );
        });


      return (

        <div className='statistics-container'>

          <h1>{this.props.dataBase.name}</h1>
          <h2>{this.props.dataSet.name}</h2>

          <VictoryChart
            animate={{ duration: 2000, easing: 'bounce' }} 
            width={600}
            theme={VictoryTheme.grayscale}
            containerComponent={<VictoryVoronoiContainer />}
          >
            <VictoryAxis
              label={`${this.props.dataSet.name} - ${this.props.location.map(location => location.name).join(', ')}`}
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
