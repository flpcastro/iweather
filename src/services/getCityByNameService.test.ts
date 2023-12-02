import { api } from "./api";
import { getCityByNameService } from '@services/getCityByNameService';
import { mockCityAPIResponse } from '@mocks/api/mockCityAPIResponse';

describe('Service: getCityByNameService', () => {
  it('should be return a city details', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse });
    const response = await getCityByNameService('São Paulo');
    expect(response.length).toBeGreaterThan(0);
  });
});