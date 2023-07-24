import { Filters } from "./Filters.jsx"
export function Header({changeFilters}) {
  return (
    <header className="header">
      <div className="container">
        <h1>Shopping Cart</h1>
        <Filters onChange={changeFilters} />
      </div>
    </header>
  )
}
