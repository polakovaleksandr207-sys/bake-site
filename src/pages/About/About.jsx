import { IconTimer, IconWheat, IconFlame, IconList, IconLeaf, IconHands, IconHome } from '../../components/Icons/Icons';
import './About.css';

const STORY_POINTS = [
  {
    year: '2012',
    title: 'Начало',
    text: 'Алексей Гриднев открывает первую пекарню на ул. Вавилова. Основная идея — возродить традиционный русский хлеб на живой закваске, которого не стало после советской индустриализации.',
  },
  {
    year: '2016',
    title: 'Рост',
    text: 'Открытие второй пекарни. В ассортименте появляются пироги по дореволюционным рецептам, десерты и живые напитки. Начало работы с ресторанами и кафе Ростова-на-Дону.',
  },
  {
    year: '2020',
    title: 'Мануфактура',
    text: 'Запуск собственного производства. Установка подовых печей из натурального камня. Сертификация по системе ХАССП, собственная лаборатория контроля качества.',
  },
  {
    year: '2026',
    title: 'Сегодня',
    text: 'Три пекарни, более 60 наименований изделий, ежедневная выпечка. Каждая буханка — ручная работа от замеса до прилавка.',
  },
];

const CRAFT_FACTS = [
  { icon: <IconTimer size={32} color="rgba(255,255,255,0.9)" />, value: '24 часа', label: 'от замеса до прилавка' },
  { icon: <IconWheat size={32} color="rgba(255,255,255,0.9)" />, value: '12–30 часов', label: 'брожение закваски' },
  { icon: <IconFlame size={32} color="rgba(255,255,255,0.9)" />, value: '270 °C', label: 'температура подовой печи' },
  { icon: <IconList size={32} color="rgba(255,255,255,0.9)" />, value: '60+', label: 'наименований в ассортименте' },
];

const VALUES = [
  {
    icon: <IconLeaf size={28} color="var(--color-primary)" />,
    title: 'Честность',
    text: 'Состав каждого изделия — на этикетке. Никаких скрытых ингредиентов. Закваска, мука, вода и соль. Всё остальное — вариации на эту тему.',
  },
  {
    icon: <IconHands size={28} color="var(--color-primary)" />,
    title: 'Ручная работа',
    text: 'Каждая буханка формуется вручную нашими пекарями. Мы намеренно отказались от конвейерного производства — это позволяет контролировать качество каждого изделия.',
  },
  {
    icon: <IconFlame size={28} color="var(--color-primary)" />,
    title: 'Подовая печь',
    text: 'Хлеб выпекается на каменном поду при высокой температуре. Именно так формируется хрустящая корочка и особый аромат, которого нет у хлеба из стандартных форм.',
  },
  {
    icon: <IconHome size={28} color="var(--color-primary)" />,
    title: 'Традиции',
    text: 'Рецептуры основаны на архивах российских пекарен XIX века. Мы изучаем историю и стараемся сохранить то лучшее, что было утеряно в период индустриализации.',
  },
];

export default function About() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>О компании</h1>
          <p>Хлебная мануфактура Хлебушек — Ростов-на-Дону</p>
        </div>
      </div>

      <section className="section about-intro">
        <div className="container about-intro-inner">
          <div className="about-intro-text">
            <h2>Миссия</h2>
            <p>
              Мы возрождаем подлинный вкус русского хлеба — того, который был до
              промышленной унификации. Нашу работу определяют три принципа:
              живая закваска, ручной труд и каменная печь.
            </p>
            <p>
              Основатель мануфактуры Алексей Гриднев изучает архивы российских
              пекарен XIX века: рецептурные журналы, кулинарные книги, дневники
              артельных мастеров. Часть наших изделий — реконструкция оттуда.
            </p>
            <p>
              Мы работаем только с российскими поставщиками сырья, поддерживаем
              фермерские хозяйства юга России и категорически отказываемся от
              улучшителей, разрыхлителей и консервантов.
            </p>
          </div>
          <div className="about-intro-image">
            <img src="/photo/about-baker.jpg" alt="Пекарня Хлебушек" />
          </div>
        </div>
      </section>

      <section className="craft-section">
        <div className="container">
          <h2 className="section-title">Ремесленный хлеб — в цифрах</h2>
          <div className="craft-facts-grid">
            {CRAFT_FACTS.map(f => (
              <div key={f.label} className="craft-fact">
                <div className="craft-icon">{f.icon}</div>
                <strong className="craft-value">{f.value}</strong>
                <span className="craft-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section history-section">
        <div className="container">
          <h2 className="section-title">История мануфактуры</h2>
          <p className="section-subtitle">14 лет от первой буханки до трёх пекарен</p>
          <div className="timeline">
            {STORY_POINTS.map((point, i) => (
              <div key={point.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{point.year}</span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-about">
        <div className="container">
          <h2 className="section-title">Наши ценности</h2>
          <div className="values-about-grid">
            {VALUES.map(v => (
              <div key={v.title} className="value-about-card">
                <div className="value-about-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
