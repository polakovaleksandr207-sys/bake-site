import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IconGift, IconLeaf, IconStar, IconTrophy, IconCheck } from '../../components/Icons/Icons';
import './BonusProgram.css';

const LEVELS = [
  {
    name: 'Начинающий',
    icon: <IconLeaf size={32} color="#6B9E3A" />,
    min: 0,
    max: 999,
    discount: '3%',
    color: '#6B9E3A',
    perks: ['Кэшбэк 3% с каждой покупки', 'Доступ к новинкам на 1 день раньше'],
  },
  {
    name: 'Постоянный',
    icon: <IconStar size={32} color="#C8960C" />,
    min: 1000,
    max: 4999,
    discount: '5%',
    color: '#C8960C',
    perks: ['Кэшбэк 5% с каждой покупки', 'Скидка 10% в день рождения', 'Приоритетный заказ тортов'],
  },
  {
    name: 'Преданный',
    icon: <IconTrophy size={32} color="#7B3F00" />,
    min: 5000,
    max: null,
    discount: '8%',
    color: '#7B3F00',
    perks: ['Кэшбэк 8% с каждой покупки', 'Скидка 15% в день рождения', 'Бесплатная доставка заказов от 500 ₽', 'Закрытые дегустации новинок'],
  },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Зарегистрируйтесь', desc: 'Создайте аккаунт на сайте или скажите кассиру свой номер телефона при первой покупке.' },
  { step: '02', title: 'Совершайте покупки', desc: 'Каждая покупка в любой из наших пекарен засчитывается в бонусный счёт.' },
  { step: '03', title: 'Копите бонусы', desc: 'Бонусы начисляются в течение 24 часов после покупки. 1 бонус = 1 рубль скидки.' },
  { step: '04', title: 'Тратьте с выгодой', desc: 'Оплачивайте бонусами до 30% стоимости любого заказа.' },
];

export default function BonusProgram() {
  const { currentUser } = useAuth();

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>Бонусная программа</h1>
          <p>Копите бонусы и получайте скидки в наших пекарнях</p>
        </div>
      </div>

      {!currentUser && (
        <div className="bonus-auth-banner">
          <div className="container bonus-auth-inner">
            <IconGift size={40} color="var(--color-primary)" className="bonus-auth-icon" />
            <div className="bonus-auth-text">
              <h3>Присоединитесь к программе</h3>
              <p>Зарегистрируйтесь, чтобы начать копить бонусы уже с первой покупки</p>
            </div>
            <div className="bonus-auth-actions">
              <Link to="/register" className="btn btn-primary">Зарегистрироваться</Link>
              <Link to="/login" className="btn btn-outline">Войти</Link>
            </div>
          </div>
        </div>
      )}

      {currentUser && (
        <div className="bonus-welcome-banner">
          <div className="container">
            <h3>Добро пожаловать, {currentUser.name}!</h3>
            <p>Вы участвуете в бонусной программе. Уровень: <strong>Начинающий</strong></p>
          </div>
        </div>
      )}

      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-title">Как это работает</h2>
          <div className="how-grid">
            {HOW_IT_WORKS.map(step => (
              <div key={step.step} className="how-card">
                <span className="how-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section levels-section" style={{ background: 'var(--color-bg-section)' }}>
        <div className="container">
          <h2 className="section-title">Уровни программы</h2>
          <p className="section-subtitle">Чем больше покупаете — тем выше уровень и привилегии</p>
          <div className="levels-grid">
            {LEVELS.map(level => (
              <div key={level.name} className="level-card" style={{ borderTopColor: level.color }}>
                <div className="level-icon">{level.icon}</div>
                <h3 className="level-name" style={{ color: level.color }}>{level.name}</h3>
                <div className="level-range">
                  {level.max
                    ? `${level.min} – ${level.max} бонусов`
                    : `от ${level.min} бонусов`}
                </div>
                <div className="level-discount">{level.discount} кэшбэк</div>
                <ul className="level-perks">
                  {level.perks.map(perk => (
                    <li key={perk}>
                      <IconCheck size={14} color="#6B9E3A" className="level-perk-check" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bonus-faq">
        <div className="container">
          <h2 className="section-title">Часто задаваемые вопросы</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Когда начисляются бонусы?</h4>
              <p>Бонусы зачисляются на счёт в течение 24 часов после совершения покупки.</p>
            </div>
            <div className="faq-item">
              <h4>Сколько бонусов можно потратить за раз?</h4>
              <p>Бонусами можно оплатить до 30% стоимости заказа. 1 бонус = 1 рубль.</p>
            </div>
            <div className="faq-item">
              <h4>Есть ли срок действия бонусов?</h4>
              <p>Бонусы действительны 12 месяцев с момента начисления. После этого сгорают.</p>
            </div>
            <div className="faq-item">
              <h4>Можно ли объединить несколько аккаунтов?</h4>
              <p>Нет, каждый клиент может иметь только один бонусный аккаунт.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
