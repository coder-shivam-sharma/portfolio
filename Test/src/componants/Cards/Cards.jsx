import React from 'react'
import "./Cards.css"

function cards({title,image}) {
  return (
     <div className="cards">
      <h1>{title}</h1>
      <div className="hovercard">
        <img src={image} alt="" />
      </div>
      


     </div>
     
  )
}

export default cards
