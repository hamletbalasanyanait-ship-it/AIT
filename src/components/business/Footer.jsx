import { footerCols } from "../../business/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <a className="logo" href="#top">team<span className="dot" /></a>
          <div className="socials"><span>f</span><span>◎</span><span>▶</span></div>
          <p>📞 100</p>
          <p>✉️ info@telecomarmenia.am</p>
          <div className="certs"><i>ISO</i><i>ISO</i><i>ISO</i></div>
        </div>

        {footerCols.map((c) => (
          <div key={c.title} className="footer__col">
            <h4>{c.title}</h4>
            <ul>{c.links.map((l) => <li key={l}><a href="#!">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="footer__copy">
        © 2026 Տելեկոմ Արմենիա ՓԲԸ: Բոլոր իրավունքները պաշտպանված են:
      </div>
    </footer>
  );
}