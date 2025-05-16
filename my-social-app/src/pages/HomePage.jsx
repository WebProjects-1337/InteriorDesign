import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2d3a4b', fontWeight: 700, fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: 1 }}>Добро пожаловать на сайт коллекционеров!</h1>
      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', maxWidth: 700, margin: '0 auto', color: '#3b4252', lineHeight: 1.6 }}>
          Здесь вы можете создавать, просматривать и делиться своими коллекциями предметов: марок, монет, открыток, фигурок и многого другого. <br/>
          Присоединяйтесь к сообществу единомышленников, находите редкие экземпляры и расширяйте свою коллекцию!
        </p>
      </section>
      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#1e293b', fontWeight: 600, fontSize: '2rem', marginBottom: '1rem' }}>Почему выбирают нас?</h2>
        <ul style={{ fontSize: '1.1rem', maxWidth: 600, margin: '0 auto', color: '#475569', textAlign: 'left', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef', padding: '1.5rem 2rem' }}>
          <li style={{ marginBottom: 8 }}>Удобный интерфейс для ведения коллекций</li>
          <li style={{ marginBottom: 8 }}>Возможность делиться коллекциями с друзьями</li>
          <li style={{ marginBottom: 8 }}>Поиск и обмен редкими предметами</li>
          <li>Безопасное хранение информации</li>
        </ul>
      </section>
      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#1e293b', fontWeight: 600, fontSize: '2рем', marginBottom: '1.5rem' }}>Примеры коллекций</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/stamps" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 16, width: 260, boxShadow: '0 2px 12px #e0e7ef', transition: 'transform 0.2s', textAlign: 'center', cursor: 'pointer' }}>
              <h3 style={{ marginTop: 0, color: '#2563eb', fontWeight: 600 }}>Марки</h3>
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Марки" style={{ width: '100%', borderRadius: 8, marginBottom: 12, boxShadow: '0 2px 8px #cbd5e1', objectFit: 'cover', height: 140 }} />
              <p style={{ fontSize: '1rem', color: '#334155' }}>Редкие и современные почтовые марки со всего мира.</p>
            </div>
          </Link>
          <Link to="/coins" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 16, width: 260, boxShadow: '0 2px 12px #e0e7ef', transition: 'transform 0.2s', textAlign: 'center', cursor: 'pointer' }}>
              <h3 style={{ marginTop: 0, color: '#059669', fontWeight: 600 }}>Монеты</h3>
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Монеты" style={{ width: '100%', borderRadius: 8, marginBottom: 12, boxShadow: '0 2px 8px #cbd5e1', objectFit: 'cover', height: 140 }} />
              <p style={{ fontSize: '1rem', color: '#334155' }}>Исторические и современные монеты разных стран.</p>
            </div>
          </Link>
          <Link to="/postcards" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 16, width: 260, boxShadow: '0 2px 12px #e0e7ef', transition: 'transform 0.2s', textAlign: 'center', cursor: 'pointer' }}>
              <h3 style={{ marginTop: 0, color: '#d97706', fontWeight: 600 }}>Открытки</h3>
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Открытки" style={{ width: '100%', borderRadius: 8, marginBottom: 12, boxShadow: '0 2px 8px #cbd5e1', objectFit: 'cover', height: 140 }} />
              <p style={{ fontSize: '1rem', color: '#334155' }}>Винтажные и современные открытки на любой вкус.</p>
            </div>
          </Link>
        </div>
      </section>
      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#1e293b', fontWeight: 600, fontSize: '2rem', marginBottom: '1рем' }}>Отзывы пользователей</h2>
        <blockquote style={{ fontStyle: 'italic', color: '#555', maxWidth: 600, margin: '0.5rem auto', background: '#f1f5f9', borderRadius: 8, padding: '1rem 1.5rem', boxShadow: '0 1px 4px #e0e7ef' }}>
          "Отличный сайт для коллекционеров! Нашёл здесь много интересных предметов и новых друзей." — Алексей
        </blockquote>
        <blockquote style={{ fontStyle: 'italic', color: '#555', maxWidth: 600, margin: '0.5rem auto', background: '#f1f5f9', borderRadius: 8, padding: '1rem 1.5rem', boxShadow: '0 1px 4px #e0e7ef' }}>
          "Очень удобно вести свою коллекцию и обмениваться с другими!" — Мария
        </blockquote>
      </section>
      <section style={{ textAlign: 'center', marginTop: '3рем' }}>
        <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '2.2rem', marginBottom: '0.5рем' }}>Присоединяйтесь к нашему сообществу!</h2>
        <p style={{ fontSize: '1.15rem', color: '#334155' }}>Создайте аккаунт и начните делиться своими коллекциями уже сегодня.</p>
      </section>
    </div>
  );
}
export default HomePage;