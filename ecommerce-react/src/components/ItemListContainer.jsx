import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "../data/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === itemId))
      }, 500)
    })

    getItem.then(res => setItem(res))
  }, [itemId])

  return item && <ItemDetail item={item} />
}

export default ItemDetailContainer
