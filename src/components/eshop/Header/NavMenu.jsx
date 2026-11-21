import { NAV_LINKS } from '../../../data/eshopData.js'

function NavMenu({ open, onNavigate }) {
  return (
    <nav
      id="eshop-nav"
      className={`eshop-nav${open ? ' is-open' : ''}`}
      aria-label="Գլխավոր մենյու"
    >
      <ul className="eshop-nav__list">
        {NAV_LINKS.map((link) => (
          <li key={link.id} className="eshop-nav__item">
            <a className="eshop-nav__link" href={link.href} onClick={onNavigate}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu
