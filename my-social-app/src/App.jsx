import './App.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { getCurrentUser } from './utils/auth';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import GalleryPage from './pages/GalleryPage';
import DesignerSearchPage from './pages/DesignerSearchPage';
import TipsPage from './pages/TipsPage';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';

function AppLayout() {
  const location = useLocation();
  const user = getCurrentUser();

  // Показывать Header, если пользователь авторизован
  const showHeader = user && !['/login', '/register'].includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/gallery"
          element={
            <PrivateRoute>
              <GalleryPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/search"
          element={
            <PrivateRoute>
              <DesignerSearchPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/tips"
          element={
            <PrivateRoute>
              <TipsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/designers"
          element={
            <PrivateRoute>
              <DesignerSearchPage />
            </PrivateRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;