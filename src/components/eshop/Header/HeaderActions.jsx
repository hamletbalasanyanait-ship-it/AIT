import {
  BurgerIcon,
  CartIcon,
  CompareIcon,
  SearchIcon,
  UserIcon,
} from '../icons/Icons.jsx'

function ActionButton({ label, count, className = '', children, ...rest }) {
  return (
    <button
      type="button"
      className={`eshop-header__action ${className}`}
      aria-label={label}
      {...rest}
    >
      {children}
      {count !== undefined && (
        <span className="eshop-header__badge" aria-hidden="true">
          {count}
        </span>
      )}
    </button>
  )
}

function HeaderActions({
  cartCount,
  compareCount,
  searchOpen,
  menuOpen,
  onToggleSearch,
  onToggleMenu,
}) {
  return (
    <div className="eshop-header__actions">
      <ActionButton
        label="Որոնում"
        className="eshop-header__action--search"
        aria-expanded={searchOpen}
        onClick={onToggleSearch}
      >
        <SearchIcon size={22} />
      </ActionButton>
      <ActionButton label="Անձնական էջ">
        <UserIcon size={26} />
      </ActionButton>
      <ActionButton label="Համեմատել" count={compareCount}>
        <CompareIcon size={26} />
      </ActionButton>
      <ActionButton label="Զամբյուղ" count={cartCount}>
        <CartIcon size={26} />
      </ActionButton>
      <ActionButton
        label="Մենյու"
        className="eshop-header__action--menu"
        aria-expanded={menuOpen}
        aria-controls="eshop-nav"
        onClick={onToggleMenu}
      >
        <BurgerIcon size={28} open={menuOpen} />
      </ActionButton>
    </div>
  )
}

export default HeaderActions
