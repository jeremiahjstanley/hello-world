import { dataBase } from '../dataBaseReducer';
import * as actions from '../../actions';

describe('dataBaseReducer', () => {

  it('should return the initial state', () => {

    const expected = {};

    const actual = dataBase(undefined, {});

    expect(actual).toEqual(expected);

  });

  it('should return the state with an dataBase object', () => {

    const expected = {name:'Worldwide Governance Indicators', database_code:'WWGI'};

    const actual = dataBase(undefined, actions.setDataBase(expected));
    
    expect(actual).toEqual(expected); 

  });

});