import React from 'react';
import { shallow } from 'enzyme';
import { DataBaseSelectField, mapDispatchToProps } from '../DataBaseSelectField';
import { setDataBase } from '../../../actions';
import { dataMetrics } from '../../../helper/dataMetrics';


describe('DataBaseSelectField', () => {

  let wrapper;
  let mockEvent;
  let mockSelectDataBase;
  let mockDataBase;

  beforeEach(() => {

    mockDataBase = {
  		name: 'Worldwide Governance Indicators',
  		database_code: 'WWGI'
  	};

  	mockSelectDataBase = jest.fn();

    wrapper = shallow(
    	<DataBaseSelectField 
    		selectDataBase={mockSelectDataBase}
    	/>
  	);

  });

	it('should match the snapshot', () => {

		expect(wrapper).toMatchSnapshot();

	});

  it('should call selectDataBase when the dropdown is has a change event', () => {

  	mockEvent = { target: { value: 'Worldwide Governance Indicators'} };

    wrapper.instance().selectMetric(mockEvent);

    expect(mockSelectDataBase).toHaveBeenCalledWith(mockDataBase);

  });

	describe('mapDispatchToProps', () => {

		let actionToDispatch;
		let mockDispatch;

		beforeEach(() => {

			mockDispatch = jest.fn();

		});

		it('calls dispatch with the setDataBase action when called', () => {

			const mappedProps = mapDispatchToProps(mockDispatch);

			actionToDispatch = setDataBase(mockDataBase);

			mappedProps.selectDataBase(mockDataBase);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

		});
		
	});
	
});