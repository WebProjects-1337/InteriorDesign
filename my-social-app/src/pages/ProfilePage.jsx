import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../utils/auth';

function ProfilePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [originalEmail, setOriginalEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      navigate('/login');
    } else {
      setEmail(user.email);
      setPassword(user.password);
      setOriginalEmail(user.email);
      setAvatarUrl(user.avatarUrl || '');
      setName(user.name || '');
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
        localStorage.setItem('user', JSON.stringify({ email, password, avatarUrl, name }));
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
    <div style={{ maxWidth: 400, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef', padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ color: '#2563eb', marginBottom: 24 }}>Профиль</h2>
      <img
        src={avatarUrl || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name || email || 'U')}
        alt="avatar"
        style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: 16, boxShadow: '0 1px 4px #cbd5e1' }}
      />
      <label style={{ color: '#222', fontWeight: 500 }}>
        Ссылка на аватарку:<br />
        <input
          type="text"
          value={avatarUrl}
          onChange={e => setAvatarUrl(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}
          placeholder="URL картинки"
        />
      </label><br /><br />
      <label style={{ color: '#222', fontWeight: 500 }}>
        Имя:<br />
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}
          placeholder="Ваше имя"
        />
      </label><br /><br />
      <label style={{ color: '#222', fontWeight: 500 }}>
        Email:<br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}
        />
      </label><br /><br />
      <label style={{ color: '#222', fontWeight: 500 }}>
        Пароль:<br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}
        />
      </label><br /><br />
      <button onClick={handleSave} style={{ padding: '0.6rem 1.5rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 500, cursor: 'pointer' }}>Сохранить</button>
      <button onClick={handleLogout} style={{ marginLeft: '1rem', padding: '0.6rem 1.5rem', background: '#e0e7ef', color: '#2563eb', border: 'none', borderRadius: 8, fontWeight: 500, cursor: 'pointer' }}>Выйти</button>
    </div>
  );
}

export default ProfilePage;