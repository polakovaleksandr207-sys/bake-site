import { BAKERIES } from '../../data/products';
import { IconMapPin, IconClock, IconPhone, IconCake } from '../../components/Icons/Icons';
import './Bakeries.css';

export default function Bakeries() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>Наши пекарни</h1>
          <p>Три точки в Ростове-на-Дону — все открыты ежедневно</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="bakeries-grid">
            {BAKERIES.map((b, i) => (
              <div key={b.id} className="bakery-card">
                <div className="bakery-card-image">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                  />
                  <span className="bakery-card-number">0{i + 1}</span>
                </div>
                <div className="bakery-card-body">
                  <h2 className="bakery-card-name">{b.name}</h2>
                  <p className="bakery-card-desc">{b.description}</p>
                  <div className="bakery-card-info">
                    <div className="bakery-info-row">
                      <IconMapPin size={18} color="var(--color-primary-light)" className="bakery-info-icon" />
                      <span>{b.address}</span>
                    </div>
                    <div className="bakery-info-row">
                      <IconClock size={18} color="var(--color-primary-light)" className="bakery-info-icon" />
                      <span>{b.hours}</span>
                    </div>
                    <div className="bakery-info-row">
                      <IconPhone size={18} color="var(--color-primary-light)" className="bakery-info-icon" />
                      <a href={`tel:${b.phone.replace(/\D/g, '')}`}>{b.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bakeries-note" style={{ background: 'var(--color-bg-section)' }}>
        <div className="container bakeries-note-inner">
          <IconCake size={36} color="var(--color-primary)" className="bakeries-note-icon" />
          <div>
            <h3>Заказ тортов и праздничной выпечки</h3>
            <p>
              Принимаем заказы на торты, свадебную выпечку и корпоративные мероприятия.
              Срок изготовления — от 2 суток. Позвоните в любую из пекарен или оставьте
              заявку на странице <a href="/contacts">Контакты</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
