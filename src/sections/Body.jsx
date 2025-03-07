import React, { useEffect, useState } from "react";
import ProductCard from "../components/Body/ProductCard";
import { LuLoaderCircle } from "react-icons/lu";
import axios from "axios";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get("https://fakestoreapi.com/products");
    setLoading(false);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-[-150px] z-20 relative">
      {/* display all the products */}
      {loading ? (
        <div className="fixed inset-0 bg-black/50  inset-0 flex items-center justify-center">
          <LuLoaderCircle className="w-12 h-12 text-white animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {products.slice(1,products.length).map((productDetails, index) => {
            return (
              <ProductCard
                key={index}
                title={productDetails.title}
                description={productDetails.description}
                img={productDetails.image}
                price={productDetails.price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
