/*
 * E-shop-ի բոլոր icon-ները՝ inline SVG։ Գույնը վերցվում է currentColor-ից,
 * չափը՝ size prop-ից։
 */
function Svg({ size = 24, children, viewBox = '0 0 24 24', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const SearchIcon = (props) => (
  <Svg {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20.5 20.5 16.2 16.2" />
  </Svg>
)

export const UserIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="8" r="4.5" />
    <path d="M3.5 21c.6-4.2 4-6.5 8.5-6.5s7.9 2.3 8.5 6.5Z" />
  </Svg>
)

export const CompareIcon = (props) => (
  <Svg {...props}>
    <path d="M12 3v17M7 20.5h10M4 7h16" />
    <path d="M4 7 1.8 13.5a3 3 0 0 0 4.4 0L4 7ZM20 7l-2.2 6.5a3 3 0 0 0 4.4 0L20 7Z" />
  </Svg>
)

export const CartIcon = (props) => (
  <Svg {...props}>
    <path d="M2 3h3l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 7H6" />
    <circle cx="9.5" cy="19.5" r="1.4" />
    <circle cx="17" cy="19.5" r="1.4" />
  </Svg>
)

export const BurgerIcon = ({ open = false, ...props }) => (
  <Svg {...props} strokeWidth="2">
    {open ? (
      <path d="M5 5l14 14M19 5 5 19" />
    ) : (
      <path d="M3 6h18M3 12h18M3 18h18" />
    )}
  </Svg>
)

export const ChevronRightIcon = (props) => (
  <Svg {...props} strokeWidth="2.2">
    <path d="m9 5 7 7-7 7" />
  </Svg>
)

export const PhoneIcon = (props) => (
  <Svg {...props}>
    <path d="M6.6 3.5 9 3l1.6 4.2-2 1.4a11 11 0 0 0 5.8 5.8l1.4-2L20.2 14l-.5 2.4a2.5 2.5 0 0 1-2.5 2.1A15.7 15.7 0 0 1 4.5 6a2.5 2.5 0 0 1 2.1-2.5Z" />
  </Svg>
)

export const MailIcon = (props) => (
  <Svg {...props}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="m3 7 9 6.5L21 7" />
  </Svg>
)

export const FacebookIcon = (props) => (
  <Svg {...props} fill="currentColor" stroke="none">
    <path d="M13.5 21v-8h2.7l.5-3.2h-3.2V7.9c0-.9.4-1.7 1.8-1.7h1.5V3.4S15.5 3.2 14.3 3.2c-2.6 0-4.1 1.5-4.1 4.2v2.4H7.5V13h2.7v8h3.3Z" />
  </Svg>
)

export const InstagramIcon = (props) => (
  <Svg {...props} strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </Svg>
)

export const YoutubeIcon = (props) => (
  <Svg {...props} fill="currentColor" stroke="none">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  </Svg>
)

/* Category icons (նեղ, ուղղահայաց չափեր՝ viewBox 48x48) */
export const SmartphoneIcon = ({ size = 48, ...props }) => (
  <Svg size={size} viewBox="0 0 48 48" strokeWidth="2.6" {...props}>
    <rect x="14" y="4" width="20" height="40" rx="4" />
    <circle cx="24" cy="38" r="1.3" fill="currentColor" stroke="none" />
  </Svg>
)

export const SimIcon = ({ size = 48, ...props }) => (
  <Svg size={size} viewBox="0 0 48 48" strokeWidth="2.6" {...props}>
    <path d="M25 5H14a4 4 0 0 0-4 4v30a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V25" />
    <rect x="26" y="8" width="16" height="14" rx="3" />
    <circle cx="34" cy="14" r="1.8" />
    <path d="M30 22v-2" />
  </Svg>
)

export const DevicesIcon = ({ size = 48, ...props }) => (
  <Svg size={size} viewBox="0 0 48 48" strokeWidth="2.6" {...props}>
    <path d="M30 12V8a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h14" />
    <path d="M14 40h8M18 31v9" />
    <rect x="28" y="16" width="16" height="27" rx="3" />
    <path d="M34 39h4" />
  </Svg>
)

export const HeadphonesIcon = ({ size = 48, ...props }) => (
  <Svg size={size} viewBox="0 0 48 48" strokeWidth="2.6" {...props}>
    <path d="M6 30V24a18 18 0 0 1 36 0v6" />
    <rect x="6" y="28" width="9" height="14" rx="4.5" fill="currentColor" />
    <rect x="33" y="28" width="9" height="14" rx="4.5" fill="currentColor" />
  </Svg>
)

export const ChatBotIcon = ({ size = 32, ...props }) => (
  <Svg size={size} viewBox="0 0 32 32" strokeWidth="2" {...props}>
    <path d="M5 5h22a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H15l-6 5v-5H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    <path d="M11 11v2M21 11v2" />
    <path d="M11 17c1.2 1.4 2.8 2 5 2s3.8-.6 5-2" />
  </Svg>
)
