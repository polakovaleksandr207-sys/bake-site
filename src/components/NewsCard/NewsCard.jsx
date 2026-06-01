import './NewsCard.css';

export default function NewsCard({ news }) {
  return (
    <article className="news-card">
      <div className="news-card-image">
        <img src={news.image} alt={news.title} loading="lazy" />
      </div>
      <div className="news-card-body">
        <span className="news-card-date">{news.date}</span>
        <h3 className="news-card-title">{news.title}</h3>
        <p className="news-card-excerpt">{news.excerpt}</p>
        <span className="news-card-link">Подробнее →</span>
      </div>
    </article>
  );
}
