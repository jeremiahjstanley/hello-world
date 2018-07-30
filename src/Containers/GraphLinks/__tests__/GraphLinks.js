import React from 'react';
import { shallow } from 'enzyme'
import { GraphLinks, mapStateToProps } from '../GraphLinks';


describe('GraphLinks', () => {

  let wrapper;
  let mockLocation;
  let mockDataBase;
  let mockDataSet;

  beforeEach(() => {

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

    mockDataSet = {
      name: 'Voice and Accountability',   
      dataset_code: 'VA'
    };

    mockDataBase = {
      name: 'Worldwide Governance Indicators',
      database_code: 'WWGI'
    };

    wrapper = shallow(<
    	GraphLinks
    		dataBase={mockDataBase}
    		dataSet={mockDataSet}
    		location={mockLocation}
    	/>
  	);

  });

	it('should match the snapshot', () => {

		expect(wrapper).toMatchSnapshot();

	});

	describe('mapStateToProps', () => {

		it('should return a state object with the keys of dataBase, dataSet, and location', () => {

      const mockState = {
        dataBase: mockDataBase,
        dataSet: mockDataSet,
        location: mockLocation
      };

      const expected = mockState;

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);


		});
		
	});

});