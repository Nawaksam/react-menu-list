import React, { useState } from "react"
import MenuItem from "./MenuItem"

function MenuList({ foodItems }) {
  console.log(foodItems)

  return (
    <div>
      {foodItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default MenuList

/*render a MenuItem component to each element of the props array*/
