import { fireEvent, render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { SessionProvider } from 'next-auth/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@/testHelpers/createMockRouter';
import Home from '@/pages';

test('correctly render according to the defined data', () => {
  const { getByText, getByLabelText } = render(
    <RouterContext.Provider value={createMockRouter({})}>
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
  expect(getByText('Aldi Putra')).toBeDefined();
});
