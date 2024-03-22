// import React from 'react'

import { useEffect, useState } from "react";
import Product from "./Product";



const SectionOne = () => {
  
const [products, setProducts]= useState([]);
const [count, setCount]= useState(8);

function handleIncrease (){
   setCount(count+1);
}
function handleDecrease(){
    setCount(count-1);
}

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products?limit=${count}`)
    .then((res)=>res.json())
    .then((json)=>setProducts(json));
}, [count])
console.log(products);
 
  return (
    <div className="w-[80%] m-auto  mt-4">
      <div className="flex justify-between items-center mb-5">
        <p className="text-2xl">Yangi kelgan mahsulotlar</p>
        <div className="flex items-center">
        <button onClick={handleDecrease} disabled={count<2} className="w-[60px] m-2 p-1 text-2xl bg-gray-300 rounded">
                -
            </button>
            <p className="m-2 p-1">{count} ta mahsulot korsatilmoqda</p>
            <button onClick={handleIncrease} disabled={count>19} className="w-[60px] m-2 p-1 text-2xl bg-gray-300 rounded">
                +
            </button>
            
        </div>
      </div>

      <div className="w-full m-auto flex flex-wrap gap-2 ">
        {
            products.length===0 ? (<p>Loading...</p>) :(
                products.map((p)=> <Product product={p} key={p.id}  /> )
            )
        }
      </div>
     
    </div>
  );
};

export default SectionOne;
