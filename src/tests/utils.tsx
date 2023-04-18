/* eslint-disable import/export */
import { ReactElement } from 'react';

import { render, type RenderOptions } from '@testing-library/react';
import { AuthProvider } from 'react-auth-kit';
import { MemoryRouter } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

export const queryCache = new QueryCache();

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 0,
    },
  },
});

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider authType='localstorage' authName='_auth'>
            {children}
          </AuthProvider>
        </QueryClientProvider>
      </MemoryRouter>
    ),
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
