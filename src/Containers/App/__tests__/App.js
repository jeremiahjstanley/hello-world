import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from '../App';


describe('App', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
      <App
        hasErrored={false}
        locationData={[{},{}]}
      />
    );

  });

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();

  });


  it('renders an error page when the application has an error', () => {

    wrapper = shallow(
      <App
        hasErrored={true}
      />
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('redirects the user to the home page when there is no locationData', () => {

    wrapper = shallow(
      <App
        hasErrored={false}
        locationData={[]}
      />
    );

    expect(wrapper).toMatchSnapshot();

  });

	describe('mapStateToProps', () => {

		it('should set an error state to the component\'s props', () => {

      const mockState = {
        hasErrored: true,
        locationData: []
      };

      const expected = {
        hasErrored: true,
        locationData: []
      }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);

		});
		
	});

})