import { useState } from 'react'

function FooterAccordion({ sections }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="eshop-footer__accordion">
      {sections.map((section) => {
        const isOpen = openId === section.id
        return (
          <div key={section.id} className="eshop-footer__group">
            <button
              type="button"
              className="eshop-footer__group-button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : section.id)}
            >
              <span>{section.title}</span>
              <span
                className={`eshop-footer__arrow${isOpen ? ' is-open' : ''}`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <ul className="eshop-footer__links">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#footer">{link}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default FooterAccordion
