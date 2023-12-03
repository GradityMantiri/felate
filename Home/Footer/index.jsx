import React from 'react'

const Footer = (props) => {
  return (
    <div>
        <h1>footer</h1>
        <h2>{props.title}</h2>
        {/* Contoh penggunaan props lainnya */}
        <p>{props.description}</p>
    </div>
  )
}

export default Footer