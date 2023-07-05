import { NextRouter } from 'next/router';
import { vi } from 'vitest';

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    asPath: '/',
    back: vi.fn(),
    basePath: '/',
    beforePopState: vi.fn(),
    isFallback: false,
    forward: vi.fn(),
    prefetch: vi.fn(),
    push: vi.fn(),
    isLocaleDomain: false,
    isPreview: false,
    isReady: false,
    pathname: '/',
    query: {},
    route: '/',
    replace: vi.fn(),
    reload: vi.fn(),
    domainLocales: [],
    locale: 'en',
    locales: [],
    defaultLocale: 'en',
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
  };
}
