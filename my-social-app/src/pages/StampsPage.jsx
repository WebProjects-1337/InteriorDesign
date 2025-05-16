import React from "react";

function StampsPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2563eb', fontWeight: 700, fontSize: '2.2rem', marginBottom: '1.5rem' }}>Коллекция марок</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#334155', marginBottom: '2rem' }}>
        Почтовые марки — это не только увлекательное хобби, но и способ узнать историю, географию и культуру разных стран.
      </p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Марки" style={{ width: 320, borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef' }} />
        <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80" alt="Марки" style={{ width: 320, borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef' }} />
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Марки" style={{ width: 320, borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef' }} />
      </div>
      <div style={{ maxWidth: 700, margin: '2rem auto', color: '#475569', fontSize: '1.1rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef', padding: '1.5rem 2rem' }}>
        <h2 style={{ color: '#2563eb', fontWeight: 600 }}>Интересные факты о марках</h2>
        <ul>
          <li>Первая в мире почтовая марка — «Чёрный пенни» — была выпущена в Великобритании в 1840 году.</li>
          <li>Марки могут быть посвящены историческим событиям, известным личностям, животным, растениям и даже технологиям.</li>
          <li>Коллекционирование марок называется филателией.</li>
        </ul>
      </div>
    </div>
  );
}
export default StampsPage;
