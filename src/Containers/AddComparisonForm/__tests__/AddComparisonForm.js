import React from 'react';
import { shallow } from 'enzyme';
import { AddComparisonForm, mapStateToProps, mapDispatchToProps } from '../AddComparisonForm';
import { setLocation} from '../../../actions';
import { fetchGovernanceIndicators } from '../../../thunks/fetchGovernanceIndicators';
import { fetchDevelopmentIndicators } from '../../../thunks/fetchDevelopmentIndicators';

jest.mock('../../../thunks/fetchGovernanceIndicators');
jest.mock('../../../thunks/fetchDevelopmentIndicators');


describe('AddComparisonForm', () => {

	let mockInput;
	let mockEvent
	let mockHistory;
  let mockLocation;
  let mockDataBase;
  let mockDataSet;
  let mockFetchDevelopmentIndicators;
  let mockFetchGovernanceIndicators;
  let mockSelectLocation;
  let additionalLocation;
  let wrapper;

  beforeEach(() => {

  	mockInput = { target: { value: 'Nigeria'} };

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

    additionalLocation =   {
	    name: 'Nigeria',
	    alpha_2: 'NG',
	    alpha_3: 'NGA',
	    country_code: '566',
	    iso_3166_2: 'ISO 3166-2: NG',
	    region: 'Africa',
	    sub_region: 'Sub-Saharan Africa',
	    intermediate_region: 'Western Africa',
	    region_code: '002',
	    sub_region_code: '202',
	    intermediate_region_code: '011'
	  };

    mockDataBase = 'WWDI';

    mockDataSet = 'SM_POP_REFG';

	  mockFetchDevelopmentIndicators = jest.fn();

	  mockFetchGovernanceIndicators = jest.fn();

	  mockSelectLocation = jest.fn();

    wrapper = shallow(
    	<AddComparisonForm 
    		dataBase={mockDataBase}
    		dataSet={mockDataSet}
    		location={mockLocation}
    		fetchGovernanceIndicators={mockFetchGovernanceIndicators}
    		fetchDevelopmentIndicators={mockFetchDevelopmentIndicators}
    		selectLocation={mockSelectLocation}
    		history={mockHistory}
    	/>
  	);

  });

	it('should match the snapshot', () => {

		expect(wrapper).toMatchSnapshot();

	});

  it('should have a default state of an empty object ', () => {

    const expected = {};

    const results = wrapper.state();

    expect(results).toEqual(expected);

  });

  it('should update the state when handleChange is invoked', () => {

    const expected = additionalLocation;

    wrapper.instance().handleChange(mockInput);

    const results = wrapper.state('additionalLocation');

    expect(results).toEqual(expected);

  });

   it('should invoke selectLocation when there is a additionalLocation property in local state', () => {

    wrapper.instance().handleChange(mockInput);

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockSelectLocation).toHaveBeenCalledWith([...mockLocation, additionalLocation]);

  });

   it('should not invoke selectLocation when there is a not additionalLocation property in local state', () => {

    mockInput = { target: { value: 'Naria'} };

   	wrapper.instance().handleChange(mockInput);

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockSelectLocation).not.toHaveBeenCalledWith([...mockLocation, additionalLocation]);

  });

   it('should invoke fetchGovernanceIndicators when the form is submitted with a database_code of WWDI', () => {

	  mockDataBase = 'WWGI'; 

    wrapper = shallow(
    	<AddComparisonForm 
    		dataBase={mockDataBase}
    		dataSet={mockDataSet}
    		location={mockLocation}
    		fetchGovernanceIndicators={mockFetchGovernanceIndicators}
    		fetchDevelopmentIndicators={mockFetchDevelopmentIndicators}
    		selectLocation={mockSelectLocation}
    		history={mockHistory}
    	/>
    );

   	wrapper.instance().handleChange(mockInput);

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockFetchGovernanceIndicators).toHaveBeenCalledWith([...mockLocation, additionalLocation], mockDataSet, mockDataBase);

  });

   it('should invoke fetchDevelopmentIndicators when the form is submitted with a database_code other than WWGI', () => {

   	wrapper.instance().handleChange(mockInput);

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockFetchDevelopmentIndicators).toHaveBeenCalledWith([...mockLocation, additionalLocation], mockDataSet, mockDataBase);

  });

   it('should direct the user to the stats page of the application', () => {

   	wrapper.instance().handleChange(mockInput);

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

		it('should return an object with dataBase key', () => {

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

		it('calls dispatch with the selectLocation action when called', () => {

			const mappedProps = mapDispatchToProps(mockDispatch);

			actionToDispatch = setLocation([...mockLocation, additionalLocation]);

			mappedProps.selectLocation([...mockLocation, additionalLocation]);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

		});
		
	});

});