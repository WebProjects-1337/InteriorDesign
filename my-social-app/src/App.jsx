import './App.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { getCurrentUser } from './utils/auth';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import StampsPage from './pages/StampsPage';
import CoinsPage from './pages/CoinsPage';
import PostcardsPage from './pages/PostcardsPage';

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
          path="/stamps"
          element={
            <PrivateRoute>
              <StampsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/coins"
          element={
            <PrivateRoute>
              <CoinsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/postcards"
          element={
            <PrivateRoute>
              <PostcardsPage />
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