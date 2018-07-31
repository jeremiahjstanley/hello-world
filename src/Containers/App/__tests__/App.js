import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from '../App';


describe('App', () => {

  let wrapper;

  beforeEach(() => {


    wrapper = shallow(
      <App
        hasErrored={false}
        madeSearch={true}
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

  it('redirects the user to the home page when if they haven\'t made a search', () => {

    wrapper = shallow(
      <App
        madeSearch={false}
      />
    );

    expect(wrapper).toMatchSnapshot();

  });


	describe('mapStateToProps', () => {

		it('should set an error state to the component\'s props', () => {

      const mockState = {
        hasErrored: true,
        madeSearch: false
      };

      const expected = {
        hasErrored: true,
        madeSearch: false
      }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);

		});
		
	});

})