// import React from "react";

import {Link} from "react-router-dom"

const Product= ({product}) => {
  return (
    <div className='w-[270px] p-2  flex flex-wrap items-end '>
      <img src={product.image} alt="" className="w-[100%] mb-[5px]" />
      <h3 className='block w-[100%]'> Company: {product.category}    </h3>
      <p className="block w-[100%] ">Price: {product.price} $</p>

      <Link to={`/${product.id}`}
       className="w-full h-[30px] bg-[#31e631] rounded p-1">
      <button className="btn">More...</button>
      
      </Link>

      
    </div>
  )
}

export default Product

