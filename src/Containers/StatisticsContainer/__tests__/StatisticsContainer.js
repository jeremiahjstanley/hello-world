import React from 'react';
import { shallow } from 'enzyme';
import { StatisticsContainer, mapStateToProps } from '../StatisticsContainer'

describe('StatisticsContainer', () => {
  let wrapper;
  let mockLocation;
  let mockLocationData;
  let mockDataSet;
  let mockDataBase;

  beforeEach(() => {
    mockLocationData = [
        {
          name: '2016-12-31',
          Estimate: 1.3778049945831,
          'Number of Sources': 11,
          'Percentile Rank': 96.059112548828,
          'Standard Error': 0.13451327383518
        }
      ]
    mockLocation = {
        name: 'Belgium',
        alpha_2: 'BE',
        alpha_3: 'BEL',
        country_code: '056',
        iso_3166_2: 'ISO 3166-2: BE',
        region: 'Europe',
        sub_region: 'Western Europe',
        intermediate_region: '',
        region_code: '150',
        sub_region_code: '155',
        intermediate_region_code: ''
      }
    mockDataSet = {
        name: 'Voice and Accountability',   
        dataset_code: 'VA'
      }
    mockDataBase = {
        name: 'Worldwide Governance Indicators',
        database_code: 'WWGI'
      }
    wrapper = shallow(
      <StatisticsContainer
        locationData={mockLocationData}
        location={mockLocation}
        dataSet={mockDataSet}
        dataBase={mockDataBase}
      />)
  })
  describe('StatisticsContainer unit tests', () => {
    it('should match the snapshot', () => {

      expect(wrapper).toMatchSnapshot();
    })
  })
  describe('mapStateToProps', () => {
    it('should return a props object with an location, dataBase, dataSet, and locationData property', () => {
      const mockState = {
        locationData: [
            {
            name: '2016-12-31',
            Estimate: 1.3778049945831,
            'Number of Sources': 11,
            'Percentile Rank': 96.059112548828,
            'Standard Error': 0.13451327383518
             }
          ],
        dataSet: {
            name: 'Voice and Accountability',   
            dataset_code: 'VA'
          },
        dataBase: {
            name: 'Worldwide Governance Indicators',
            database_code: 'WWGI'
          },
        location: {
            name: 'Belgium',
            alpha_2: 'BE',
            alpha_3: 'BEL',
            country_code: '056',
            iso_3166_2: 'ISO 3166-2: BE',
            region: 'Europe',
            sub_region: 'Western Europe',
            intermediate_region: '',
            region_code: '150',
            sub_region_code: '155',
            intermediate_region_code: ''
          }
      };

      const expected = mockState
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected);
    })
  })
})