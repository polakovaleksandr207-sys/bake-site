import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card-body">
        <div className="product-card-header">
          <h3 className="product-card-name">{product.name}</h3>
          <span className="product-card-weight">{product.weight}</span>
        </div>
        <p className="product-card-desc">{product.description}</p>
        <div className="product-card-footer">
          <span className="product-card-price">{product.price} ₽</span>
        </div>
      </div>
    </div>
  );
}
