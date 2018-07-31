import { madeSearch } from '../madeSearchReducer';
import * as actions from '../../actions';

describe('madeSearchReducer', () => {

  it('should return the initial state', () => {

    const expected = false;

    const actual = madeSearch(undefined, {});

    expect(actual).toEqual(expected);
    
  });

  it('should return the state with an error object', () => {
    
    const expected = true;

    const actual = madeSearch(undefined, actions.madeSearch(true));
    
    expect(actual).toEqual(expected); 

  });

});