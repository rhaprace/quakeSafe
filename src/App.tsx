import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Header from './components/Header';
import Footer from './components/Footer';
import OfflineIndicator from './components/OfflineIndicator';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import PWAUpdatePrompt from './components/PWAUpdatePrompt';

const Home = lazy(() => import('./pages/Home'));
const Tracker = lazy(() => import('./pages/Tracker'));
const Guides = lazy(() => import('./pages/Guides'));
const Resources = lazy(() => import('./pages/Resources'));
const News = lazy(() => import('./pages/News'));
const About = lazy(() => import('./pages/About'));
const EmergencyFinder = lazy(() => import('./pages/EmergencyFinder'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Offline = lazy(() => import('./pages/Offline'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 3,
    },
  },
});
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideFooter = location.pathname === '/emergency-finder';

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tracker" element={<Tracker />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/news" element={<News />} />
              <Route path="/emergency-finder" element={<EmergencyFinder />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/offline" element={<Offline />} />
            </Routes>
          </Suspense>
        </Layout>
        <OfflineIndicator />
        <PWAInstallPrompt />
        <PWAUpdatePrompt />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
