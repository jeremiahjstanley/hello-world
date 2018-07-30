import React from 'react';
import { shallow } from 'enzyme'
import { ChangeDataBaseForm, mapStateToProps, mapDispatchToProps } from '../ChangeDataBaseForm';
import { fetchGovernanceIndicators } from '../../../thunks/fetchGovernanceIndicators';
import { fetchDevelopmentIndicators } from '../../../thunks/fetchDevelopmentIndicators';
import DataBaseSelectField from '../../DataBaseSelectField/DataBaseSelectField';
import DataSetSelectField from '../../DataSetSelectField/DataSetSelectField';

jest.mock('../../../thunks/fetchGovernanceIndicators');
jest.mock('../../../thunks/fetchDevelopmentIndicators');


describe('ChangeDataBaseForm', () => {

	let mockEvent
	let mockHistory;
  let mockLocation;
  let mockDataBase;
  let mockDataSet;
  let mockFetchDevelopmentIndicators;
  let mockFetchGovernanceIndicators;
  let wrapper;

  beforeEach(() => {

   	mockEvent = { preventDefault: jest.fn() };

  	mockHistory = [];

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

    mockDataBase = 'WWDI';

    mockDataSet = 'SM_POP_REFG';

	  mockFetchDevelopmentIndicators = jest.fn();

	  mockFetchGovernanceIndicators = jest.fn();

    wrapper = shallow(
    	<ChangeDataBaseForm 
    		dataBase={mockDataBase}
    		dataSet={mockDataSet}
    		location={mockLocation}
    		fetchGovernanceIndicators={mockFetchGovernanceIndicators}
    		fetchDevelopmentIndicators={mockFetchDevelopmentIndicators}
    		history={mockHistory}
    	/>
  	);

  });

	it('should match the snapshot', () => {

		expect(wrapper).toMatchSnapshot();

	});

 it('should invoke fetchGovernanceIndicators when the form is submitted with a database_code of WWDI', () => {

	  mockDataBase = 'WWGI'; 

    wrapper = shallow(
    	<ChangeDataBaseForm 
    		dataBase={mockDataBase}
    		dataSet={mockDataSet}
    		location={mockLocation}
    		fetchGovernanceIndicators={mockFetchGovernanceIndicators}
    		fetchDevelopmentIndicators={mockFetchDevelopmentIndicators}
    		history={mockHistory}
    	/>
    );

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockFetchGovernanceIndicators).toHaveBeenCalledWith(mockLocation, mockDataSet, mockDataBase);

  });

   it('should invoke fetchDevelopmentIndicators when the form is submitted with a database_code other than WWGI', () => {

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockFetchDevelopmentIndicators).toHaveBeenCalledWith(mockLocation, mockDataSet, mockDataBase);

  });

   it('should direct the user to the stats page of the application', () => {

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockHistory).toEqual(['/stats']);

  });

	describe('mapStateToProps', () => {

		let mockState;
		let mockDataBase;
		let mockDataSet;

		beforeEach(() => {

			mockDataBase = {
    		name: 'Worldwide Governance Indicators',
    		database_code: 'WWGI'
    	}

    	mockDataSet = {
        name: 'Voice and Accountability', 
        dataset_code: 'VA'
      }

			mockState = {
				dataBase: mockDataBase,
				dataSet: mockDataSet,
				location: mockLocation
			};

		});

		it('should return an object with dataBase, dataSet, and location key', () => {

			const expected = {
				dataBase: mockDataBase.database_code,
				dataSet: mockDataSet.dataset_code,
				location: mockLocation
			};

			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);

		});

	});

	describe('mapDispatchToProps', () => {

		let actionToDispatch;
		let mockDispatch;

		beforeEach(() => {

			mockDispatch = jest.fn();

		});

		it('calls dispatch with the fetchDevelopmentIndicators action when called', () => {

	  	mockDataBase = 'WWGI'; 

			const mappedProps = mapDispatchToProps(mockDispatch);

			actionToDispatch = fetchDevelopmentIndicators(mockLocation, mockDataBase, mockDataSet);

			mappedProps.fetchDevelopmentIndicators(mockLocation, mockDataBase, mockDataSet);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

		});

		it('calls dispatch with the fetchDevelopmentIndicators action when called', () => {

			const mappedProps = mapDispatchToProps(mockDispatch);

			actionToDispatch = fetchGovernanceIndicators(mockLocation, mockDataBase, mockDataSet);

			mappedProps.fetchGovernanceIndicators(mockLocation, mockDataBase, mockDataSet);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

		});
		
	});

});