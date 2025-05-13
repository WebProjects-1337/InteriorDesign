import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../utils/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = loginUser(email, password);

    if (result.success) {
      navigate('/profile');
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          maxLength={100}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Пароль"
          required
          value={password}
          maxLength={100}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Войти</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </p>
    </div>
  );
}

export default LoginPage;