import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../utils/auth';
import './Header.css';

function Header() {
  const [user, setUser] = useState(getCurrentUser());
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUser(getCurrentUser());
  }, [location.pathname]);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    navigate('/register');
  };

  return (
    <header>
      <nav>
        {user ? (
          <>
            <Link to="/" style={{ marginRight: '16px' }}>Главная</Link>
            <Link to="/profile" style={{ marginRight: '16px' }}>Профиль</Link>
            <button onClick={handleLogout}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: '16px' }}>Вход</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;