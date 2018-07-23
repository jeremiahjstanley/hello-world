import { initialLocation } from '../locationReducer';
import * as actions from '../../actions';

describe('locationReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const actual = initialLocation(undefined, {});

    expect(actual).toEqual(expected);
  })
  it('should return the state with an intial location', () => {
    const expected = 'Canada'

    const actual = initialLocation(undefined, actions.fetchInitialLocationSuccess('Canada'));
    
    expect(actual).toEqual(expected); 
  })
})