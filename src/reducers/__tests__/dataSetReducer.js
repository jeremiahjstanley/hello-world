import { dataSet } from '../dataSetReducer';
import * as actions from '../../actions';

describe('dataSetReducer', () => {

  it('should return the initial state', () => {
    
    const expected = {};

    const actual = dataSet(undefined, {});

    expect(actual).toEqual(expected);

  });

  it('should return the state with an dataSet object', () => {

    const expected = {name:'Voice and Accountability', dataset_code: 'VA'};

    const actual = dataSet(undefined, actions.setDataSet(expected));
    
    expect(actual).toEqual(expected); 

  });

  it('should return the state with an empty dataSet object', () => {

    const expected = {};

    const actual = dataSet(undefined, actions.clearDataSet(expected));
    
    expect(actual).toEqual(expected); 

  });
  
});