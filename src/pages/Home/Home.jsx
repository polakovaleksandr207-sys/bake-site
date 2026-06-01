import { Link } from 'react-router-dom';
import { NEWS } from '../../data/products';
import NewsCard from '../../components/NewsCard/NewsCard';
import { IconLeaf, IconHands, IconFlame, IconHome, IconMapPin } from '../../components/Icons/Icons';
import './Home.css';

const CATEGORY_BLOCKS = [
  {
    to: '/bread',
    title: 'Ремесленный хлеб',
    desc: 'Закваска длительного брожения. 24 часа от замеса до прилавка.',
    image: '/photo/borodinskiy.jpg',
    color: '#7B3F00',
  },
  {
    to: '/pies',
    title: 'Пироги',
    desc: 'Обильная начинка, нежное дрожжевое тесто. По рецептам XIX века.',
    image: '/photo/pirog-yabloki.jpg',
    color: '#5C2E00',
  },
  {
    to: '/desserts',
    title: 'Десерты и торты',
    desc: 'Торты, пирожные и выпечка из натуральных ингредиентов без красителей.',
    image: '/photo/napoleon.jpg',
    color: '#A0522D',
  },
  {
    to: '/drinks',
    title: 'Напитки',
    desc: 'Живой квас, морсы и компоты. Только натуральные ингредиенты.',
    image: '/photo/kvas.jpg',
    color: '#C8960C',
  },
];

const VALUES = [
  {
    icon: <IconLeaf size={32} color="var(--color-primary)" />,
    title: 'Честность',
    desc: 'Закваска 12–24 часа. Никаких улучшителей, только мука, вода и соль.',
  },
  {
    icon: <IconHands size={32} color="var(--color-primary)" />,
    title: 'Ручная работа',
    desc: 'Каждая буханка формуется вручную. Поточное производство — не наш путь.',
  },
  {
    icon: <IconFlame size={32} color="var(--color-primary)" />,
    title: 'Подовая печь',
    desc: 'Хлеб выпекается на каменном поду. Так же, как 200 лет назад.',
  },
  {
    icon: <IconHome size={32} color="var(--color-primary)" />,
    title: 'Традиции',
    desc: 'Возрождаем рецептуры дореволюционных российских пекарен.',
  },
];

const BAKERY_LOCATIONS = [
  { address: 'ул. Вавилова, 62/1', hours: 'Пн–Вс: 8:00 – 21:00', phone: '+7 (863) 273-23-20' },
  { address: 'ул. Садовая, 15', hours: 'Пн–Вс: 7:00 – 22:00', phone: '+7 (863) 273-23-21' },
  { address: 'пр. Нансена, 84', hours: 'Пн–Вс: 8:00 – 20:00', phone: '+7 (863) 273-23-22' },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <span className="hero-label">Хлебная мануфактура</span>
            <h1 className="hero-title">
              Возрождаем русские<br />пекарные традиции
            </h1>
            <p className="hero-subtitle">
              Ремесленный хлеб на живой закваске. Без улучшителей, без консервантов.
              Только натуральные ингредиенты и 24 часа труда пекаря.
            </p>
            <div className="hero-actions">
              <Link to="/bread" className="btn btn-primary">Наш хлеб</Link>
              <Link to="/about" className="btn btn-outline hero-btn-outline">О нас</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Наши принципы</h2>
          <p className="section-subtitle">
            Что для нас важно в работе.
          </p>
          <div className="values-grid">
            {VALUES.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Наш ассортимент</h2>
          <p className="section-subtitle">Всё — из натуральных ингредиентов, ежедневно свежее</p>
          <div className="categories-grid">
            {CATEGORY_BLOCKS.map(cat => (
              <Link to={cat.to} key={cat.to} className="category-card">
                <img src={cat.image} alt={cat.title} loading="lazy" />
                <div className="category-card-overlay" style={{ background: `${cat.color}CC` }}>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <span className="category-card-link">Смотреть →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bakeries-preview">
        <div className="container">
          <h2 className="section-title">Где нас найти</h2>
          <p className="section-subtitle">Три пекарни в Ростове-на-Дону, все открыты ежедневно</p>
          <div className="bakeries-list">
            {BAKERY_LOCATIONS.map(b => (
              <div key={b.address} className="bakery-item">
                <IconMapPin size={22} color="var(--color-primary)" className="bakery-icon" />
                <div>
                  <strong>{b.address}</strong>
                  <span>{b.hours} · {b.phone}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/bakeries" className="btn btn-outline">Все пекарни</Link>
          </div>
        </div>
      </section>

      <section className="section news-preview" style={{ background: 'var(--color-bg-section)' }}>
        <div className="container">
          <h2 className="section-title">Новости</h2>
          <p className="section-subtitle">Следите за обновлениями ассортимента и акциями</p>
          <div className="news-grid">
            {NEWS.slice(0, 3).map(n => (
              <NewsCard key={n.id} news={n} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/news" className="btn btn-outline">Все новости</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-text">
            <h2>Получите коммерческое предложение</h2>
            <p>Сотрудничаем с кафе, ресторанами и магазинами. Постоянные поставки, гибкие условия.</p>
          </div>
          <Link to="/contacts" className="btn btn-primary">Связаться с нами</Link>
        </div>
      </section>
    </main>
  );
}
