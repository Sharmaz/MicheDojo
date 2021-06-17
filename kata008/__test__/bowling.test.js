import { game, roll, score } from '../bowling';

describe('Init functions', () => {
  test('Game function exist', () => {
    expect(typeof(game)).toBe('function');
  });
  test('Roll nocked pins less than 10', () => {
    expect(roll(10)).not.toBeGreaterThan(10);
  });
  test('Score de un frame (2 rolls)', () => {
    expect(score()).not.toBeGreaterThan(10);
  });
});


