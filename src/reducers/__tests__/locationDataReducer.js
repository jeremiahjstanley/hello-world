import { locationData } from '../locationDataReducer';
import * as actions from '../../actions';

describe('locationDataReducer', () => {

  it('should return the initial state', () => {

    const expected = [];

    const actual = locationData(undefined, []);

    expect(actual).toEqual(expected);

  });

  it('should return the state with a locationData array', () => {

    const expected = [{
        'name': "2016-12-31", 
        'Estimate': 1.3533138036728,
        'Number of Sources': 10,
        'Percentile Rank': 95.566505432129,
        'Standard Error': 0.13472333550453,
      }];

    const actual = locationData(undefined, actions.fetchLocationDataSuccess(expected));
    
    expect(actual).toEqual(expected); 

  });

});


