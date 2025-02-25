import React, { useEffect, useState } from "react";
import ProductCard from "../components/Body/ProductCard";


const Body = () => {
  const [products,setProducts] = useState([])

 const fetchData = async () => {
 const res =  await fetch("https://fakestoreapi.com/products")
 const data = await res.json()
 setProducts(data)
 }

 useEffect(()=>{
  fetchData()
 },[])

 console.log("products",products)


  const array = [{id:1,name:"faraz",age:23},{id:1,name:"ahmed",age:23},{id:1,name:"furqan",age:23},{id:1,name:"hamza",age:23},{id:1,name:"Ali",age:23}]
  const returnedArray = array.map((itemDetails) => {
    console.log(itemDetails)
  })
  
  return (
    <div className="mt-[-150px] z-20 relative">
      {/* display all the products */}
      <div className="grid grid-cols-4 gap-4">
      {
        products.map((productDetails,index)=>{
        console.log("The component details for index",productDetails,index)
        return <ProductCard key={index} title={productDetails.title} description={productDetails.description} img={productDetails.image} price={productDetails.price} />
        }
          
        )
      }    
         
         
       
      </div>
    </div>
  );
};

export default Body;
