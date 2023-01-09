import React from 'react'
import './SingleCard.css'

export function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card)
  }
  return (
    <div>
      <div className="card">
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
