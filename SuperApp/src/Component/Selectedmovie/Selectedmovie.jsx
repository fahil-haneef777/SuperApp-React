import React from 'react'
import './Selectedmovie.css'
function Selectedmovie({title,onClick}) {
  return (
    <button className='Selectedmovie-btn'>{title}  &nbsp;  <i onClick={onClick}className="fa fa-close close"></i></button>
  )
}

export default Selectedmovie