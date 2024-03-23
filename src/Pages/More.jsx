import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { useEffect, useState } from 'react';

const More = () => {
   const { productId } = useParams();
   const [product, setProduct] = useState(null);

   useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((json) => setProduct(json));
   }, [productId]);

   console.log(product);

   return (
      <div>
         <Header/>
         <div className="w-[80%] m-auto mt-10 more-card flex justify-around">
            <div>
               <h2 className="mb-3 text-2xl font-bold">Title: {product.title}</h2>
               <p className="more-description text-[16px]">
                  <span className="des-span font-bold text-2xl">Description:</span> {product.description}
               </p>
               <p className="more-price">
                  <span className="des-span font-bold">Price:</span> {product.price}$
               </p>
               <p className="more-category">
                  <span className="des-span font-bold">Category:</span> {product.category}
               </p>
            </div>
            <img src={product.image} className="more-img w-[40%]" alt="rasm" />
         </div>
      </div>
   );
}

export default More;