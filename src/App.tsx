import { CountryCodesProvider } from 'context/CountryCodesProvider';
import { Dashboard } from 'pages/Dashboard/Dashboard';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { AuthProvider } from 'react-auth-kit';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from 'router/ProtectedRoute';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider
        authType={'cookie'}
        authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={true}
      >
        <BrowserRouter>
          <CountryCodesProvider>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route
                element={
                  <ProtectedRoute>
                    <Outlet />
                  </ProtectedRoute>
                }
              >
                <Route path={'/dashboard'} element={<Dashboard />} />
              </Route>
              <Route path='*' element={<Navigate to={'/dashboard'} replace />} />
            </Routes>
          </CountryCodesProvider>
        </BrowserRouter>
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  );
};
