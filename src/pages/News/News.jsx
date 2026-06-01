import { NEWS } from '../../data/products';
import NewsCard from '../../components/NewsCard/NewsCard';
import './News.css';

export default function News() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>Новости</h1>
          <p>Обновления ассортимента, акции и события мануфактуры</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="news-page-grid">
            {NEWS.map(n => (
              <NewsCard key={n.id} news={n} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
