
import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-header">
        <div className="top-left">
          <a href="https://www.telecomarmenia.am/hy/b2c/">Անհատներին</a>
          <a href="https://www.telecomarmenia.am/hy/b2b/">Բիզնես</a>
          <a href="https://www.telecomarmenia.am/eshop/hy">E-shop</a>
        </div>

        <div className="top-right">
          <div className="languages">
            <a href="/hy/">Հայ</a>
            <a href="/ru/">Рус</a>
            <a href="/en/">Eng</a>
          </div>
          <a href="https://www.telecomarmenia.am/myaccount/#hy">
            Անձնական գրասենյակ
          </a>
        </div>
      </div>

      <nav className="main-header">
        <div className="team-logo">
          <strong>team<span>●</span></strong>
          <small>TELECOM ARMENIA</small>
        </div>

        <div className="main-menu">
          <div className="tariff-menu">
            <button onClick={() => setOpen(!open)}>
              Սակագներ ⌄
            </button>

            {open && (
              <div className="dropdown">
                <a href="#">Բջջային կապ</a>
                <a href="#">Ֆիքսված հեռախոսակապ</a>
                <a href="#">Ինտերնետ և TV</a>
                <a href="#">Combo փաթեթներ</a>
              </div>
            )}
          </div>

          <a href="#">Ինտերնետ</a>
          <a href="#">Ծառայություններ</a>
          <a href="#">Ռոումինգ</a>
          <a href="#">Առցանց խանութ</a>
          <a href="#">Առաջարկներ</a>
          <a href="#">Օգնություն</a>
        </div>

        <a className="payment-button"
          href="#">
          Վճարումներ
        </a>
      </nav>
    </header>
  );
}

export default Header;
