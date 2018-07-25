import { fetchLocation } from '../fetchLocation';
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

describe('fetchLocation', () => {
  let mockDispatch;
  let mockLocation;
  let mockDataSet;
  let mockDataBase;
  let isoAlpha3;

  beforeEach(() => {
    mockLocation = ['France'];
    mockDataSet = 'RQ';
    mockDataBase = 'WWGI';
    isoAlpha3 = 'FRA'
    mockDispatch = jest.fn();
  });

  it('should dispatch fetchEstimates with the correct arguments', async () => {
    const thunk = fetchLocation(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchEstimates(isoAlpha3, mockDataSet, mockDataBase))
  });

  it('should dispatch fetchNumberOfSources with the correct arguments', async () => {
    const thunk = fetchLocation(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchNumberOfSources(isoAlpha3, mockDataSet, mockDataBase))
  });

  it('should dispatch fetchPercentileRank with the correct arguments', async () => {
    const thunk = fetchLocation(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchPercentileRank(isoAlpha3, mockDataSet, mockDataBase))
  });

  it('should dispatch fetchStandardError with the correct arguments', async () => {
    const thunk = fetchLocation(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchPercentileRank(isoAlpha3, mockDataSet, mockDataBase))
  });

  it('should call dataCleaner with the correct arguments', async () => {
    const thunk = fetchLocation(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(dataCleaner).toHaveBeenCalled();
  });

  it('should dispatch fetchLocationSuccess with the correct arguments', async () => {
    const thunk = fetchLocation(mockLocation, mockDataSet, mockDataBase);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchLocationDataSuccess([]));
  });
})