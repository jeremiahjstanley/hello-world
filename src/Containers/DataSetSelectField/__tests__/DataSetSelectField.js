import React from 'react';
import { shallow } from 'enzyme';
import { DataSetSelectField, mapStateToProps, mapDispatchToProps } from '../DataSetSelectField';
import { setDataSet } from '../../../actions';
import { dataMetrics } from '../../../helper/dataMetrics';


describe('DataSetSelectField', () => {

  let wrapper;
  let mockEvent;
  let mockSelectDataSet;
  let mockDataBase;
  let mockDataSet; 

  beforeEach(() => {

    mockDataBase = 'Worldwide Governance Indicators';

  	mockDataSet = {
      name: 'Voice and Accountability', 
      dataset_code: 'VA'
    };

  	mockSelectDataSet = jest.fn();

    wrapper = shallow(
    	<DataSetSelectField 
    		dataBase={mockDataBase}
    		selectDataSet={mockSelectDataSet}
    	/>
  	);

  });

	it('should match the snapshot when the state has a dataBase property', () => {

		expect(wrapper).toMatchSnapshot();

	});

	it('should match the snapshot when the state has does not have a dataBase property', () => {

    wrapper = shallow(
    	<DataSetSelectField 
    		dataBase={ undefined }
    		selectDataSet={mockSelectDataSet}
    	/>
  	);

		expect(wrapper).toMatchSnapshot();

	});

  it('should call selectDataSet when the dropdown is has a change event', () => {

  	mockEvent = { target: { value: 'Voice and Accountability'} };

    wrapper.instance().selectMetric(mockEvent);

    expect(mockSelectDataSet).toHaveBeenCalledWith(mockDataSet);

  });

  it('should derive local state from props using  getDerivedStateFromProps', () => {

		const mockProps = {
			database: {
		    name: 'Worldwide Governance Indicators',
		    database_code: 'WWGI',
		    datasets: [
		      {
		        name: 'Voice and Accountability', 
		        dataset_code: 'VA'
		      
		      },
		      {
		        name: 'Political Stability and Absence of Violence',
		        dataset_code: 'PV'
		      
		      },
		      {
		        name: 'Government Effectiveness',
		        dataset_code: 'GE'
		      },
		      {
		        name: 'Regulatory Quality',
		        dataset_code: 'RQ'
		      
		      },
		      {
		        name: 'Rule of Law',
		        dataset_code: 'RL'
		      
		      },
		      {
		        name: 'Control of Corruption', 
		        dataset_code: 'CC'
		      }
		    ]
	  	}
	  };

		const mockState = {
			dataBase: {
		    name: 'Worldwide Governance Indicators',
		    database_code: 'WWGI',
		    datasets: [
		      {
		        name: 'Voice and Accountability', 
		        dataset_code: 'VA'
		      
		      },
		      {
		        name: 'Political Stability and Absence of Violence',
		        dataset_code: 'PV'
		      
		      },
		      {
		        name: 'Government Effectiveness',
		        dataset_code: 'GE'
		      },
		      {
		        name: 'Regulatory Quality',
		        dataset_code: 'RQ'
		      
		      },
		      {
		        name: 'Rule of Law',
		        dataset_code: 'RL'
		      
		      },
		      {
		        name: 'Control of Corruption', 
		        dataset_code: 'CC'
		      }
		    ]
	  	}
	  };
		
		wrapper.setProps(mockProps);

		const result = wrapper.state();

		expect(result).toEqual(mockState);

  });

	describe('mapStateToProps', () => {

		let actionToDispatch;
		let mockState;
		let mockDispatch;

		beforeEach(() => {

	    mockState = {
	  		dataBase: {
		  		name: 'Worldwide Governance Indicators',
		  		database_code: 'WWGI'	
	  		}
	  	};

		});

		it('should return an object with dataBase key', () => {
			
			const expected = {
				dataBase: mockDataBase
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

		it('calls dispatch with the setDataBase action when called', () => {

			const mappedProps = mapDispatchToProps(mockDispatch);

			actionToDispatch = setDataSet(mockDataSet);

			mappedProps.selectDataSet(mockDataSet);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

		});
		
	});
	
});