import { useEffect, useRef, useState } from 'react'
import BannerSlide from './BannerSlide.jsx'
import './BannerSlider.css'

const SWIPE_THRESHOLD = 40

function BannerSlider({ slides, interval = 5000, initialIndex = 0 }) {
  const [index, setIndex] = useState(initialIndex)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const count = slides.length

  const goTo = (next) => setIndex((next + count) % count)

  // Ավտոմատ պտույտ (դադար՝ երբ մկնիկը slider-ի վրա է)
  useEffect(() => {
    if (paused || count < 2) return undefined
    const timer = setInterval(() => setIndex((value) => (value + 1) % count), interval)
    return () => clearInterval(timer)
  }, [paused, count, interval])

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    goTo(delta < 0 ? index + 1 : index - 1)
  }

  return (
    <section
      className="banner-slider"
      aria-roledescription="carousel"
      aria-label="Գովազդային banner-ներ"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="banner-slider__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="banner-slider__slide"
            aria-hidden={i !== index}
          >
            <BannerSlide slide={slide} />
          </div>
        ))}
      </div>

      <div className="banner-slider__dots" role="tablist">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}`}
            className={`banner-slider__dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default BannerSlider
