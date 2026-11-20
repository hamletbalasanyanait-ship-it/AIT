
import "./Footer.css";

const sections = [
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16511388037707/45x45.png",
    title: "Ընկերության մասին",
    links: [
      ["Մեր մասին", "https://www.telecomarmenia.am/hy/about-us/"],
      ["Կապի թանգարան", "https://www.telecomarmenia.am/hy/connections-museum"],
      ["Նորություններ", "https://www.telecomarmenia.am/hy/news/"],
      ["Աշխատանք Տելեկոմ Արմենիայում", "https://www.telecomarmenia.am/hy/telecom-armenia-career/?tab=tab-2"],
      ["Արդյունքներ և հաշվետվություններ", "https://www.telecomarmenia.am/hy/results-reporting/"],
      ["Գործարար Էթիկա և Կոմպլայենս", "https://www.telecomarmenia.am/hy/compliance/"],
      ["Կայուն զարգացում", "https://www.telecomarmenia.am/hy/sustainable-development/"],
      ["Բաժնետերերին", "https://www.telecomarmenia.am/hy/to-shareholders/"],
    ],
  },
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16511387478667/45x45.png",
    title: "Տեղեկատվություն",
    links: [
      ["Ընդհանուր դրույթներ և պայմաններ", "https://www.telecomarmenia.am/hy/terms-and-conditions/"],
      ["Անվտանգություն", "https://www.telecomarmenia.am/hy/security/"],
      ["E-shop պայմաններ", "https://www.telecomarmenia.am/hy/eshop-terms/"],
      ["Ապառիկ վաճառքի պայմաններ", "https://www.telecomarmenia.am/hy/credit-terms/"],
      ["Առաքման պայմաններ", "https://www.telecomarmenia.am/hy/delivery-terms/"],
      ["Վաճառքի և սպասարկման կենտրոններ", "https://www.telecomarmenia.am/hy/offices/"],
      ["Ծածկույթ", "https://www.telecomarmenia.am/hy/coverage-areas/"],
      ["Բջջային ցանցի ծածկույթ", "https://www.telecomarmenia.am/hy/mobile-network-coverage-areas/"],
      ["Team ինտերնետի հասանելիության ծածկույթ", "https://www.telecomarmenia.am/hy/team-internet-available-areas/"],
      ["Օգտակար փաստաթղթեր", "https://www.telecomarmenia.am/hy/useful-documents/"],
      ["Գործընկերներին և մատակարարներին", "https://www.telecomarmenia.am/hy/procurement/qualifications/"],
      ["Գաղտնիության քաղաքականություն", "https://www.telecomarmenia.am/hy/privacy-policy/"],
      ["ՀՀ մարզերի կոդեր", "https://www.telecomarmenia.am/hy/codes-of-ra-regions/"],
    ],
  },
  {
    image: "https://www.telecomarmenia.am/files/icons/1/16511387748123/45x45.png",
    title: "Team հավելվածներ",
    mainLink: "https://www.telecomarmenia.am/hy/team-applications/",
    links: [
      ["TeamTV", "https://www.telecomarmenia.am/hy/team-applications/3/"],
      ["My Team", "https://www.telecomarmenia.am/hy/team-applications/1/"],
      ["TeamPay", "https://www.telecomarmenia.am/hy/team-applications/5/"],
      ["Team Energy", "https://www.telecomarmenia.am/hy/team-applications/6/"],
    ],
  },
];

const certificates = [
  {
    image: "https://www.telecomarmenia.am/img/redesign/iso_1.png",
    url: "https://telecomarmenia.am/file_manager/ISO_certificates/ISO%20new%202026/ISOIEC%20270012022%20en.pdf",
  },
  {
    image: "https://www.telecomarmenia.am/img/redesign/iso_2.png",
    url: "https://telecomarmenia.am/file_manager/ISO_certificates/ISO-90001_en.pdf",
  },
  {
    image: "https://www.telecomarmenia.am/img/redesign/iso_3.png",
    url: "https://telecomarmenia.am/file_manager/ISO_certificates/ISO%20new%202026/27701%20en.pdf",
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-right">
          <div className="footer-contact">
            <img
              className="footer-contact-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBbQ6H4YmhJttEvbcInOa-xVSZGTiS7D-SjooW4lsoA&s"
              alt=""
            />

            <a href="tel:100">
              <span>☎</span>
              100
            </a>

            <a href="mailto:info@telecomarmenia.am">
              <span>✉</span>
              info@telecomarmenia.am
            </a>
          </div>

          <div className="footer-apps">
            <img
              className="footer-qr"
              src="https://www.telecomarmenia.am/img/redesign/qr.svg"
              alt="QR"
            />

            <div className="app-links">
              <a href="https://apps.apple.com/us/app/my-beeline-armenia/id886204055">
                <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="App Store" />
              </a>

              <a href="https://play.google.com/store/apps/details?id=am.beeline.odp&hl=hy">
                <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="Google Play" />
              </a>
            </div>
          </div>

          <div className="footer-certificates">
            {certificates.map((certificate, index) => (
              <a href={certificate.url} target="_blank" rel="noreferrer" key={index}>
                <img src={certificate.image} alt="ISO Certificate" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-content">
          {sections.map((section, index) => (
            <div className="footer-column" key={index}>
              <div className="footer-title">
                <img src={section.image} alt="" />
                <a href={section.mainLink || "#"}>{section.title}</a>
              </div>

              {section.links.map(([name, url]) => (
                <a href={url} key={name}>{name}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-copy">
        © 2026 Տելեկոմ Արմենիա ԲԲԸ։ Բոլոր իրավունքները պաշտպանված են։
        Մշակվել է Թիմ Սոլյուշնս ՓԲԸ կողմից։
      </div>
    </footer>
  );
}

export default Footer;
