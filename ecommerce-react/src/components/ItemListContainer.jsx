import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../data/products"
import { Link } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 1000)
    })

    getProducts.then((data) => {
      if (categoryId) {
        const filtered = data.filter(
          (product) => product.category === categoryId
        )
        setItems(filtered)
      } else {
        setItems(data)
      }
    })
  }, [categoryId])

  return (
    <div style={{ padding: "20px" }}>
      <h2>{greeting}</h2>

      {items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>

          <Link to={`/item/${item.id}`}>
            Ver detalle
          </Link>
        </div>
      ))}

    </div>
  )
}

export default ItemListContainer
