import { CartIcon } from '../icons/Icons.jsx'
import './ProductCard.css'

const formatPrice = (value) => new Intl.NumberFormat('en-US').format(value)

function ProductCard({ product, isCompared, onToggleCompare, onAddToCart }) {
  return (
    <article className="product-card">
      <h3 className="product-card__title" title={product.title}>{product.title}</h3>

      <label className="product-card__compare">
        <input
          className="product-card__compare-input"
          type="checkbox"
          checked={isCompared}
          onChange={() => onToggleCompare(product.id)}
        />
        <span className="product-card__compare-box" aria-hidden="true" />
        <span className="product-card__compare-text">Համեմատել</span>
      </label>

      <div className="product-card__image">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <p className="product-card__price">{formatPrice(product.price)} ֏</p>

      <p className="product-card__installment">
        <span className="product-card__installment-label">Ապառիկի գին՝</span>
        <span className="product-card__installment-price">
          {formatPrice(product.installmentPrice)} ֏
        </span>
      </p>

      <button
        className="product-card__button"
        type="button"
        onClick={() => onAddToCart(product.id)}
      >
        <CartIcon size={22} />
        Ավելացնել զամբյուղ
      </button>
    </article>
  )
}

export default ProductCard
