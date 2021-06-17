import { roll } from '../index';

test('First Roll', () => {
  expect(roll(10)).not.toBeGreaterThan(10);
});
