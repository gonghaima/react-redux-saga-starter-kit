import { request } from '../modules/client';

describe('client', () => {
  const mockFetch = url => {
    return new Promise(resolve => {
      resolve({ text: () => 'api data', headers: { get: key => '' } });
    });
  };
  it('call fetch function, and return resolved data', async () => {
    const result = await request('validURL', mockFetch);

    expect(result).toBe('api data');
  });
});
