import "./Filters.css"
import { useState, useId } from "react"
export function Filters({ onChange }) {
  const minPriceId = useId("min-price-")
  const categoryId = useId("category-")
  const [minPrice, setMinPrice] = useState(0)
  const handleChangeminPrice = (event) => {
    setMinPrice(event.target.value)
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }
  const handleChangecategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id={minPriceId}
          min="0"
          max="1750"
          onChange={handleChangeminPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">categoria</label>
        <select name="#" id={categoryId} onChange={handleChangecategory}>
          <option value="all">Todas</option>
          <option value="tech">Tech</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
