import React from "react";

function PostcardsPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#d97706', fontWeight: 700, fontSize: '2.2rem', marginBottom: '1.5rem' }}>Коллекция открыток</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#334155', marginBottom: '2rem' }}>
        Открытки — это не только способ поздравить близких, но и отражение эпохи, моды и искусства.
      </p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Открытки" style={{ width: 320, borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef' }} />
        <img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="Открытки" style={{ width: 320, borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef' }} />
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" alt="Открытки" style={{ width: 320, borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef' }} />
      </div>
      <div style={{ maxWidth: 700, margin: '2rem auto', color: '#475569', fontSize: '1.1rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #e0e7ef', padding: '1.5rem 2rem' }}>
        <h2 style={{ color: '#d97706', fontWeight: 600 }}>Интересные факты об открытках</h2>
        <ul>
          <li>Первые почтовые открытки появились в Австрии в 1869 году.</li>
          <li>Открытки могут быть художественными, фотографическими, поздравительными и рекламными.</li>
          <li>Коллекционирование открыток называется филокартией.</li>
        </ul>
      </div>
    </div>
  );
}
export default PostcardsPage;
