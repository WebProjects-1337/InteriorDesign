import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "40px", background: "#f8f9fa", minHeight: "100vh" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#2d3436" }}>Добро пожаловать в InteriorDesign</h1>
        <p style={{ fontSize: "1.2rem", color: "#636e72" }}>
          Вдохновляйтесь идеями, находите профессиональных дизайнеров и создавайте интерьер своей мечты!
        </p>
      </header>
      <div style={{ padding: "40px 24px", background: "#fff", color: "#222", boxShadow: "0 2px 12px #e0e0e0", width: "100%" }}>
        <section style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "260px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px #dfe6e9", padding: "24px" }}>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Галерея проектов"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "16px", objectFit: "cover", height: "140px" }}
            />
            <h2 style={{ color: "#0984e3" }}>
              <Link to="/gallery" style={{ color: "#0984e3", textDecoration: "none" }}>Галерея проектов</Link>
            </h2>
            <p>Просматривайте лучшие работы дизайнеров и вдохновляйтесь современными решениями.</p>
          </div>
          <div style={{ flex: "1", minWidth: "260px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px #dfe6e9", padding: "24px" }}>
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
              alt="Найдите дизайнера"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "16px", objectFit: "cover", height: "140px" }}
            />
            <h2 style={{ color: "#00b894" }}>
              <Link to="/designers" style={{ color: "#00b894", textDecoration: "none" }}>Найдите дизайнера</Link>
            </h2>
            <p>Ищите профессионалов по стилю, опыту и отзывам клиентов.</p>
          </div>
          <div style={{ flex: "1", minWidth: "260px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px #dfe6e9", padding: "24px" }}>
            <img
              src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80"
              alt="Советы и статьи"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "16px", objectFit: "cover", height: "140px" }}
            />
            <h2 style={{ color: "#fdcb6e" }}>
              <Link to="/tips" style={{ color: "#fdcb6e", textDecoration: "none" }}>Советы и статьи</Link>
            </h2>
            <p>Читайте полезные материалы о трендах, планировке и декоре интерьера.</p>
          </div>
        </section>
      </div>
      <footer style={{ marginTop: "60px", color: "#b2bec3", fontSize: "0.95rem" }}>
        &copy; {new Date().getFullYear()} InteriorDesign. Все права защищены.
      </footer>
    </div>
  );
}

export default HomePage;