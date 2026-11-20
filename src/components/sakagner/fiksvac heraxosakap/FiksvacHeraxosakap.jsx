
import "./FiksvacHeraxosakap.css";

const mobileItems = [
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16514909792549/80x80.png",
    title: "Be Free 5000",
    value: "5,000",
  },
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16510708980018/80x80.png",
    title: "Րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և t2*",
    value: "3,000",
    unit: "րոպե",
  },
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16510702991504/80x80.png",
    title: "SMS դեպի ՀՀ բոլոր ցանցեր",
    value: "500",
    unit: "SMS",
  },
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16509740618025/80x80.png",
    title: "Բջջային ինտերնետ",
    value: "Անսահմ․",
  },
  {
    image: "https://www.telecomarmenia.am/files/icons/1/17144783965957/80x80.png",
    title: "Ինտերնետ ռոումինգում",
    value: "200",
    unit: "ՄԲ",
  },
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16994293629645/80x80.png",
    title: "3 Be Free հատուկ պայմաններով",
    value: "",
  },
];

const fixedItems = [
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16511239783327/80x80.png",
    title: "Ֆիքսված ինտերնետ (մինչև)",
    value: "100",
    unit: "Մբիթ/վրկ",
  },
  {
    image: "https://www.telecomarmenia.am/files/icons/1/17616451672333/80x80.png",
    title: "TeamTV (+1 TeamTV հավելված)",
    value: "150",
    unit: "ալիք",
  },
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16510709622802/80x80.png",
    title: "Րոպեներ",
    value: "180",
    unit: "րոպե",
  },
];

function TariffItem({ item }) {
  return (
    <div className="included-item">
      <img src={item.image} alt={item.title} />
      <div className="included-info">
        <p>{item.title}</p>
        {item.value && (
          <strong>
            {item.value} {item.unit && <small>{item.unit}</small>}
          </strong>
        )}
      </div>
    </div>
  );
}

function FiksvacHeraxosakap() {
  return (
    <section className="tariffs">
      <div className="tariff-cards">
        <a className="tariff-card" href="https://www.telecomarmenia.am/hy/mobile-tariffs/#postpaid">
          <img src="https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png" alt="" />
          <h2>Բջջային կապ</h2>
        </a>

        <a className="tariff-card" href="https://www.telecomarmenia.am/hy/cosmo">
          <img src="https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png" alt="" />
          <h2>Ինտերնետ և TV - ԿՈՍՄՈ</h2>
        </a>

        <a className="tariff-card" href="https://www.telecomarmenia.am/hy/combo-tariffs/combo-9900/451/">
          <img src="https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png" alt="" />
          <h2>Ինտերնետ և TV - ԿՈՄԲՈ</h2>
        </a>

        <a className="tariff-card" href="https://www.telecomarmenia.am/hy/home-phone/">
          <img src="https://www.telecomarmenia.am/files/icons/1/16510709622802/45x45.png" alt="" />
          <h2>Ֆիքսված հեռախոսակապ</h2>
        </a>
      </div>

      <div className="breadcrumbs">
        <a href="https://www.telecomarmenia.am/hy/">Գլխավոր</a>
        <span>›</span>
        <a href="https://www.telecomarmenia.am/hy/b2c/">Անհատներին</a>
        <span>›</span>
        <a href="https://www.telecomarmenia.am/hy/tariffs/">Սակագներ</a>
        <span>›</span>
        <a href="https://www.telecomarmenia.am/hy/combo-tariffs/combo-9900/451/">
          Ինտերնետ և TV - ԿՈՄԲՈ
        </a>
      </div>

      <div className="page-content">
        <aside className="package-sidebar">
          <h2>Ընտրիր քո փաթեթը</h2>

          <div className="package-item">
            <p>1. ԿՈՄԲՈ 2: Երկուսը մեկում փաթեթ</p>
          </div>

          <div className="package-item">
            <p>2. ԿՈՄԲՈ 3: Երեքը մեկում փաթեթ</p>
          </div>

          <div className="package-item">
            <p>3. ԿՈՄԲՈ 4: Չորսը մեկում փաթեթ</p>
            <a href="https://www.telecomarmenia.am/hy/combo-tariffs/combo-9900/451/">
              ԿՈՄԲՈ 4 9900
            </a>
            <a href="https://www.telecomarmenia.am/hy/combo-tariffs/combo-regional/34/">
              ԿՈՄԲՈ 4 Մարզային 7990
            </a>
          </div>
        </aside>

        <main className="package-details">
          <h1>ԿՈՄԲՈ 4 9900</h1>

          <div className="price-info">
            <p>Ամսական վճարը 9900 դրամ է։</p>
            <p>Զեղչված արժեք՝ 7425 դրամ։</p>
            <p>
              Զեղչը գործում է 17.11.2026-17.02.2027թ․
              բաժանորդագրությամբ միանալու դեպքում։
            </p>
          </div>

          <h2>Բջջային ներառումներ</h2>
          <div className="included-grid">
            {mobileItems.map((item, index) => (
              <TariffItem key={index} item={item} />
            ))}
          </div>

          <h2>Ֆիքսված ներառումներ</h2>
          <div className="included-grid">
            {fixedItems.map((item, index) => (
              <TariffItem key={index} item={item} />
            ))}
          </div>

          <button className="join-button" type="button">
            Միանալ
          </button>

          <div className="equipment">
            <div>
              <img src="https://www.telecomarmenia.am/file_manager/wifi%2090.png" alt="Wi-Fi սարք" />
              <p>Wi-Fi սարք</p>
            </div>

            <div>
              <img src="https://www.telecomarmenia.am/file_manager/TV%20box%2090.png" alt="TV Box" />
              <p>TV Box</p>
            </div>

            <div>
              <img src="https://www.telecomarmenia.am/file_manager/3SIM.png" alt="3 Be Free հատուկ պայմաններով" />
              <p>3 Be Free հատուկ պայմաններով</p>
            </div>
          </div>

          <p className="archive-text">
            Արխիվային սակագնային և ինտերնետ{" "}
            <a href="https://www.telecomarmenia.am/hy/combo-tariffs/archive/">
              փաթեթներ
            </a>
          </p>
        </main>
      </div>
    </section>
  );
}

export default FiksvacHeraxosakap;
