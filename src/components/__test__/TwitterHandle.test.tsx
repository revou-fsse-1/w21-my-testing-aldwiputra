import { fireEvent, render } from '@testing-library/react';
import { expect, test } from 'vitest';
import TwitterHandle from '../TwitterHandle';

test('render correctly', () => {
  const { getByText } = render(<TwitterHandle twitter={'aldwiputra'} middle={false} />);
  expect(getByText(/aldwiputra/i)).toBeDefined();
});
