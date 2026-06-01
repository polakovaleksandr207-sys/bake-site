import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IconWheat, IconUser } from '../Icons/Icons';
import './Header.css';

const NAV_LINKS = [
  { to: '/about', label: 'О компании' },
  { to: '/bakeries', label: 'Пекарни' },
  { to: '/bread', label: 'Хлеб' },
  { to: '/pies', label: 'Пироги' },
  { to: '/desserts', label: 'Десерты и торты' },
  { to: '/drinks', label: 'Напитки' },
  { to: '/news', label: 'Новости' },
  { to: '/bonus', label: 'Бонусная программа' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top-inner">
          <Link to="/" className="logo">
            <IconWheat size={28} color="var(--color-primary)" className="logo-icon" />
            <span className="logo-text">Хлебушек</span>
          </Link>

          <div className="header-contacts">
            <a href="tel:+78632732320" className="header-phone">
              +7 (863) 273-23-20
            </a>
            <div className="header-auth">
              {currentUser ? (
                <>
                  <span className="header-username">
                    <IconUser size={16} color="var(--color-text-muted)" />
                    {currentUser.name}
                  </span>
                  <button className="btn-auth btn-logout" onClick={handleLogout}>
                    Выйти
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn-auth btn-login">Войти</Link>
                  <Link to="/register" className="btn-auth btn-register">Регистрация</Link>
                </>
              )}
            </div>
          </div>

          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Открыть меню"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <div className="container">
          <ul className="nav-list">
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-auth">
            {currentUser ? (
              <>
                <span className="mobile-username">
                  <IconUser size={16} color="rgba(255,255,255,0.8)" />
                  {currentUser.name}
                </span>
                <button className="btn-auth btn-logout" onClick={() => { handleLogout(); setMenuOpen(false); }}>
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-auth btn-login" onClick={() => setMenuOpen(false)}>Войти</Link>
                <Link to="/register" className="btn-auth btn-register" onClick={() => setMenuOpen(false)}>Регистрация</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
