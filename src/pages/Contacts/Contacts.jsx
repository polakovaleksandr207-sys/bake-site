import { useState } from 'react';
import { IconMapPin, IconPhone, IconMail, IconClock, IconCheckCircle } from '../../components/Icons/Icons';
import './Contacts.css';

const DEPARTMENTS = [
  { label: 'Отдел продаж', phone: '+7 (863) 273-23-20', desc: 'Оптовые заказы, сотрудничество' },
  { label: 'Отдел снабжения', phone: '+7 (863) 273-23-21', desc: 'Предложения от поставщиков' },
  { label: 'Технологи', phone: '+7 (863) 273-23-22', desc: 'Рецептуры и ингредиенты' },
  { label: 'Контроль качества', phone: '+7 (863) 273-23-23', desc: 'Жалобы и предложения' },
];

const EMPTY_FORM = { name: '', phone: '', email: '', message: '', consent: false };

export default function Contacts() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validateForm() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите ваше имя';
    if (!formData.phone.trim()) newErrors.phone = 'Введите телефон';
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }
    if (!formData.message.trim()) newErrors.message = 'Введите сообщение';
    if (!formData.consent) newErrors.consent = 'Необходимо согласие';
    return newErrors;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setFormData(EMPTY_FORM);
  }

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами удобным способом</p>
        </div>
      </div>

      <section className="section contacts-section">
        <div className="container contacts-grid">
          <div className="contacts-info">
            <div className="contacts-main">
              <h2>Главный офис и производство</h2>
              <div className="contact-detail">
                <IconMapPin size={20} color="var(--color-primary-light)" className="contact-icon" />
                <div>
                  <strong>Адрес</strong>
                  <span>ул. Вавилова, 62/1, Ростов-на-Дону</span>
                </div>
              </div>
              <div className="contact-detail">
                <IconPhone size={20} color="var(--color-primary-light)" className="contact-icon" />
                <div>
                  <strong>Телефон</strong>
                  <a href="tel:+78632732320">+7 (863) 273-23-20</a>
                </div>
              </div>
              <div className="contact-detail">
                <IconMail size={20} color="var(--color-primary-light)" className="contact-icon" />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:ilja.alhimov@yandex.ru">ilja.alhimov@yandex.ru</a>
                </div>
              </div>
              <div className="contact-detail">
                <IconClock size={20} color="var(--color-primary-light)" className="contact-icon" />
                <div>
                  <strong>Режим работы</strong>
                  <span>Пн–Вс: 8:00 – 21:00</span>
                </div>
              </div>
            </div>

            <div className="departments">
              <h3>Контакты отделов</h3>
              <div className="departments-grid">
                {DEPARTMENTS.map(d => (
                  <div key={d.label} className="dept-card">
                    <strong>{d.label}</strong>
                    <a href={`tel:${d.phone.replace(/\D/g, '')}`}>{d.phone}</a>
                    <span>{d.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contacts-form-wrapper">
            <h2>Получить предложение</h2>
            <p className="form-lead">
              Оставьте заявку — мы свяжемся с вами в течение рабочего дня.
            </p>

            {submitted ? (
              <div className="form-success">
                <IconCheckCircle size={48} color="#6B9E3A" className="form-success-icon" />
                <h3>Заявка отправлена!</h3>
                <p>Мы свяжемся с вами в ближайший рабочий день. Спасибо за обращение.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Ваше имя *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Телефон *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Сообщение *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Опишите ваш запрос..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <div className="form-group form-group-checkbox">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                    />
                    <span>
                      Я согласен на обработку персональных данных в соответствии
                      с политикой конфиденциальности
                    </span>
                  </label>
                  {errors.consent && <span className="form-error">{errors.consent}</span>}
                </div>

                <button type="submit" className="btn btn-primary contact-submit">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
