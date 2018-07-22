import * as actions from '../index';

describe('Actions', () => {

  describe('fetchInitialLocationSuccess', () => {
    it('Should create an initial Location object', () => {
      let expected = {
                      type: 'FETCH_INITIAL_LOCATION_SUCCESS',
                      initialLocation: {name: 'Canada'}
                    };

      let actual = actions.fetchInitialLocationSuccess({name: 'Canada'});

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