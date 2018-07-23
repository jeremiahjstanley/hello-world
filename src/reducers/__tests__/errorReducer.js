import { hasErrored } from '../errorReducer';
import * as actions from '../../actions';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = false;

    const actual = hasErrored(undefined, {});

    expect(actual).toEqual(expected);
  })
  it('should return the state with an error object', () => {
    const expected = true;

    const actual = hasErrored(undefined, actions.hasErrored(true));
    
    expect(actual).toEqual(expected); 
  })
})