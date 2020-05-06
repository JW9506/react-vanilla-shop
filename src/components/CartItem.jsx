import React from "react"

const CartItem = ({ cartItem, handleAddToCart, handleRemoveOneFromCart }) => {
  return (
    <div className="CartItem">
      <span>{cartItem.itemName}</span>
      <span>(Quantity: {cartItem.quantity})</span>
      <button onClick={() => handleAddToCart(cartItem.id)}>Add One</button>
      <button onClick={() => handleRemoveOneFromCart(cartItem.id)}>
        Remove One
      </button>
    </div>
  )
}

export default CartItem
