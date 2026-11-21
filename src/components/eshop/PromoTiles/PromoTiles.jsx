import PromoTile from './PromoTile.jsx'
import './PromoTiles.css'

function PromoTiles({ tiles }) {
  return (
    <section className="promo-tiles" aria-label="Տեղեկատվական բաժիններ">
      {tiles.map((tile) => (
        <PromoTile key={tile.id} tile={tile} />
      ))}
    </section>
  )
}

export default PromoTiles
