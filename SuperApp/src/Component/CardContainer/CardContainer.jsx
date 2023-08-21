import React from 'react'
import './CardContainer.css'
function CardContainer({children}) {
  return (
    <div className='Card-container'>{children}</div>
  )
}

export default CardContainer