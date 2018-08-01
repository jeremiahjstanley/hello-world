import * as actions from '../index';

describe('Actions', () => {

  let mockLocation;
  let mockDataBase;
  let mockDataSet;
  let mockLocationData;

  beforeEach(() => {

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

    mockDataBase = {
      name:'Worldwide Development Indicators',
      database_code:'WWDI'
    };

    mockDataSet = {
      name:'Refugee population by country or territory of asylum',
      dataset_code:'SM_POP_REFG'
    };

    mockLocationData = [
      {x: "1990", y: 350, label: "year: 1990, value: 350"},
      {x: "1991", y: 320, label: "year: 1991, value: 320"},
      {x: "1992", y: 5670, label: "year: 1992,  value: 5670"},
      {x: "1993", y: 6604, label: "year: 1993,  value: 6604"},
      {x: "1994", y: 49990, label: "year: 1994, value: 49990"},
      {x: "1995", y: 29777, label: "year: 1995, value: 29777"},
      {x: "1996", y: 28381, label: "year: 1996, value: 28381"},
      {x: "1997", y: 1801, label: "year: 1997,  value: 1801"},
      {x: "1998", y: 564, label: "year: 1998, value: 564"},
      {x: "1999", y: 675, label: "year: 1999, value: 675"},
      {x: "2000", y: 696, label: "year: 2000, value: 696"},
      {x: "2001", y: 457, label: "year: 2001, value: 457"},
      {x: "2002", y: 457, label: "year: 2002, value: 457"},
      {x: "2003", y: 466, label: "year: 2003, value: 466"},
      {x: "2004", y: 492, label: "year: 2004, value: 492"},
      {x: "2005", y: 511, label: "year: 2005, value: 511"},
      {x: "2006", y: 511, label: "year: 2006, value: 511"},
      {x: "2007", y: 535, label: "year: 2007, value: 535"},
      {x: "2008", y: 557, label: "year: 2008, value: 557"},
      {x: "2009", y: 543, label: "year: 2009, value: 543"},
      {x: "2010", y: 531, label: "year: 2010, value: 531"},
      {x: "2011", y: 546, label: "year: 2011, value: 546"},
      {x: "2012", y: 39306, label: "year: 2012, value: 39306"},
      {x: "2013", y: 29234, label: "year: 2013, value: 29234"},
      {x: "2014", y: 31894, label: "year: 2014, value: 31894"},
      {x: "2015", y: 34017, label: "year: 2015, value: 34017"},
      {x: "2016", y: 32546, label: "year: 2016, value: 32546"}
    ]


  });

  describe('setLocation', () => {

    it('should create a location array', () => {

      let expected = {
                      type: 'SET_LOCATION',
                      location: mockLocation
                    };
      let actual = actions.setLocation(mockLocation);

      expect(expected).toEqual(actual);

    });

  });

  describe('setDataBase', () => {

    it('should create a database object', () => {
      let expected = {
                      type: 'SET_DATABASE',
                      dataBase: mockDataBase
                    };
      let actual = actions.setDataBase(mockDataBase);

      expect(expected).toEqual(actual);

    });

  });

  describe('clearDataSet', () => {

    it('should create a clear dataset object', () => {

      let expected = {
                      type: 'CLEAR_DATASET',
                    };

      let actual = actions.clearDataSet(mockDataSet);

      expect(expected).toEqual(actual);

    });

  });

  describe('setDataSet', () => {

    it('should create a set dataset object', () => {

      let expected = {
                      type: 'SET_DATASET',
                      dataSet: mockDataSet
                    };
      let actual = actions.setDataSet(mockDataSet);

      expect(expected).toEqual(actual);

    });

  });

  describe('fetchLocationDataSuccess', () => {

    it('Should create a location data object', () => {
      
      let expected = {
                      type: 'FETCH_LOCATION_DATA_SUCCESS',
                      locationData: mockLocationData
                    };

      let actual = actions.fetchLocationDataSuccess(mockLocationData);

      expect(expected).toEqual(actual);

    });

  });

  describe('hasErrored', () => {

    it('should create an error object', () => {
      let expected = {
                      type: 'HAS_ERRORED',
                      hasErrored: true
                    };
      let actual = actions.hasErrored(true);

      expect(expected).toEqual(actual);
      
    });

  });

  describe('madeSearch', () => {

    it('should create an madeSearch object', () => {
      let expected = {
                      type: 'MADE_SEARCH',
                      madeSearch: true
                    };
      let actual = actions.madeSearch(true);

      expect(expected).toEqual(actual);
      
    });

  });

});