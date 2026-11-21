import {
  DevicesIcon,
  HeadphonesIcon,
  SimIcon,
  SmartphoneIcon,
} from '../icons/Icons.jsx'

const ICONS = {
  smartphone: SmartphoneIcon,
  sim: SimIcon,
  devices: DevicesIcon,
  headphones: HeadphonesIcon,
}

function CategoryCard({ category }) {
  const Icon = ICONS[category.icon]

  return (
    <a className="category-card" href={category.href}>
      <span className="category-card__count">{category.count}</span>
      <span className="category-card__icon">
        <Icon />
      </span>
      <span className="category-card__label">{category.label}</span>
    </a>
  )
}

export default CategoryCard
