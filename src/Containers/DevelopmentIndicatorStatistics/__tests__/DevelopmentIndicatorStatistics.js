import React from 'react';
import { shallow } from 'enzyme'
import { DevelopmentIndicatorStatistics, mapStateToProps } from '../DevelopmentIndicatorStatistics'


describe('DevelopmentIndicatorStatistics', () => {

  let wrapper;
  let mockDataBase;
  let mockDataSet;
  let mockLocation;
  let mockLocationData;

  beforeEach(() => {

    mockDataBase = {
  		name: 'Worldwide Development Indicators',
  		database_code: 'WWDI'
  	};

    mockDataSet = {
      name: 'Refugee population by country or territory of asylum', 
      dataset_code: 'SM_POP_REFG'
    };

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

    mockLocationData = [[
      {label: `year: 1997
      value: 1379263500000`, x: '1997', y: 1379263500000},
      {label: `year: 1998
      value: 1424667164000`, x: '1998', y: 1424667164000},
      {label: `year: 1999
      value: 1482966527000`, x: '1999', y: 1482966527000},
      {label: `year: 2000
      value: 1543678200000`, x: '2000', y: 1543678200000},
      {label: `year: 2001
      value: 1466466814000`, x: '2001', y: 1466466814000},
      {label: `year: 2002
      value: 1460259581000`, x: '2002', y: 1460259581000},
      {label: `year: 2003
      value: 1517777020000`, x: '2003', y: 1517777020000},
      {label: `year: 2004
      value: 1605702392000`, x: '2004', y: 1605702392000},
      {label: `year: 2005
      value: 1689772453000`, x: '2005', y: 1689772453000},
      {label: `year: 2006
      value: 1789604332000`, x: '2006', y: 1789604332000},
      {label: `year: 2007
      value: 1839907042000`, x: '2007', y: 1839907042000},
      {label: `year: 2008
      value: 1800098070000`, x: '2008', y: 1800098070000},
      {label: `year: 2009
      value: 1704555537000`, x: '2009', y: 1704555537000},
      {label: `year: 2010
      value: 1807913249000`, x: '2010', y: 1807913249000},
      {label: `year: 2011
      value: 1885093563000`, x: '2011', y: 1885093563000},
      {label: `year: 2012
      value: 1958676540000`, x: '2012', y: 1958676540000},
      {label: `year: 2013
      value: 2008179295000`, x: '2013', y: 2008179295000},
      {label: `year: 2014
      value: 2084859568000`, x: '2014', y: 2084859568000},
      {label: `year: 2015
      value: 2159808669000`, x: '2015', y: 2159808669000},
      {label: `year: 2016
      value: 2160559261000`, x: '2016', y: 2160559261000}
      ]
    ];

    wrapper = shallow(
    	<DevelopmentIndicatorStatistics 
        dataBase={mockDataBase}
        dataSet={mockDataSet}
        location={mockLocation}
        locationData={mockLocationData}
    	/>
  	 );

  });

	it('should match the snapshot when the locationData array has length ', () => {

		expect(wrapper).toMatchSnapshot();

	});

  it('should match the snapshot when the locationData array does not have length ', () => {

    wrapper = shallow(
      <DevelopmentIndicatorStatistics 
        dataBase={mockDataBase}
        dataSet={mockDataSet}
        location={mockLocation}
        locationData={[]}
      />
     );

    expect(wrapper).toMatchSnapshot();

  });

    it('should derive local state from props using getDerivedStateFromProps, returning a locationData property when the locationData prop is present', () => {

    wrapper = shallow(
      <DevelopmentIndicatorStatistics 
        locationData={[]}
      />
     );

    const givenProps = {
      locationData: [ 
        {label: `year: 1997
        value: 1379263500000`, x: '1997', y: 1379263500000},
        {label: `year: 1998
        value: 1424667164000`, x: '1998', y: 1424667164000},
        {label: `year: 1999
        value: 1482966527000`, x: '1999', y: 1482966527000},
        {label: `year: 2000
        value: 1543678200000`, x: '2000', y: 1543678200000},
        {label: `year: 2001
        value: 1466466814000`, x: '2001', y: 1466466814000},
        {label: `year: 2002
        value: 1460259581000`, x: '2002', y: 1460259581000},
        {label: `year: 2003
        value: 1517777020000`, x: '2003', y: 1517777020000},
        {label: `year: 2004
        value: 1605702392000`, x: '2004', y: 1605702392000},
        {label: `year: 2005
        value: 1689772453000`, x: '2005', y: 1689772453000},
        {label: `year: 2006
        value: 1789604332000`, x: '2006', y: 1789604332000},
        {label: `year: 2007
        value: 1839907042000`, x: '2007', y: 1839907042000},
        {label: `year: 2008
        value: 1800098070000`, x: '2008', y: 1800098070000},
        {label: `year: 2009
        value: 1704555537000`, x: '2009', y: 1704555537000},
        {label: `year: 2010
        value: 1807913249000`, x: '2010', y: 1807913249000},
        {label: `year: 2011
        value: 1885093563000`, x: '2011', y: 1885093563000},
        {label: `year: 2012
        value: 1958676540000`, x: '2012', y: 1958676540000},
        {label: `year: 2013
        value: 2008179295000`, x: '2013', y: 2008179295000},
        {label: `year: 2014
        value: 2084859568000`, x: '2014', y: 2084859568000},
        {label: `year: 2015
        value: 2159808669000`, x: '2015', y: 2159808669000},
        {label: `year: 2016
        value: 2160559261000`, x: '2016', y: 2160559261000}]
    };
    
    wrapper.setProps(givenProps);

    const result = wrapper.state();

    expect(result).toEqual(givenProps);

  });

  it('should derive local state from props using getDerivedStateFromProps, returing an empty state object when locationData prop is not present', () => {

    wrapper = shallow(<DevelopmentIndicatorStatistics />);
    
    wrapper.setProps(undefined);

    const result = wrapper.state();

    expect(result).toEqual({});

  });

	describe('mapStateToProps', () => {

    it('should return a props object with an location, dataBase, dataSet, and locationData property', () => {

      const mockState = {
        dataBase: mockDataBase,
        dataSet: mockDataSet,
        location: mockLocation,
        locationData: mockLocationData
      };

      const expected = mockState;

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);

    });
		
	});
	
});