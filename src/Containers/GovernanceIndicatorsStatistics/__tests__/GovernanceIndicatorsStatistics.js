import React from 'react';
import { shallow } from 'enzyme';
import { GovernanceIndicatorsStatistics, mapStateToProps } from '../GovernanceIndicatorsStatistics';


describe('GovernanceIndicatorsStatistics', () => {

  let wrapper;
  let mockDataBase;
  let mockDataSet;
  let mockLocation;
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

    mockLocationData = [];
    // error is here.

    wrapper = shallow(
    	<GovernanceIndicatorsStatistics
        dataBase={mockDataBase}
        dataSet={mockDataSet}
        location={mockLocation}
        locationData={mockLocationData}
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