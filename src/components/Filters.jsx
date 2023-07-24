import "./Filters.css"
import { useId } from "react"
import { useFilters } from "../hooks/useFilters.jsx"
export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeminPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }
  const handleChangecategory = (event) => {
    setFilters((prevState) => ({
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
          id={minPriceFilterId}
          min="0"
          max="1750"
          onChange={handleChangeminPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">categoria</label>
        <select name="#" id={categoryFilterId} onChange={handleChangecategory}>
          <option value="all">Todas</option>
          <option value="tech">Tech</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
