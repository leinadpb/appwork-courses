import { add } from '../src/simple';

test('Adding 0 and 0 should equal 0', () => {
  expect(add(0, 0)).toEqual(0);
});

test('Adding 0 and 1 should equal 1', () => {
  expect(add(0, 1)).toEqual(1);
});

test('Adding 1 and 1 should equal 2', () => {
  expect(add(1, 1)).toEqual(2);
});

test('Adding 1000 and 1000 should equal 2000', () => {
  expect(add(1000, 1000)).toEqual(2000);
});