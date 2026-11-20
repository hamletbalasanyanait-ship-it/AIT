import { useRef, useState } from "react";
import TariffCard from "./TariffCard";
import Reveal from "./Reveal";
import { tariffs } from "../data/content";

export default function Tariffs() {
  const track = useRef(null);
  const [active, setActive] = useState(0);

  const goTo = (i) => {
    setActive(i);
    const card = track.current.children[i];
    track.current.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    const i = Math.round(el.scrollLeft / (el.children[0].offsetWidth + 16));
    if (i !== active) setActive(i);
  };

  return (
    <section className="section tariffs">
      <Reveal><h2>Բջջային կապի սակագներ</h2></Reveal>

      <div className="tariffs__track" ref={track} onScroll={onScroll}>
        {tariffs.map((t) => <TariffCard key={t.id} t={t} />)}
      </div>

      <div className="dots">
        {tariffs.map((t, i) => (
          <button key={t.id} className={i === active ? "on" : ""} onClick={() => goTo(i)} aria-label={`slide ${i + 1}`} />
        ))}
      </div>

      <div className="more-line"><span /><a href="#more">Տեսնել ավելին</a></div>
    </section>
  );
}