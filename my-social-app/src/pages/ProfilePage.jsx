import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../utils/auth';

function ProfilePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [originalEmail, setOriginalEmail] = useState('');

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      navigate('/login');
    } else {
      setEmail(user.email);
      setPassword(user.password);
      setOriginalEmail(user.email);
    }
  }, [navigate]);

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        localStorage.setItem('currentUser', JSON.stringify({ email, password }));
        alert('Профиль обновлён!');
      } else {
        alert('Ошибка при обновлении профиля');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Сервер не отвечает');
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div>
      <h2>Профиль</h2>
      <label>
        Email:<br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label><br /><br />
      <label>
        Пароль:<br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label><br /><br />
      <button onClick={handleSave}>Сохранить</button>
      <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>Выйти</button>
    </div>
  );
}

export default ProfilePage;