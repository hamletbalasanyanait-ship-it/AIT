import { ChevronRightIcon } from '../icons/Icons.jsx'

function BannerSlide({ slide }) {
  if (slide.type === 'image') {
    return (
      <div className="banner-slide banner-slide--image">
        <img className="banner-slide__image" src={slide.image} alt={slide.alt} />
      </div>
    )
  }

  return (
    <a
      className={`banner-slide banner-slide--promo banner-slide--${slide.tone}`}
      href="#promo"
    >
      <div className="banner-slide__content">
        <p className="banner-slide__title">{slide.title}</p>
        <span className="banner-slide__cta">
          {slide.cta}
          <ChevronRightIcon size={14} />
        </span>
      </div>
      <img className="banner-slide__art" src={slide.image} alt="" />
    </a>
  )
}

export default BannerSlide
