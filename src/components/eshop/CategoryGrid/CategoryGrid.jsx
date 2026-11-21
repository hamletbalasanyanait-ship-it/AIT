import CategoryCard from './CategoryCard.jsx'
import './CategoryGrid.css'

function CategoryGrid({ categories }) {
  return (
    <section className="category-grid" aria-label="Կատեգորիաներ">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  )
}

export default CategoryGrid
