// import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"



const Product= ({product}) => {

  Product.propTypes = {
    product: PropTypes.shape({
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  };



  return (
    <div className='w-[300px] p-4  flex flex-wrap items-end '>
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
export default Product;

