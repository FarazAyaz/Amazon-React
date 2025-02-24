import React from "react";
import ProductCard from "../components/Body/ProductCard";
const productsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Body = () => {
  return (
    <div className="mt-[-150px] z-20 relative">
      {/* display all the products */}
      <div className="grid grid-cols-4 gap-4">
        {productsArray.map((pro, i) => (
          
            <ProductCard />
         
        ))}
      </div>
    </div>
  );
};

export default Body;
