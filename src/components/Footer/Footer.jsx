import { Link } from 'react-router-dom';
import { IconWheat } from '../Icons/Icons';
import './Footer.css';

const DEPARTMENTS = [
  { label: 'Отдел продаж', phone: '+7 (863) 273-23-20' },
  { label: 'Отдел снабжения', phone: '+7 (863) 273-23-21' },
  { label: 'Технологи', phone: '+7 (863) 273-23-22' },
  { label: 'Контроль качества', phone: '+7 (863) 273-23-23' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <IconWheat size={26} color="var(--color-wheat)" />
            <span className="footer-logo-text">Хлебушек</span>
          </Link>
          <p className="footer-tagline">
            Ремесленный хлеб на живой закваске.<br />
            Возрождаем русские пекарные традиции.
          </p>
        </div>

        <div className="footer-nav">
          <h4>Разделы</h4>
          <ul>
            <li><Link to="/about">О компании</Link></li>
            <li><Link to="/bakeries">Пекарни</Link></li>
            <li><Link to="/bread">Хлеб</Link></li>
            <li><Link to="/pies">Пироги</Link></li>
            <li><Link to="/desserts">Десерты и торты</Link></li>
            <li><Link to="/news">Новости</Link></li>
            <li><Link to="/bonus">Бонусная программа</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </div>

        <div className="footer-contacts">
          <h4>Контакты отделов</h4>
          {DEPARTMENTS.map(d => (
            <div key={d.label} className="footer-dept">
              <span className="footer-dept-label">{d.label}:</span>
              <a href={`tel:${d.phone.replace(/\D/g, '')}`}>{d.phone}</a>
            </div>
          ))}
          <div className="footer-address">
            <p>ул. Вавилова, 62/1</p>
            <p>Ростов-на-Дону</p>
            <a href="mailto:ilja.alhimov@yandex.ru">ilja.alhimov@yandex.ru</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Хлебная мануфактура Хлебушек</span>
          <span>Все права защищены</span>
        </div>
      </div>
    </footer>
  );
}
