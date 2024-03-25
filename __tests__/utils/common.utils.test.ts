import { useLocalSearchParams } from 'expo-router';

import { generateId, useSafeId } from '../../utils/common.utils';

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn(),
}));

describe('useSafeId', () => {
  it('should return the first item of string array', () => {
    (useLocalSearchParams as jest.Mock).mockReturnValue({ id: ['123'] });
    expect(useSafeId()).toBe('123');
  });

  it('should return the string', () => {
    (useLocalSearchParams as jest.Mock).mockReturnValue({ id: '123' });
    expect(useSafeId()).toBe('123');
  });
});

describe('generateId', () => {
  it('should generate a random string with length 16 by default', () => {
    const result = generateId(16);
    expect(result).toHaveLength(16);
  });

  it('should generate a random string with given length', () => {
    const result = generateId(8);
    expect(result).toHaveLength(8);
  });

  it('should not generate the same string twice', () => {
    const ids = Array.from({ length: 10 }).map(() => generateId());
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(10);
  });
});
