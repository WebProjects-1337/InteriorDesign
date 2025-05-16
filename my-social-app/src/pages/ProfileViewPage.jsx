import { useEffect, useState } from 'react';
import { getCurrentUser } from '../utils/auth';

function ProfileViewPage() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const u = getCurrentUser();
    if (u) {
      setUser(u);
      setEmail(u.email);
      setPassword(u.password || '');
    }
  }, []);

  const handleSave = () => {
    const updatedUser = { ...user, email, password };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditMode(false);
  };

  if (!user) return null;

  return (
    <div style={{ maxWidth: "1234px", margin: '0 auto', marginTop: 0, background: '#fff', borderRadius: 0, boxShadow: '0 2px 12px #e0e7ef', padding: '2rem 1.5rem', textAlign: 'center' }}>
      <img
        src={user.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.email || 'U')}`}
        alt="avatar"
        style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: 16, boxShadow: '0 1px 4px #cbd5e1' }}
      />
      <h2 style={{ margin: '0 0 1rem 0', color: '#2563eb' }}>{user.name || user.email}</h2>
      {editMode ? (
        <>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #cbd5e1', marginBottom: 12 }}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #cbd5e1', marginBottom: 16 }}
            placeholder="Пароль"
          />
          <div>
            <button onClick={handleSave} style={{ padding: '0.6rem 1.5rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 500, cursor: 'pointer', marginRight: 8 }}>Сохранить</button>
            <button onClick={() => setEditMode(false)} style={{ padding: '0.6rem 1.5rem', background: '#e0e7ef', color: '#2563eb', border: 'none', borderRadius: 8, fontWeight: 500, cursor: 'pointer' }}>Отмена</button>
          </div>
        </>
      ) : (
        <>
          <div style={{ color: '#475569', marginBottom: 12 }}>Email: {user.email}</div>
          <button
            style={{ padding: '0.6rem 1.5rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 500, cursor: 'pointer' }}
            onClick={() => setEditMode(true)}
            aria-label="Редактировать профиль"
          >Редактировать профиль</button>
        </>
      )}
    </div>
  );
}

export default ProfileViewPage;
