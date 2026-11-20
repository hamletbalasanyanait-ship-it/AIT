export default function TariffCard({ t }) {
  if (t.type === "custom") {
    return (
      <article className="tariff tariff--custom">
        <h3>{t.title}</h3>
        <h4>{t.sub}</h4>
        <p>{t.text}</p>
        <button className="btn btn--red">{t.btn}</button>
      </article>
    );
  }
  return (
    <article className="tariff">
      <h3 className="tariff__name">{t.name}</h3>
      <div className="tariff__price">{t.price}</div>
      <ul>
        <li><b>4G</b> {t.gb} <small>գբ</small></li>
        <li><b>📞</b> {t.min} <small>րոպե</small></li>
        <li><b>📺</b> {t.ch} <small>ալիք</small></li>
        <li><b>💬</b> {t.sms} <small>SMS</small></li>
      </ul>
      <div className="tariff__apps">
        <i style={{ background: "#1877f2" }}>f</i>
        <i style={{ background: "#a334fa" }}>m</i>
        <i style={{ background: "#25d366" }}>w</i>
        <i style={{ background: "#7360f2" }}>v</i>
        <i className="more">+6</i>
      </div>
      <button className="btn btn--outline">Մանրամասն</button>
    </article>
  );
}