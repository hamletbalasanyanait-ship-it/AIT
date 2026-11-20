import Reveal from "./Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <section className="section services">
      {services.map((s, i) => (
        <Reveal key={s.title} delay={i * 100}>
          <article className="service">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <a href="#more" className="service__link">Մանրամասն <span>›</span></a>
            <div className="service__art">{s.icon}</div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}