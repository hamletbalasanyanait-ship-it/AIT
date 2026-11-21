import FooterAccordion from './FooterAccordion.jsx'
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  YoutubeIcon,
} from '../icons/Icons.jsx'
import {
  CERTIFICATES,
  CONTACTS,
  COPYRIGHT,
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
} from '../../../data/eshopData.js'
import './Footer.css'

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
}

function Footer() {
  return (
    <footer className="eshop-footer" id="footer">
      <div className="eshop-footer__top">
        <ul className="eshop-footer__social">
          {SOCIAL_LINKS.map((item) => {
            const Icon = SOCIAL_ICONS[item.id]
            return (
              <li key={item.id}>
                <a href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                  <Icon size={28} />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="eshop-footer__contacts">
          <a className="eshop-footer__contact" href={CONTACTS.phoneHref}>
            <PhoneIcon size={22} />
            <span>{CONTACTS.phone}</span>
          </a>
          <a className="eshop-footer__contact" href={`mailto:${CONTACTS.email}`}>
            <MailIcon size={22} />
            <span>{CONTACTS.email}</span>
          </a>
        </div>

        <ul className="eshop-footer__certs">
          {CERTIFICATES.map((cert) => (
            <li key={cert.id}>
              <img src={cert.src} alt={cert.alt} width="66" height="66" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>

      <FooterAccordion sections={FOOTER_SECTIONS} />

      <p className="eshop-footer__copyright">{COPYRIGHT}</p>
    </footer>
  )
}

export default Footer
