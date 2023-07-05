import { fireEvent, render } from '@testing-library/react';
import { expect, test } from 'vitest';
import ContactCard from '../ContactCard';

test('auth button status', () => {
  const { getByText } = render(
    <ContactCard
      data={{
        id: 1,
        firstName: 'Aldiansyah',
        lastName: 'Putra',
        occupation: 'Software Engineer',
        twitter: 'aldwiputra',
        bio: 'woyo woyo',
        imgUrl: 'https://image.url',
      }}
    />
  );

  expect(getByText('Aldiansyah Putra')).toBeDefined();
  expect(getByText('aldwiputra')).toBeDefined();
  expect(getByText('Software Engineer')).toBeDefined();
});
