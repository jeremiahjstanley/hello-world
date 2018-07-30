import { fetchGovernanceIndicators } from '../fetchGovernanceIndicators';
import { fetchLocationDataSuccess } from '../../actions'
import { countries } from '../../helper/countryMetrics';
import { dataCleaner } from '../../helper/dataCleaner'
import { fetchEstimates } from '../fetchEstimates';
import { fetchNumberOfSources } from '../fetchNumberOfSources'; 
import { fetchPercentileRank } from '../fetchPercentileRank';
import { fetchStandardError } from '../fetchStandardError';

jest.mock('../fetchEstimates');
jest.mock('../fetchNumberOfSources');
jest.mock('../fetchPercentileRank');
jest.mock('../fetchStandardError');
jest.mock('../../helper/dataCleaner');

describe('fetchGovernanceIndicators', () => {
  
  let mockDispatch;
  let mockLocation;
  let mockDataSet;
  let mockDataBase;
  let isoAlpha3;

  beforeEach(() => {

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

    mockDataSet = 'RQ';

    mockDataBase = 'WWGI';

    isoAlpha3 = 'BFA'

    mockDispatch = jest.fn();

  });

  it('should dispatch fetchEstimates with the correct arguments', async () => {

    const thunk = fetchGovernanceIndicators(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchEstimates(isoAlpha3, mockDataSet, mockDataBase));

  });

  it('should dispatch fetchNumberOfSources with the correct arguments', async () => {

    const thunk = fetchGovernanceIndicators(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchNumberOfSources(isoAlpha3, mockDataSet, mockDataBase));

  });

  it('should dispatch fetchPercentileRank with the correct arguments', async () => {

    const thunk = fetchGovernanceIndicators(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchPercentileRank(isoAlpha3, mockDataSet, mockDataBase));

  });

  it('should dispatch fetchStandardError with the correct arguments', async () => {

    const thunk = fetchGovernanceIndicators(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchPercentileRank(isoAlpha3, mockDataSet, mockDataBase));

  });

  it('should call dataCleaner function', async () => {

    const thunk = fetchGovernanceIndicators(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(dataCleaner).toHaveBeenCalled();

  });

  it('should dispatch fetchLocationDataSuccess with the correct arguments', async () => {

    const thunk = fetchGovernanceIndicators(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    const args = [{
      cleanEstimates: [], 
      cleanNumberOfSources: [],
      cleanPercentileRank: [],
      cleanStandardError: []
    }];

    expect(mockDispatch).toHaveBeenCalledWith(fetchLocationDataSuccess(args));

  });

})