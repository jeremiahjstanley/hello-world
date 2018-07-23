import { location } from '../locationReducer';
import * as actions from '../../actions';

describe('locationReducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const actual = location(undefined, {});

    expect(actual).toEqual(expected);
  })
  it('should return the state with a location object', () => {
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

    const actual = location(undefined, actions.setLocation(expected));
    
    expect(actual).toEqual(expected); 
  })
})


