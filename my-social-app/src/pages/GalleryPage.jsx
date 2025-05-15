import React from "react";

function GalleryPage() {
  return (
    <div style={{ padding: "40px 24px", background: "#fff", color: "#222", borderRadius: 16, boxShadow: "0 2px 12px #e0e0e0", maxWidth: 900, margin: "40px auto 0 auto" }}>
      <h1 style={{ color: "#0984e3" }}>Галерея проектов</h1>
      <p>Здесь вы найдете лучшие работы дизайнеров интерьера. Вдохновляйтесь современными решениями и находите идеи для своего дома!</p>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginTop: 32, justifyContent: "center" }}>
        <div style={{ width: 300, border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Современная гостиная" style={{ width: "100%", height: 180, objectFit: "cover" }} />
          <div style={{ padding: 16 }}>
            <h3>Современная гостиная</h3>
            <p>Лёгкий скандинавский стиль, светлые тона, уют и функциональность.</p>
          </div>
        </div>
        <div style={{ width: 300, border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" alt="Минималистичная кухня" style={{ width: "100%", height: 180, objectFit: "cover" }} />
          <div style={{ padding: 16 }}>
            <h3>Минималистичная кухня</h3>
            <p>Чистые линии, максимум пространства и света, современные материалы.</p>
          </div>
        </div>
        <div style={{ width: 300, border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80" alt="Детская комната" style={{ width: "100%", height: 180, objectFit: "cover" }} />
          <div style={{ padding: 16 }}>
            <h3>Детская комната</h3>
            <p>Яркие акценты, экологичные материалы, безопасная и творческая атмосфера.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;