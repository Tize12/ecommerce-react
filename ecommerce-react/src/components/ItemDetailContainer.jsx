import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../data/products"

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id === Number(itemId)))
      }, 1000)
    })

    getItem.then((data) => {
      setItem(data)
    })
  }, [itemId])

  if (!item) {
    return <p>Cargando producto...</p>
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{item.name}</h2>
      <p>Categoría: {item.category}</p>
      <p>Precio: ${item.price}</p>

      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetailContainer
