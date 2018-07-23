import * as actions from '../index';

describe('Actions', () => {

  describe('fetchLocationDataSuccess', () => {
    it('Should create an initial Location object', () => {
      let expected = {
                      type: 'FETCH_LOCATION_DATA_SUCCESS',
                      locationData: {name: 'Canada'}
                    };

      let actual = actions.fetchLocationDataSuccess({name: 'Canada'});

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

});