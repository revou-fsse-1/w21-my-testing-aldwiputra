import { fireEvent, render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import Navbar from '../Navbar';
import { SessionProvider } from 'next-auth/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@/pages/testHelpers/createMockRouter';

test('render correctly', () => {
  const { getByText, getByLabelText } = render(
    <RouterContext.Provider value={createMockRouter({})}>
      <SessionProvider session={null}>
        <Navbar />
      </SessionProvider>
    </RouterContext.Provider>
  );
  expect(getByText('Search')).toBeDefined();
});
