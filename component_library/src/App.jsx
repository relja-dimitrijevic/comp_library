import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/showcase/Sidebar';
import MobileMenu from './components/showcase/MobileMenu';
import './App.css';

// Route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const Library = lazy(() => import('./pages/Library'));
const ComponentDetail = lazy(() => import('./pages/ComponentDetail'));

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Route change detection (no zoom manipulation)
  useEffect(() => {
    // Any route-specific logic can go here if needed
  }, [location.pathname]);

  return (
    <div className="app-container">
      <MobileMenu onToggle={() => setSidebarOpen(!sidebarOpen)} isOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="main-content">
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-primary)' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Navigate to="/library" replace />} />
            <Route path="/library" element={<Library />} />
            <Route path="/components/:name/:variant" element={<ComponentDetail />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
