import React from 'react'
import Evolution from '../evolution'
import TypeEffect from '../type-effect'
import Logo from '../logo'

const CardInfo = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {/* Contoh penggunaan props lainnya */}
      <p>{props.description}</p>
      <Evolution/>
      <TypeEffect/>
      <Logo/>
    </div>
  )
}

export default CardInfo
