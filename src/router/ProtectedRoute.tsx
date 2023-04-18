import { ComponentPropsWithoutRef } from 'react';
import { RequireAuth } from 'react-auth-kit';

type ProtectedRouteProps = Pick<ComponentPropsWithoutRef<typeof RequireAuth>, 'children'>;

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => (
  <RequireAuth loginPath={'/login'}>{children}</RequireAuth>
);
