import { ByRoleOptions, fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { SessionProvider } from 'next-auth/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@/testHelpers/createMockRouter';
import Home from '@/pages';

describe('Homepage', () => {
  const router = createMockRouter({});
  const { getByText, getByTestId, getByLabelText } = render(
    <RouterContext.Provider value={router}>
      <SessionProvider session={null}>
        <Home
          data={[
            {
              id: 'asdfj-asjdf-qewrr-kmguL',
              firstName: 'Aldi',
              lastName: 'Putra',
              bio: 'woyo woyo',
              imgUrl: 'https://',
              occupation: 'Software Engineer',
              twitter: 'aldwiputra',
            },
          ]}
        />
      </SessionProvider>
    </RouterContext.Provider>
  );

  test('correctly render according to the defined data', () => {
    expect(getByText('Aldi Putra')).toBeDefined();
  });

  test('render with data length > 0', () => {
    expect(getByText('Create new contact')).toBeDefined();
  });

  test('search form', () => {
    fireEvent.change(getByLabelText('Search'), {
      target: {
        value: 'aldi',
      },
    });
    fireEvent.submit(getByTestId('search-form'));

    expect(router.push).toBeCalledWith('/?search=aldi');
  });
});
