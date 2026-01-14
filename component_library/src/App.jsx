import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/showcase/Sidebar';
import MobileMenu from './components/showcase/MobileMenu';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ComponentDetail from './pages/ComponentDetail';
import './App.css';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/components/:name/:variant" element={<ComponentDetail />} />
        </Routes>
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
