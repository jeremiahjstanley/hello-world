import React from 'react';
import { shallow } from 'enzyme'
import { ExplanationText } from '../ExplanationText';


describe('ExplanationText', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<ExplanationText />);

  });

	it('should match the snapshot', () => {

		expect(wrapper).toMatchSnapshot();

	});

});