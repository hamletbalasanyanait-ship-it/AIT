import { useRef } from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'
import { ChevronRightIcon } from '../icons/Icons.jsx'
import './ProductSection.css'

const SCROLL_STEP = 288 // քարտի լայնություն (240) + բացվածք (48)

function ProductSection({
  section,
  comparedIds,
  onToggleCompare,
  onAddToCart,
}) {
  const trackRef = useRef(null)

  const scrollBy = (direction) => {
    trackRef.current?.scrollBy({ left: direction * SCROLL_STEP, behavior: 'smooth' })
  }

  return (
    <section className="product-section" aria-label={section.label} id={section.id}>
      <div className="product-section__wrap">
        <button
          type="button"
          className="product-section__arrow product-section__arrow--prev"
          aria-label="Նախորդ ապրանքները"
          onClick={() => scrollBy(-1)}
        >
          <ChevronRightIcon size={22} />
        </button>

        <div className="product-section__track" ref={trackRef}>
          {section.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isCompared={comparedIds.includes(product.id)}
              onToggleCompare={onToggleCompare}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <button
          type="button"
          className="product-section__arrow product-section__arrow--next"
          aria-label="Հաջորդ ապրանքները"
          onClick={() => scrollBy(1)}
        >
          <ChevronRightIcon size={22} />
        </button>
      </div>

      <div className="product-section__more">
        <a className="product-section__more-link" href={section.moreHref}>
          Տեսնել ավելին
        </a>
      </div>
    </section>
  )
}

export default ProductSection
