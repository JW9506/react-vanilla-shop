import React from "react"
import CartItem from "./CartItem"

const Cart = ({ cartItems, handleAddToCart, handleRemoveOneFromCart }) => {
  return (
    <div className="Cart">
      {cartItems &&
        cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            handleAddToCart={handleAddToCart}
            handleRemoveOneFromCart={handleRemoveOneFromCart}
          />
        ))}
      <span>
        Total: $
        {cartItems.reduce(
          (prev, cartItem) => prev + cartItem.price * cartItem.quantity,
          0
        )}
      </span>
    </div>
  )
}

export default Cart
