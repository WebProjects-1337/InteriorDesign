import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../utils/auth';

const defaultAvatar = "https://randomuser.me/api/portraits/lego/1.jpg";

function ProfilePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [originalEmail, setOriginalEmail] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [prevState, setPrevState] = useState({});

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      navigate('/login');
    } else {
      setEmail(user.email || '');
      setPassword(user.password || '');
      setUsername(user.username || '');
      setAvatar(user.avatar || defaultAvatar);
      setOriginalEmail(user.email || '');
    }
  }, [navigate]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedUser = { email, password, username, avatar };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setEditMode(false);
    alert('Профиль обновлён!');
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const handleEdit = () => {
    setPrevState({ email, password, username, avatar });
    setEditMode(true);
  };

  const handleCancel = () => {
    setEmail(prevState.email);
    setPassword(prevState.password);
    setUsername(prevState.username);
    setAvatar(prevState.avatar);
    setEditMode(false);
  };

  return (
    <div style={{ padding: "40px 24px", background: "#fff", color: "#222", boxShadow: "0 2px 12px #e0e0e0", width: "100%", maxWidth: "1234px", margin: "0 auto" }}>
      <h2 style={{ color: "#0984e3" }}>Профиль</h2>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <img src={avatar} alt="avatar" style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", border: "2px solid #eee" }} />
        {editMode && (
          <div>
            <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ marginTop: 12 }} />
          </div>
        )}
      </div>
      {editMode ? (
        <>
          <label>
            Имя пользователя:<br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4, marginBottom: 16, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </label>
          <label>
            Email:<br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4, marginBottom: 16, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </label>
          <label>
            Пароль:<br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4, marginBottom: 16, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={handleSave} style={{ padding: "8px 18px", background: "#0984e3", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600 }}>Сохранить</button>
            <button onClick={handleCancel} style={{ padding: "8px 18px", background: "#dfe6e9", color: "#222", border: "none", borderRadius: 4, fontWeight: 600 }}>Отмена</button>
          </div>
        </>
      ) : (
        <>
          <div style={{ marginBottom: 16 }}><b>Имя пользователя:</b><br />{username}</div>
          <div style={{ marginBottom: 16 }}><b>Email:</b><br />{email}</div>
          <div style={{ marginBottom: 16 }}><b>Пароль:</b><br />{'*'.repeat(password.length)}</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={handleEdit} style={{ padding: "8px 18px", background: "#0984e3", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600 }}>Редактировать профиль</button>
            <button onClick={handleLogout} style={{ padding: "8px 18px", background: "#dfe6e9", color: "#222", border: "none", borderRadius: 4, fontWeight: 600 }}>Выйти</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;