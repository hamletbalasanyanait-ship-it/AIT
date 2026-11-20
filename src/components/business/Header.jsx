export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#top">team<span className="dot" /></a>
      <nav className="header__icons">
        <span title="Profile">👤</span>
        <span title="Wallet">💳</span>
        <span title="Cart">🛒</span>
        <span title="Menu" className="burger"><i /><i /><i /></span>
      </nav>
    </header>
  );
}