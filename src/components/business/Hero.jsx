const bubbles = [
  { label: "ՀՀ", cls: "b1" },
  { label: "ՌՈՒՍԱՍՏԱՆ", cls: "b2" },
  { label: "ԱՄՆ ԿԱՆԱԴԱ", cls: "b3" },
  { label: "ՉԻՆԱՍՏԱՆ", cls: "b4" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__rings">
        <span /><span /><span />
      </div>

      {bubbles.map((b) => (
        <div key={b.cls} className={`bubble ${b.cls}`}>{b.label}</div>
      ))}

      <div className="hero__text">
        <h1>Բիզնես</h1>
        <ul>
          <li>ԱՄՆ, Կանադա, Չինաստան զանգեր</li>
          <li>ՀՀ բոլոր զանգեր</li>
          <li>Ռուսաստանյան Beeline զանգ</li>
        </ul>
        <button className="btn btn--white">Մանրամասն</button>
      </div>

      <div className="hero__dots"><i /><i /><i className="on" /></div>
    </section>
  );
}