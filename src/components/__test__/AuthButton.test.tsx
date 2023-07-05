import { fireEvent, render } from '@testing-library/react';
import { expect, test } from 'vitest';
import Button from '../AuthButton';

test('auth button status', () => {
  const { getByText } = render(<Button status={'authenticated'} />);
  expect(getByText('Sign Out')).toBeDefined();

  const { getByText: getByText2 } = render(<Button status={'unauthenticated'} />);
  expect(getByText2('Login')).toBeDefined();

  const { getByText: getByText3 } = render(<Button status={'loading'} />);
  expect(getByText3('Loading...')).toBeDefined();
});
