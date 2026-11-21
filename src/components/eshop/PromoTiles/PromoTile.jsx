import { ChevronRightIcon } from '../icons/Icons.jsx'

function PromoTile({ tile }) {
  return (
    <a className={`promo-tile promo-tile--${tile.tone}`} href={tile.href}>
      <h3 className="promo-tile__title">{tile.title}</h3>
      <span className="promo-tile__cta">
        {tile.cta}
        <ChevronRightIcon size={14} />
      </span>
      <img className="promo-tile__image" src={tile.image} alt="" loading="lazy" />
    </a>
  )
}

export default PromoTile
