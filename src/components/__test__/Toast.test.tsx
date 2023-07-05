import { fireEvent, render } from '@testing-library/react';
import { expect, test } from 'vitest';
import Toast from '../Toast';

test('render correctly', () => {
  const { getByText } = render(<Toast>Failed baby</Toast>);
  expect(getByText(/failed baby/i)).toBeDefined();
});
