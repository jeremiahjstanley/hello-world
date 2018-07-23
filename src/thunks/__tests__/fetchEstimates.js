import { fetchEstimates } from '../fetchEstimates';
import { hasErrored } from '../../actions'

describe('fetchEstimates', () => {
  let mockISO;
  let mockDataBase;
  let mockDataSet;
  let mockDispatch;

  beforeEach(() => {
    mockISO = 'FRA';
    mockDataBase = 'WWGI';
    mockDataSet = 'RL';
    mockDispatch = jest.fn();
  });

  it('should dispatch hasErrored(true) if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));

    const thunk = fetchEstimates(mockISO, mockDataSet, mockDataBase);

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true));
  });
  it('should return a JSON object if the fetch is successful', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        dataset: {data: []}
      })
    }));

    const thunk = fetchEstimates(mockISO, mockDataBase, mockDataBase)

    const expected = await thunk(mockDispatch);

    expect(expected).toEqual({dataset: {data: []}})
  });
});
