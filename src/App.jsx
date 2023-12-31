import "./index.css"
import { useState } from "react"
import { Products } from "./components/Products.jsx"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header.jsx"
import { useFilters } from "./hooks/useFilters.jsx"
import { Footer } from "./components/Footer.jsx"
import { IS_DEVELOPMENT } from "./components/config.js"

function App() {
  const [products] = useState(initialProducts)
  const { setFilters, filterProducts, filters } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
