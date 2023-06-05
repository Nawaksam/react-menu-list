import React, { useState } from "react"

function MenuItem({ item }) {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite)

  const handleClickFavorite = () => {
    setIsFavorite((state) => !state)
  }

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={item.foodImage} alt={item.itemName} />
        </div>
        <div className="itemDescription">
          <h3>{item.itemName}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="rightContainer">
        <div>{item.price} EUR</div>
        {isFavorite ? (
          <div
            id="favorite"
            className="isFavorite"
            onClick={handleClickFavorite}
          />
        ) : (
          <div
            id="favorite"
            className="notFavorite"
            onClick={handleClickFavorite}
          />
        )}
      </div>
    </div>
  )
}

export default MenuItem
