import React from 'react';
import { shallow } from 'enzyme';
import { StatisticsContainer, mapStateToProps } from '../StatisticsContainer'

describe('StatisticsContainer', () => {
  let wrapper;
  let mockInitialLocation;

  beforeEach(() => {
    mockInitialLocation = []
    wrapper = shallow(
      <StatisticsContainer
        initialLocation={mockInitialLocation}
      />)
  })
  describe('StatisticsContainer unit tests', () => {
    it('should match the snapshot', () => {

      expect(wrapper).toMatchSnapshot();
    })
  })
  describe('mapStateToProps', () => {
    it('should return a props object with an intial location array', () => {
      const mockState = {initialLocation: [{ name: '2016-12-31', Estimate: 1.3778049945831, 'Number of Sources': 11,'Percentile Rank': 96.059112548828, 'Standard Error': 0.13451327383518 }]};
      const expected = {initialLocation: mockState.initialLocation}
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected);
    })
  })
})