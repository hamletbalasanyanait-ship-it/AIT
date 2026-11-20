import Reveal from "./Reveal";
import { pbx } from "../data/content";

export default function VirtualPbx() {
  return (
    <section className="pbx">
      <Reveal><h2>ՎԻՐՏՈՒԱԼ ԱՀԿ</h2></Reveal>
      <div className="pbx__grid">
        {pbx.map((p, i) => (
          <Reveal key={p.text} delay={i * 120}>
            <div className="pbx__item">
              <div className="pbx__circle">{p.icon}</div>
              <p>{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <button className="btn btn--white btn--center">Մանրամասն</button>
    </section>
  );
}