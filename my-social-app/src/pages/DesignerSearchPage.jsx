import React, { useState } from "react";

const designers = [
  { name: "Анна Иванова", city: "Москва", experience: 7, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Игорь Смирнов", city: "Санкт-Петербург", experience: 5, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Мария Кузнецова", city: "Казань", experience: 9, avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
];

function DesignerSearchPage() {
  const [query, setQuery] = useState("");

  const filtered = designers.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "40px 24px", background: "#fff", color: "#222", borderRadius: 16, boxShadow: "0 2px 12px #e0e0e0", maxWidth: 900, margin: "40px auto 0 auto" }}>
      <h1 style={{ color: "#0984e3" }}>Поиск дизайнера</h1>
      <p>Введите имя или город, чтобы найти дизайнера интерьера.</p>
      <input
        type="text"
        placeholder="Поиск по имени или городу..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: 8, width: 300, margin: "16px 0", borderRadius: 4, border: "1px solid #ccc" }}
      />
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 16 }}>
        {filtered.length === 0 && <div>Дизайнеры не найдены.</div>}
        {filtered.map((d, idx) => (
          <div key={idx} style={{ width: 260, border: "1px solid #eee", borderRadius: 8, padding: 16, background: "#fafbfc" }}>
            <img src={d.avatar} alt={d.name} style={{ width: 64, height: 64, borderRadius: "50%", marginBottom: 12 }} />
            <h3 style={{ margin: 0 }}>{d.name}</h3>
            <div style={{ color: "#636e72", fontSize: 15 }}>{d.city}</div>
            <div style={{ fontSize: 14, marginTop: 8 }}>Опыт: {d.experience} лет</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignerSearchPage;
