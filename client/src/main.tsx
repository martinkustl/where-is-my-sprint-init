import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import './i18n';
import './lib/zod/zodConfig';
import QueryProvider from './lib/tanstack-query/QueryProvider';
import MainLayout from './components/layouts/main-layout/MainLayout';
import AppVersionsPage from './routes/app-versions/AppVersionsPage';
import LayoutWithBackButton from './components/layouts/layout-with-back-button/LayoutWithBackButton';
import SimpleLoading from '@/components/SimpleLoading';

const AppVersionNewPage = lazy(
  () =>
    import(
      './routes/app-versions/app-version/app-version-new/AppVersionNewPage'
    ),
);
const AppVersionEditPage = lazy(
  () =>
    import(
      './routes/app-versions/app-version/app-version-edit/AppVersionEditPage'
    ),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<AppVersionsPage />} />
            <Route element={<LayoutWithBackButton />}>
              <Route
                path="app-versions/new"
                element={
                  <Suspense fallback={<SimpleLoading />}>
                    <AppVersionNewPage />
                  </Suspense>
                }
              />
              <Route
                path="app-versions/:appVersionId/edit"
                element={
                  <Suspense fallback={<SimpleLoading />}>
                    <AppVersionEditPage />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Routes>
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>,
);
