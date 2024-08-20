import React from 'react'

const CardProduct = ({ product }) => {
const { id, title, price, image } = product;

  return (
    <div className="card">
        <img src={image} className="images" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{price}</p>
          <a href="#" className="btn btn-primary" onClick={()=> addTocart(id, title, price, image)}>
            Agregar
          </a>
        </div>
      </div>
  )
}

export default CardProduct