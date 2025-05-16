import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../utils/auth";
import './Header.css';

const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=2563eb&color=fff";

function Header() {
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLogout = () => {
    logoutUser();
    setMenuOpen(false);
    navigate("/login");
  };

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/stamps", label: "Марки" },
    { to: "/coins", label: "Монеты" },
    { to: "/postcards", label: "Открытки" },
  ];

  return (
    <header style={{ width: 1202, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 40px", background: "#fff", boxShadow: "0 2px 12px #e0e0e0", position: "sticky", top: 0, left: 0, zIndex: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <span style={{ fontWeight: 700, fontSize: 26, color: "#059669" }}>Сайт коллекционеров</span>
        <nav style={{ display: "flex", gap: 24 }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: location.pathname === link.to ? "#059669" : "#22c55e",
                fontWeight: location.pathname === link.to ? 700 : 500,
                textDecoration: "none",
                fontSize: 18,
                borderBottom: location.pathname === link.to ? "2px solid #059669" : "none",
                paddingBottom: 2
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16 }}>
        {user ? (
          <>
            <img
              src={
                user?.avatarUrl
                  ? user.avatarUrl
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || user?.email || 'U')}`
              }
              alt="avatar"
              style={{ width: 44, height: 44, borderRadius: "50%", cursor: "pointer", border: "2px solid #eee" }}
              onClick={() => setMenuOpen((v) => !v)}
            />
            {menuOpen && (
              <div ref={menuRef} style={{ position: "absolute", right: 0, top: 54, background: "#fff", boxShadow: "0 2px 12px #e0e0e0", borderRadius: 10, minWidth: 180, zIndex: 10 }}>
                <button onClick={() => { setMenuOpen(false); navigate("/profile"); }} style={{ width: "100%", background: "none", border: "none", padding: "12px 18px", textAlign: "left", fontSize: 16, cursor: "pointer", color: "#222" }}>Профиль</button>
                <button onClick={() => { setMenuOpen(false); navigate("/profile"); setTimeout(() => { document.querySelector('button[aria-label="Редактировать профиль"]')?.click(); }, 100); }} style={{ width: "100%", background: "none", border: "none", padding: "12px 18px", textAlign: "left", fontSize: 16, cursor: "pointer", color: "#222" }}>Редактировать профиль</button>
                <button onClick={handleLogout} style={{ width: "100%", background: "none", border: "none", padding: "12px 18px", textAlign: "left", fontSize: 16, color: "#d63031", cursor: "pointer" }}>Выйти</button>
              </div>
            )}
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "#0984e3", fontWeight: 600, textDecoration: "none", fontSize: 17, marginRight: 12 }}>Вход</Link>
            <Link to="/register" style={{ color: "#0984e3", fontWeight: 600, textDecoration: "none", fontSize: 17 }}>Регистрация</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;