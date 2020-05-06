import React from "react"

const ShopItem = ({ item, handleAddToCart }) => {
  return (
    <div className="ShopItem">
      <span>{item.itemName}</span>
      <span>${item.price}</span>
      <button onClick={() => handleAddToCart(item.id)}>Add To Cart</button>
    </div>
  )
}

export default ShopItem
