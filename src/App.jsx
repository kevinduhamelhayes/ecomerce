import "./index.css"
import { useState } from "react"
import { Products } from "./components/Products.jsx"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header.jsx"
function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: "all",
    minprice: 0,
  })
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minprice &&
        (filters.category === "all" || product.category === filters.category)
      )
    })
  }
  const filteredProducts = filterProducts(products)
  return(
    <>
      <Header changeFilters= {setFilters}/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
