import React from 'react';
import { shallow } from 'enzyme';
import { ControlledForm, mapStateToProps, mapDispatchToProps } from '../ControlledForm';
import { setLocation, setDataBase, setDataSet, madeSearch } from '../../../actions';
import { fetchGovernanceIndicators }from '../../../thunks/fetchGovernanceIndicators';
import { fetchDevelopmentIndicators } from '../../../thunks/fetchDevelopmentIndicators';

jest.mock('../../../thunks/fetchGovernanceIndicators');
jest.mock('../../../thunks/fetchDevelopmentIndicators');


describe('ControlledForm', () => {

	let mockInput;
	let mockEvent;
	let mockLocation;
	let mockHistory;
  let mockDataBase;
  let mockDataSet;
  let mockFetchDevelopmentIndicators;
  let mockFetchGovernanceIndicators;
  let mockSelectDataSet;
  let mockSelectDataBase;
  let mockSelectLocation;
  let mockMakeSearch;
  let additionalLocation;
  let wrapper;

  beforeEach(() => {

  	mockInput = { target: { value: 'Burkina Faso'} };

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

	  mockSelectDataBase = jest.fn();

	  mockSelectDataSet = jest.fn();

	  mockSelectLocation = jest.fn();

    mockMakeSearch = jest.fn()

    wrapper = shallow(
    	<ControlledForm 
    		dataBase={mockDataBase}
    		dataSet={mockDataSet}
    		fetchGovernanceIndicators={mockFetchGovernanceIndicators}
    		fetchDevelopmentIndicators={mockFetchDevelopmentIndicators}
    		selectDataBase={mockSelectDataBase}
    		selectDataSet={mockSelectDataSet}
    		selectLocation={mockSelectLocation}
        makeSearch={mockMakeSearch}
    		history={mockHistory}
    	/>
  	);

  });

	it('should match the snapshot', () => {

		expect(wrapper).toMatchSnapshot();

	});

  it('should have a default state with a dataBase and dataSet object', () => {

    const expected = {
      dataBase: {
        name: 'Worldwide Governance Indicators', 
        database_code: 'WWGI'
      },
      dataSet: {
        name: 'Voice and Accountability', 
        dataset_code: 'VA'
      }
    };

    const results = wrapper.state();

    expect(results).toEqual(expected);

  });

  it('should call selectDataBase on page load', () => {

    const expected = wrapper.state().dataBase;

    expect(mockSelectDataBase).toHaveBeenCalledWith(expected);

  });

  it('should call selectDataSet on page load', () => {

    const expected = wrapper.state().dataSet;

    expect(mockSelectDataSet).toHaveBeenCalledWith(expected);

  });

  it('should update the state when handleChange is invoked', () => {

  	const expected = {
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
    }

    wrapper.instance().handleChange(mockInput);

    const results = wrapper.state('location');

    expect(results).toEqual(expected);

  });

   it('should invoke fetchGovernanceIndicators when the form is submitted with a database_code of WWDI', () => {

	  mockDataBase = 'WWGI'; 

    wrapper = shallow(
    	<ControlledForm 
    		dataBase={mockDataBase}
    		dataSet={mockDataSet}
    		fetchGovernanceIndicators={mockFetchGovernanceIndicators}
    		fetchDevelopmentIndicators={mockFetchDevelopmentIndicators}
    		selectDataBase={mockSelectDataBase}
    		selectDataSet={mockSelectDataSet}
    		selectLocation={mockSelectLocation}
        makeSearch={mockMakeSearch}
    		history={mockHistory}
    	/>
    );

   	wrapper.instance().handleChange(mockInput);

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockFetchGovernanceIndicators).toHaveBeenCalledWith(mockLocation, mockDataSet, mockDataBase);

  });

   it('should invoke fetchDevelopmentIndicators when the form is submitted with a database_code other than WWGI', () => {

   	wrapper.instance().handleChange(mockInput);

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockFetchDevelopmentIndicators).toHaveBeenCalledWith(mockLocation, mockDataSet, mockDataBase);

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
			};

		});

		it('should return an object with dataBase and dataSet key', () => {

			const expected = {
				dataBase: mockDataBase.database_code,
				dataSet: mockDataSet.dataset_code,
			};

			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);

		});

	});

	describe('mapDispatchToProps', () => {

		let actionToDispatch;
		let mockDispatch;
		let mockDataBase;
		let mockDataSet

		beforeEach(() => {

			mockDispatch = jest.fn();

			mockDataBase = {
    		name: 'Worldwide Governance Indicators',
    		database_code: 'WWGI'
    	};

    	mockDataSet = {
        name: 'Voice and Accountability', 
        dataset_code: 'VA'
      };

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


		it('calls dispatch with the setDataBase action when called', () => {

			const mappedProps = mapDispatchToProps(mockDispatch);

			actionToDispatch = setDataBase(mockDataBase);

			mappedProps.selectDataBase(mockDataBase);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

		});

		it('calls dispatch with the setDataSet action when called', () => {

			const mappedProps = mapDispatchToProps(mockDispatch);

			actionToDispatch = setDataSet(mockDataSet);

			mappedProps.selectDataSet(mockDataSet);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

		});

		it('calls dispatch with the setLocation action when called', () => {

			const mappedProps = mapDispatchToProps(mockDispatch);

			actionToDispatch = setLocation(mockLocation);

			mappedProps.selectLocation(mockLocation);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

		});

    it('calls dispatch with the madeSearch action when called', () => {

      const mappedProps = mapDispatchToProps(mockDispatch);

      actionToDispatch = madeSearch(mockLocation);

      mappedProps.makeSearch(mockLocation);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
		
	});

});