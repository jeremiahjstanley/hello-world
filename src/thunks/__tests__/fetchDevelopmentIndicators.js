import { fetchDevelopmentIndicators } from '../fetchDevelopmentIndicators';
import { hasErrored, fetchLocationDataSuccess } from '../../actions'
import { dataCleaner } from '../../helper/dataCleaner';

jest.mock('../../helper/dataCleaner');

describe('fetchDevelopmentIndicators', () => {
  let mockLocation;
  let mockDataBase;
  let mockDataSet;
  let mockDispatch;

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        dataset: {data: []}
      })
      
    }));

    mockLocation = [{
      name:'Burkina Faso',
      alpha_2:'BF',
      alpha_3:'BFA',
      country_code:'854',
      iso_3166_2:'ISO 3166-2: BF',
      region:'Africa',
      sub_region:'Sub-Saharan Africa',
      intermediate_region:'Western Africa',
      region_code:'002',sub_region_code:'202',
      intermediate_region_code:'011'
    }];

    mockDataBase = 'WWGI';

    mockDataSet = 'RL';

    mockDispatch = jest.fn();

  });

  it('should dispatch hasErrored(true) if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));

    const thunk = fetchDevelopmentIndicators(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true));
  });

  it('should call the dataCleaner function if the fetch is successful', async() => {

    const thunk = fetchDevelopmentIndicators(mockLocation, mockDataBase, mockDataBase)

    const expected = await thunk(mockDispatch);

    expect(dataCleaner).toHaveBeenCalledTimes(2)
  });

  it('should dispatch fetchLocationDataSuccess with the correct arguments', async () => {
    const thunk = fetchDevelopmentIndicators(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchLocationDataSuccess([[]]));
  });

})

