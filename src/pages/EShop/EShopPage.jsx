import { useMemo, useState } from 'react'
import Header from '../../components/eshop/Header/Header.jsx'
import BannerSlider from '../../components/eshop/BannerSlider/BannerSlider.jsx'
import CategoryGrid from '../../components/eshop/CategoryGrid/CategoryGrid.jsx'
import ProductSection from '../../components/eshop/ProductSection/ProductSection.jsx'
import PromoTiles from '../../components/eshop/PromoTiles/PromoTiles.jsx'
import Footer from '../../components/eshop/Footer/Footer.jsx'
import ChatButton from '../../components/eshop/ChatButton/ChatButton.jsx'
import {
  BANNER_SLIDES,
  CATEGORIES,
  PRODUCT_SECTIONS,
  PROMO_TILES,
} from '../../data/eshopData.js'
import '../../styles/eshop-tokens.css'
import './EShopPage.css'

function EShopPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [comparedIds, setComparedIds] = useState([])

  const handleAddToCart = () => setCartCount((count) => count + 1)

  const handleToggleCompare = (productId) => {
    setComparedIds((ids) =>
      ids.includes(productId)
        ? ids.filter((id) => id !== productId)
        : [...ids, productId],
    )
  }

  // Որոնումը ֆիլտրում է ապրանքները ըստ անվանման
  const visibleSections = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return PRODUCT_SECTIONS
    return PRODUCT_SECTIONS.map((section) => ({
      ...section,
      products: section.products.filter((product) =>
        product.title.toLowerCase().includes(query),
      ),
    })).filter((section) => section.products.length > 0)
  }, [searchQuery])

  return (
    <div className="eshop-page">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartCount}
        compareCount={comparedIds.length}
      />

      <main className="eshop-page__main">
        <h1 className="eshop-sr-only">Telecom Armenia E-shop</h1>

        {/* Screenshot-ում ակտիվ է վերջին slide-ը, ուստի սկսում ենք դրանից */}
        <BannerSlider slides={BANNER_SLIDES} initialIndex={BANNER_SLIDES.length - 1} />

        <CategoryGrid categories={CATEGORIES} />

        {visibleSections.map((section) => (
          <ProductSection
            key={section.id}
            section={section}
            comparedIds={comparedIds}
            onToggleCompare={handleToggleCompare}
            onAddToCart={handleAddToCart}
          />
        ))}

        {visibleSections.length === 0 && (
          <p className="eshop-page__empty">
            Ձեր հարցմամբ ապրանք չի գտնվել։ Փորձեք այլ բառ։
          </p>
        )}

        <PromoTiles tiles={PROMO_TILES} />
      </main>

      <Footer />
      <ChatButton />
    </div>
  )
}

export default EShopPage
