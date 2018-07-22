import { locationReducer } from '../locationReducer';
import * as actions from '../../actions';

describe('locationReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const actual = locationReducer(undefined, []);

    expect(actual).toEqual(expected)
  })
  it('should return the state with an intial location', () => {
    const initialLocation;

    const expected = initialLocation;

    const actual = locationReducer(undefined, actions.fetchInitialLocationSuccess(text, id))
    
    expect(actual).toEqual(expected) 
  })
  it('should toggle the completed property of a todo', () => {
    const text = 'learn redux';
    const id = 3;
    const intialState = [{text, id, completed: false}]
    const expected = [{text, id, completed: true}]

    const results = locationReducer(intialState, actions.toggleTodo(id))

    expect(results).toEqual(expected) 
  })
})