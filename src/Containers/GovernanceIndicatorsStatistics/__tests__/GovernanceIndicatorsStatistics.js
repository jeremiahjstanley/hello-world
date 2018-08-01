import React from 'react';
import { shallow } from 'enzyme';
import { GovernanceIndicatorsStatistics, mapStateToProps } from '../GovernanceIndicatorsStatistics';


describe('GovernanceIndicatorsStatistics', () => {

  let wrapper;
  let mockDataBase;
  let mockDataSet;
  let mockLocation;
  let givenProps;
  let mockLocationData;

  beforeEach(() => {

    mockDataBase = {
  		name: 'Worldwide Governance Indicators',
  		database_code: 'WWGI'
  	};

    mockDataSet = {
      name: 'Voice and Accountability', 
      dataset_code: 'VA'
    };

    mockLocation = [{
      name:'Burkina Faso',
      alpha_2:'BF',
      alpha_3:'BFA',
      country_code:'854',
      iso_3166_2:'ISO 3166-2: BF',
      region:'Africa',
      sub_region:'Sub-Saharan Africa',
      intermediate_region:'Western Africa',
      region_code:'002',sub_region_code:'202',
      intermediate_region_code:'011'
    }];

    wrapper = shallow(
    	<GovernanceIndicatorsStatistics
        dataBase={mockDataBase}
        dataSet={mockDataSet}
        location={mockLocation}
        locationData={[]}
    	/>
  	 );

  });

	it('should match the snapshot when the locationData array has length ', () => {

		expect(wrapper).toMatchSnapshot();

	});

  it('should match the snapshot when the locationData array does not have length ', () => {

    wrapper = shallow(
      <GovernanceIndicatorsStatistics 
        dataBase={mockDataBase}
        dataSet={mockDataSet}
        location={mockLocation}
        locationData={[]}
      />
     );

    expect(wrapper).toMatchSnapshot();

  });

  it('should match the snapshot when the locationData array has length, but no percentile property', () => {

    wrapper = shallow(
      <GovernanceIndicatorsStatistics
        dataBase={mockDataBase}
        dataSet={mockDataSet}
        location={mockLocation}
        locationData={[{}]}
      />
     );

    expect(wrapper).toMatchSnapshot();

  });

    it('should derive local state from props using getDerivedStateFromProps, returning a locationData property when the locationData prop is present', () => {

    wrapper = shallow(
      <GovernanceIndicatorsStatistics        
        dataBase={mockDataBase}
        dataSet={mockDataSet} 
        location={mockLocation}
        locationData={[]}
      />
     );

    const givenProps = {
      locationData: [{
        cleanPercentileRank: [{},{},{}],
        cleanNumberOfSources: [{},{},{}],
        cleanStandardError: [{},{},{}],
        cleanEstimates: [{},{},{}]
      }]
    };
    
    wrapper.setProps(givenProps);

    const result = wrapper.state();

    expect(result).toEqual(givenProps);

  });

  it('should derive local state from props using getDerivedStateFromProps, returing an empty state object when locationData prop is not present', () => {

    wrapper = shallow(
      <GovernanceIndicatorsStatistics 
        location={mockLocation}
      />
    );
    
    wrapper.setProps(undefined);

    const result = wrapper.state();

    expect(result).toEqual({locationData: []});

  });

	describe('mapStateToProps', () => {

    it('should return a props object with an dataBase, dataSet, location, and locationData property', () => {

      const mockState = {
        dataBase: mockDataBase,
        dataSet: mockDataSet,
        location: mockLocation,
        locationData: mockLocationData
      };

      const expected = mockState;

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);

    });
		
	});
	
});