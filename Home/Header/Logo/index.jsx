import React from 'react'

const Logo = () => {
  return (
    <div>
        <h1>logo</h1>
        <h2>{props.title}</h2>
        {/* Contoh penggunaan props lainnya */}
        <p>{props.description}</p>
    </div>
  )
}

export default Logo