import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IconWheat } from '../../components/Icons/Icons';
import './Auth.css';

const EMPTY_FORM = { name: '', email: '', password: '', passwordConfirm: '' };

const PASSWORD_MIN_LENGTH = 6;

export default function Register() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  function validateForm() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }
    if (!formData.password) {
      newErrors.password = 'Введите пароль';
    } else if (formData.password.length < PASSWORD_MIN_LENGTH) {
      newErrors.password = `Минимум ${PASSWORD_MIN_LENGTH} символов`;
    }
    if (!formData.passwordConfirm) {
      newErrors.passwordConfirm = 'Повторите пароль';
    } else if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = 'Пароли не совпадают';
    }
    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (serverError) setServerError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const registerResult = register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    if (!registerResult.success) {
      setServerError(registerResult.error);
      return;
    }
    navigate('/');
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <IconWheat size={24} color="var(--color-primary)" />
            <span>Хлебушек</span>
          </Link>
          <h1>Регистрация</h1>
          <p>Создайте аккаунт и начните копить бонусы</p>
        </div>

        {serverError && (
          <div className="auth-error-banner">{serverError}</div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Ваше имя</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ivan@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder={`Минимум ${PASSWORD_MIN_LENGTH} символов`}
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="passwordConfirm">Повторите пароль</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="Введите пароль ещё раз"
              value={formData.passwordConfirm}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.passwordConfirm && (
              <span className="form-error">{errors.passwordConfirm}</span>
            )}
          </div>

          <p className="auth-terms">
            Регистрируясь, вы соглашаетесь с условиями{' '}
            <span className="auth-terms-link">пользовательского соглашения</span> и{' '}
            <span className="auth-terms-link">политикой конфиденциальности</span>.
          </p>

          <button type="submit" className="btn btn-primary auth-submit">
            Зарегистрироваться
          </button>
        </form>

        <div className="auth-footer">
          <span>Уже есть аккаунт?</span>
          <Link to="/login">Войти</Link>
        </div>
      </div>
    </main>
  );
}
