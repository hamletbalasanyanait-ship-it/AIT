
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
            <a href="https://www.telecomarmenia.am/hy/combo-tariffs/combo-9900/451">Հայ</a>
            <a href="https://www.telecomarmenia.am/ru/combo-tariffs/combo-9900/451">Рус</a>
            <a href="https://www.telecomarmenia.am/en/combo-tariffs/combo-9900/451">Eng</a>
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
                <a href="https://www.telecomarmenia.am/hy/mobile-tariffs/#postpaid">
                  <img src="https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png" alt="" />
                  Բջջային կապ
                </a>

                <a href="https://www.telecomarmenia.am/hy/cosmo">
                  <img src="https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png" alt="" />
                  Ինտերնետ և TV - ԿՈՍՄՈ
                </a>

                <a href="https://www.telecomarmenia.am/hy/combo-tariffs/combo-9900/451/">
                  <img src="https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png" alt="" />
                  Ինտերնետ և TV - ԿՈՄԲՈ
                </a>

                <a href="https://www.telecomarmenia.am/hy/home-phone/">
                  <img src="https://www.telecomarmenia.am/files/icons/1/16510709622802/45x45.png" alt="" />
                  Ֆիքսված հեռախոսակապ
                </a>
              </div>
            )}
          </div>

          <a href="#">Ինտերնետ</a>
          <a href="#">Ծառայություններ</a>
          <a href="#">Ռոումինգ</a>
          <a href="https://www.telecomarmenia.am/eshop/hy">Առցանց խանութ</a>
          <a href="#">Առաջարկներ</a>
          <a href="#">Օգնություն</a>
        </div>

        <a className="payment-button" href="https://www.telecomarmenia.am/hy/payment/">
          Վճարումներ
        </a>
      </nav>
    </header>
  );
}

export default Header;
