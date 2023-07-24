import "./index.css"
import { useState } from "react"
import { Products } from "./components/Products.jsx"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header.jsx"
import { useFilters } from "./hooks/useFilters.jsx"

function App() {
  const [products] = useState(initialProducts)
  const { setFilters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
