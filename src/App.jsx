import React, { useState, useEffect } from "react"
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import _Axios from "axios"

const Axios = _Axios.create({
  baseURL: "http://localhost:3001",
})

/*
type ShopItem = {
  id: string
  itemName: string
  price: number
}
type CartItem = ShopItem & { quantity: number }
*/
const App = () => {
  const [shopItems, setShopItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const { data } = await Axios.get("/api")
        setShopItems(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (itemId: string) => {
    const shopItem = shopItems.find((shopItem) => shopItem.id === itemId)
    const cartItem = cartItems.find((cartItem) => cartItem.id === itemId)
    if (!cartItem) {
      setCartItems((cartItems) =>
        cartItems.concat({
          ...shopItem,
          quantity: 1,
        })
      )
    } else {
      setCartItems((cartItems) =>
        cartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    }
  }

  const handleRemoveOneFromCart = (itemId: string) => {
    const cartItemToRemove = cartItems.find(
      (cartItem) => cartItem.id === itemId
    )
    if (cartItemToRemove.quantity > 1) {
      setCartItems((cartItems) =>
        cartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      )
    } else {
      setCartItems((cartItems) =>
        cartItems.filter((cartItem) => cartItem.id !== itemId)
      )
    }
  }

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Shop shopItems={shopItems} handleAddToCart={handleAddToCart} />
      )}
      <div>--------------</div>
      <Cart
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
        handleRemoveOneFromCart={handleRemoveOneFromCart}
      />
    </div>
  )
}

export default App
