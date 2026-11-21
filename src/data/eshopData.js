import logo from '../assets/eshop/brand/logo.png'
import iphoneOffer from '../assets/eshop/banners/iphone-offer.png'
import shopEasy from '../assets/eshop/promo/shop-easy.png'
import delivery from '../assets/eshop/promo/delivery.png'
import noInstallment from '../assets/eshop/promo/no-installment.png'
import installment from '../assets/eshop/promo/installment.png'
import laptopSlim5 from '../assets/eshop/products/laptop-lenovo-slim5.png'
import laptopSlim3 from '../assets/eshop/products/laptop-lenovo-slim3.png'
import laptopHp from '../assets/eshop/products/laptop-hp-15.png'
import phoneIphone from '../assets/eshop/products/phone-iphone-16.svg'
import phoneGalaxy from '../assets/eshop/products/phone-galaxy-a56.svg'
import phoneRedmi from '../assets/eshop/products/phone-redmi-note-14.svg'
import iso1 from '../assets/eshop/certs/iso-1.png'
import iso2 from '../assets/eshop/certs/iso-2.png'
import iso3 from '../assets/eshop/certs/iso-3.png'

export const LOGO = { src: logo, alt: 'Team Telecom Armenia', href: '#top' }

export const NAV_LINKS = [
  { id: 'smartphones', label: 'Սմարթֆոններ', href: '#smartphones' },
  { id: 'numbers', label: 'Համարներ', href: '#numbers' },
  { id: 'devices', label: 'Սարքավորումներ', href: '#devices' },
  { id: 'accessories', label: 'Աքսեսուարներ', href: '#accessories' },
]

export const CATEGORIES = [
  { id: 'smartphones', label: 'Սմարթֆոններ', count: 7, icon: 'smartphone', href: '#smartphones' },
  { id: 'numbers', label: 'Համարներ', count: 24, icon: 'sim', href: '#numbers' },
  { id: 'devices', label: 'Սարքավորումներ', count: 16, icon: 'devices', href: '#devices' },
  { id: 'accessories', label: 'Աքսեսուարներ', count: 3, icon: 'headphones', href: '#accessories' },
]

/*
 * Slider-ի 9 slide-ը (screenshot-ում 9 կետ կա, ակտիվը՝ վերջինը)։
 * type: 'image' — պատրաստի banner նկար, type: 'promo' — տեքստ + նկար։
 */
export const BANNER_SLIDES = [
  { id: 'b1', type: 'promo', title: 'Պարզ և Հարմար առցանց գնումներ', cta: 'Գնել', image: shopEasy, tone: 'sky' },
  { id: 'b2', type: 'promo', title: 'Առաքում ամբողջ Հայաստանով', cta: 'Մանրամասն', image: delivery, tone: 'navy' },
  { id: 'b3', type: 'promo', title: 'Առցանց ապառիկ առանց այցի', cta: 'Մանրամասն', image: noInstallment, tone: 'sand' },
  { id: 'b4', type: 'promo', title: 'Ապառիկ՝ հարմար պայմաններով', cta: 'Մանրամասն', image: installment, tone: 'sky' },
  { id: 'b5', type: 'promo', title: 'Նոր նոթբուքներ ձեր ընտրությամբ', cta: 'Գնել', image: shopEasy, tone: 'sand' },
  { id: 'b6', type: 'promo', title: 'Արագ առաքում Երևանում', cta: 'Մանրամասն', image: delivery, tone: 'sky' },
  { id: 'b7', type: 'promo', title: '0% ապառիկ ընտրված սարքերի վրա', cta: 'Մանրամասն', image: installment, tone: 'navy' },
  { id: 'b8', type: 'promo', title: 'Վճարեք առցանց՝ հեշտ և անվտանգ', cta: 'Մանրամասն', image: noInstallment, tone: 'sky' },
  { id: 'b9', type: 'image', image: iphoneOffer, alt: 'Ծանոթացեք ամենավերջին սերնդի iPhone-ին։ Սկսած 299 900 դրամ' },
]

export const PRODUCT_SECTIONS = [
  {
    id: 'laptops',
    label: 'Նոթբուքներ',
    moreHref: '#laptops',
    products: [
      { id: 'p1', title: 'Նոթբուք Lenovo IdeaPad Slim 5 16IPH11 Ultra 5 322/16GB/SSD512GB', price: 486900, installmentPrice: 486900, image: laptopSlim5 },
      { id: 'p2', title: 'Նոթբուք Lenovo IdeaPad Slim 3 15IRH10 i5-13420H/16GB/SSD512GB', price: 318900, installmentPrice: 318900, image: laptopSlim3 },
      { id: 'p3', title: 'Նոթբուք HP AI 15-FD2014 16GB/512GB', price: 409900, installmentPrice: 409900, image: laptopHp },
    ],
  },
  {
    id: 'smartphones',
    label: 'Սմարթֆոններ',
    moreHref: '#smartphones',
    products: [
      { id: 'p4', title: 'Սմարթֆոն Apple iPhone 16 128GB', price: 429900, installmentPrice: 429900, image: phoneIphone },
      { id: 'p5', title: 'Սմարթֆոն Samsung Galaxy A56 5G 8GB/256GB', price: 219900, installmentPrice: 219900, image: phoneGalaxy },
      { id: 'p6', title: 'Սմարթֆոն Xiaomi Redmi Note 14 Pro 8GB/256GB', price: 149900, installmentPrice: 149900, image: phoneRedmi },
    ],
  },
]

export const PROMO_TILES = [
  { id: 'simple', title: 'Պարզ և Հարմար', cta: 'ԳՆԵԼ', href: '#shop', tone: 'sky', image: shopEasy },
  { id: 'delivery', title: 'Առաքման Պայմաններ', cta: 'Մանրամասն', href: '#delivery', tone: 'navy', image: delivery },
  { id: 'online', title: 'Առցանց Ապառիկ', cta: 'Մանրամասն', href: '#online-installment', tone: 'sand', image: noInstallment },
  { id: 'installment', title: 'Ապառիկի Պայմաններ', cta: 'Մանրամասն', href: '#installment', tone: 'sky', image: installment },
]

export const SOCIAL_LINKS = [
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/telecomarmenia' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/telecomarmenia' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@telecomarmenia' },
]

export const CONTACTS = { phone: '100', phoneHref: 'tel:100', email: 'info@telecomarmenia.am' }

export const CERTIFICATES = [
  { id: 'iso27001', src: iso1, alt: 'ISO/IEC 27001 Certified' },
  { id: 'iso9001', src: iso2, alt: 'ISO 9001 Certified' },
  { id: 'iso27701', src: iso3, alt: 'ISO 27701 Certified' },
]

export const FOOTER_SECTIONS = [
  { id: 'about', title: 'Ընկերության մասին', links: ['Մեր մասին', 'Ղեկավարություն', 'Կարիերա', 'Լրահոս'] },
  { id: 'info', title: 'Տեղեկատվություն', links: ['Սակագներ', 'Գրասենյակներ', 'Հաճախ տրվող հարցեր', 'Կապ մեզ հետ'] },
  { id: 'apps', title: 'Team հավելվածներ', links: ['Team App', 'Google Play', 'App Store'] },
]

export const COPYRIGHT =
  '© 2026 Տելեկոմ Արմենիա ՓԲԸ: Բոլոր իրավունքները պաշտպանված են: Աշխատել է Թիմ Սոլուշնս ՓԲԸ Կողմից:'
