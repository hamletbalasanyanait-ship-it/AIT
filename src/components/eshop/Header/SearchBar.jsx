import { useEffect, useRef } from 'react'
import { SearchIcon } from '../icons/Icons.jsx'

function SearchBar({ open, value, onChange }) {
  const inputRef = useRef(null)

  // Երբ mobile-ում search-ը բացվում է, կուրսորը դնում ենք input-ի մեջ
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  return (
    <form
      className={`eshop-search${open ? ' is-open' : ''}`}
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        ref={inputRef}
        className="eshop-search__input"
        type="search"
        placeholder="Որոնել ապրանք..."
        aria-label="Որոնում"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button className="eshop-search__submit" type="submit" aria-label="Որոնել">
        <SearchIcon size={20} />
      </button>
    </form>
  )
}

export default SearchBar
