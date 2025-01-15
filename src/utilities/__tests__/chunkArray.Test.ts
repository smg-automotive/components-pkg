import { chunkArray } from '../chunkArray';

describe('The chunkArray utility', () => {
  it('chunks the given array', () => {
    const chunked = chunkArray({
      array: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      chunkSize: 3,
    });
    const [chunkOne, chunkTwo, chunkThree] = chunked;

    expect(chunkOne).toEqual(['A', 'B', 'C']);
    expect(chunkTwo).toEqual(['D', 'E', 'F']);
    expect(chunkThree).toEqual(['G']);
  });
});
