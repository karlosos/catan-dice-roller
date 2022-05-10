import { randomValueFromArray } from '../random'

describe('randomValueFromArray', () => {
  it('WHEN passed empty array THEN returns undefined', () => {
    // WHEN
    const result = randomValueFromArray([]);

    // THEN
    expect(result).toBe(undefined);
  })

  it('WHEN passed array with 1 element THEN returns this element', () => {
    // WHEN
    const result = randomValueFromArray([1337]);

    // THEN
    expect(result).toBe(1337);
  })

  it('WHEN passed array THEN returns value that is included in array', () => {
    // GIVEN
    const array = [...new Array(100)].map((_, idx) => idx)
    expect(array).toHaveLength(100);
    expect(array[0]).toBe(0);
    expect(array[array.length-1]).toBe(99);

    // WHEN
    const result = randomValueFromArray(array)

    // THEN
    expect(array.includes(result)).toBeTruthy();
  })
})