import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import NavMenu from './NavMenu.jsx'
import SearchBar from './SearchBar.jsx'
import HeaderActions from './HeaderActions.jsx'
import './Header.css'

function Header({ searchQuery, onSearchChange, cartCount, compareCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Escape-ով փակում ենք բացված mobile մենյուն և որոնումը
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const toggleMenu = () => {
    setMenuOpen((value) => !value)
    setSearchOpen(false)
  }

  const toggleSearch = () => {
    setSearchOpen((value) => !value)
    setMenuOpen(false)
  }

  return (
    <header className="eshop-header" id="top">
      <div className="eshop-header__bar">
        <Logo />
        <NavMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
        <SearchBar open={searchOpen} value={searchQuery} onChange={onSearchChange} />
        <HeaderActions
          cartCount={cartCount}
          compareCount={compareCount}
          searchOpen={searchOpen}
          menuOpen={menuOpen}
          onToggleSearch={toggleSearch}
          onToggleMenu={toggleMenu}
        />
      </div>
    </header>
  )
}

export default Header
