import { LOGO } from '../../../data/eshopData.js'

function Logo() {
  return (
    <a className="eshop-logo" href={LOGO.href} aria-label={LOGO.alt}>
      <img className="eshop-logo__img" src={LOGO.src} alt={LOGO.alt} />
    </a>
  )
}

export default Logo
