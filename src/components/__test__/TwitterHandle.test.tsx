import { fireEvent, render } from '@testing-library/react';
import { expect, test } from 'vitest';
import TwitterHandle from '../TwitterHandle';

test('auth button status', () => {
  const { getByText } = render(<TwitterHandle twitter={'aldwiputra'} middle={false} />);
  expect(getByText(/aldwiputra/i)).toBeDefined();
});
