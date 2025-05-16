import React from "react";

function CoinsPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#059669', fontWeight: 700, fontSize: '2.2rem', marginBottom: '1.5rem' }}>Коллекция монет</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#334155', marginBottom: '2rem' }}>
        Монеты — это не только средство платежа, но и отражение истории, культуры и искусства разных эпох.
      </p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Монеты" style={{ width: 320, borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef' }} />
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Монеты" style={{ width: 320, borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef' }} />
        <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80" alt="Монеты" style={{ width: 320, borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef' }} />
      </div>
      <div style={{ maxWidth: 700, margin: '2rem auto', color: '#475569', fontSize: '1.1rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef', padding: '1.5rem 2rem' }}>
        <h2 style={{ color: '#059669', fontWeight: 600 }}>Интересные факты о монетах</h2>
        <ul>
          <li>Первые монеты появились в VII веке до н.э. в Лидии (Малая Азия).</li>
          <li>Монеты чеканились из золота, серебра, меди и других металлов.</li>
          <li>Коллекционирование монет называется нумизматикой.</li>
        </ul>
      </div>
    </div>
  );
}
export default CoinsPage;
