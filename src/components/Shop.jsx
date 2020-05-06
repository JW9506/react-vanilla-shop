import React from "react"
import ShopItem from "./ShopItem"

const Shop = ({ shopItems, handleAddToCart }) => {
  return (
    <div className="Shop">
      {shopItems &&
        shopItems.map((shopItem) => (
          <ShopItem
            item={shopItem}
            handleAddToCart={handleAddToCart}
            key={shopItem.id}
          />
        ))}
    </div>
  )
}

export default Shop
