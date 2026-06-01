import ProductCard from '../../components/ProductCard/ProductCard';
import './Catalog.css';

export default function Catalog({ title, subtitle, products }) {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="catalog-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
