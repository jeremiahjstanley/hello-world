import { countriesToCompare } from '../comparisonReducer';
import * as actions from '../../actions';

describe('comparisonReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const actual = countriesToCompare(undefined, []);

    expect(actual).toEqual(expected);
  })
  it('should return the state with an array of locations', () => {
    const state = [{
        name: 'Kenya',
        alpha_2: 'KE',
        alpha_3: 'KEN',
        country_code: '404',
        iso_3166_2: 'ISO 3166-2: KE',
        region: 'Africa',
        sub_region: 'Sub-Saharan Africa',
        intermediate_region: 'Eastern Africa',
        region_code: '002',
        sub_region_code: '202',
        intermediate_region_code: '014'
      }]
    const expected = {
        name: 'Belgium',
        alpha_2: 'BE',
        alpha_3: 'BEL',
        country_code: '056',
        iso_3166_2: 'ISO 3166-2: BE',
        region: 'Europe',
        sub_region: 'Western Europe',
        intermediate_region: '',
        region_code: '150',
        sub_region_code: '155',
        intermediate_region_code: ''
      }

    const actual = countriesToCompare(state, actions.addComparisonLocation(expected));
    
    expect(actual).toEqual([...state, expected]); 
  })
})