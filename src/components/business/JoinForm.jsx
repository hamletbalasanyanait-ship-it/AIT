import { useState } from "react";
import Reveal from "./Reveal";

export default function JoinForm() {
  const [form, setForm] = useState({ number: "", name: "", org: "", phone: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Շնորհակալություն, հայտը ընդունված է");
  };

  return (
    <section className="join">
      <Reveal>
        <h2>ՏԵՂԱՓՈԽՎԵ՛Ք TEAM ՁԵՐ ՀԱՄԱՐՈՎ</h2>
        <p className="join__sub">
          Դարձե՛ք Team բաժանորդ, օգտվեք ցանցի առավելություններից՝ պահելով ձեր բջջային հեռախոսի համարը:
        </p>
      </Reveal>

      <form className="join__form" onSubmit={submit}>
        <label>Տեղափոխվող համար (0XXYYYYYY ֆորմատով)*
          <input required placeholder="0" value={form.number} onChange={set("number")} />
        </label>
        <label>Անուն Ազգանուն*
          <input required value={form.name} onChange={set("name")} />
        </label>
        <label>Կազմակերպություն*
          <input required value={form.org} onChange={set("org")} />
        </label>
        <label>Կոնտակտային համար*
          <input required placeholder="0" value={form.phone} onChange={set("phone")} />
        </label>
        <button className="btn btn--red btn--center" type="submit">Միանալ</button>
      </form>
    </section>
  );
}